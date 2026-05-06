"use client"

import { useEffect, useRef, useState } from "react"
import { MapContainer, ImageOverlay, CircleMarker, Marker, Popup, useMap, useMapEvents } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import locations from "@/data/locations.json"
import calibration from "@/data/calibration.json"
import { CoordinateTransform, parseVec3 } from "@/lib/coordinate-transform"
import "@/lib/SmoothWheelZoom"
import { useMapContext } from "@/lib/map-context"
import { clusterMarkers, type LocationEntry } from "@/lib/cluster-locations"
import { PhotoGallery } from "@/components/photo-gallery"

let transform: CoordinateTransform | null = null
try {
  transform = new CoordinateTransform(calibration.points)
} catch {
  // calibration not set up yet
}

const IMAGE_HEIGHT = 6144
const BOUNDS: L.LatLngBoundsExpression = [[0, 0], [IMAGE_HEIGHT, 4096]]

function toLatLng(x: number, y: number): L.LatLngExpression {
  return [IMAGE_HEIGHT - y, x]
}

function MapInit() {
  const map = useMap()
  useEffect(() => {
    map.fitBounds(BOUNDS, { padding: [0, 0] })
    map.invalidateSize()
  }, [map])
  return null
}

function FlyToLocation({
  markerRefs,
  onPhotoOpen,
}: {
  markerRefs: React.MutableRefObject<Map<string, L.CircleMarker | null>>
  onPhotoOpen: (locs: LocationEntry[]) => void
}) {
  const map = useMap()
  const { selectedLocationId } = useMapContext()

  useEffect(() => {
    if (!selectedLocationId) return
    const loc = locations.find((l) => l.id === selectedLocationId)
    if (!loc || !transform) return
    const [gx, gy, gz] = parseVec3(loc.coords)
    const { x, y } = transform.gameToPixel(gx, gy, gz)

    if (loc.category === "photo") {
      map.once("moveend", () => onPhotoOpen([loc]))
    } else {
      map.once("moveend", () => {
        markerRefs.current.get(selectedLocationId)?.openPopup()
      })
    }
    map.flyTo(toLatLng(x, y) as L.LatLngExpression, 1, { duration: 0.8 })
  }, [selectedLocationId, map, markerRefs, onPhotoOpen])

  return null
}

function MapMarkers({
  markerRefs,
  onPhotoClick,
}: {
  markerRefs: React.MutableRefObject<Map<string, L.CircleMarker | null>>
  onPhotoClick: (locs: LocationEntry[]) => void
}) {
  const map = useMap()
  const [zoom, setZoom] = useState(() => map.getZoom())

  useMapEvents({
    zoomend: () => setZoom(map.getZoom()),
  })

  if (!transform) return null

  const allItems = locations.map((loc) => {
    const [gx, gy, gz] = parseVec3(loc.coords)
    const { x, y } = transform!.gameToPixel(gx, gy, gz)
    return { id: loc.id, x, y, loc }
  })

  const photoItems = allItems.filter((item) => item.loc.category === "photo")
  const landmarkItems = allItems.filter((item) => item.loc.category !== "photo")
  const clusters = clusterMarkers(photoItems, 40, zoom)

  return (
    <>
      {landmarkItems.map(({ id, loc, x, y }) => (
        <CircleMarker
          key={id}
          ref={(el) => { markerRefs.current.set(id, el) }}
          center={toLatLng(x, y)}
          radius={6}
          pathOptions={{ color: "#a855f7", fillColor: "#a855f7", fillOpacity: 0.9, weight: 2 }}
        >
          <Popup>
            <div className="text-sm">
              <p className="font-semibold">{loc.name}</p>
              {loc.description && <p className="text-muted-foreground mt-0.5">{loc.description}</p>}
              <p className="text-xs mt-1 opacity-60">{loc.category}</p>
            </div>
          </Popup>
        </CircleMarker>
      ))}

      {clusters.map((cluster, i) => {
        const locs = cluster.markers.map((m) => m.loc)
        if (cluster.markers.length === 1) {
          return (
            <CircleMarker
              key={cluster.markers[0].id}
              center={toLatLng(cluster.cx, cluster.cy)}
              radius={6}
              pathOptions={{ color: "#f59e0b", fillColor: "#f59e0b", fillOpacity: 0.9, weight: 2 }}
              eventHandlers={{ click: () => onPhotoClick(locs) }}
            />
          )
        }
        return (
          <Marker
            key={`cluster-${i}`}
            position={toLatLng(cluster.cx, cluster.cy) as L.LatLngExpression}
            icon={L.divIcon({
              html: `<div class="cluster-marker">${cluster.markers.length}</div>`,
              className: "",
              iconSize: [36, 36],
              iconAnchor: [18, 18],
            })}
            eventHandlers={{ click: () => onPhotoClick(locs) }}
          />
        )
      })}
    </>
  )
}

export default function MapView() {
  const markerRefs = useRef<Map<string, L.CircleMarker | null>>(new Map())
  const [galleryPhotos, setGalleryPhotos] = useState<LocationEntry[] | null>(null)

  return (
    <>
      <style>{`
        .cluster-marker {
          width: 36px; height: 36px;
          background: #f59e0b; color: #000;
          border-radius: 50%; border: 2px solid #fff;
          display: flex; align-items: center; justify-content: center;
          font-size: 13px; font-weight: 700;
          cursor: pointer;
        }
      `}</style>
      <MapContainer
        crs={L.CRS.Simple}
        bounds={BOUNDS}
        minZoom={-3}
        maxZoom={4}
        scrollWheelZoom={false}
        smoothWheelZoom={true}
        smoothSensitivity={1}
        attributionControl={false}
        className="h-full w-full rounded-lg isolate"
        style={{ background: "#0f0f1e" }}
      >
        <ImageOverlay url="/chase_map_base.avif" bounds={BOUNDS} />
        <MapInit />
        <MapMarkers markerRefs={markerRefs} onPhotoClick={setGalleryPhotos} />
        <FlyToLocation markerRefs={markerRefs} onPhotoOpen={setGalleryPhotos} />
      </MapContainer>
      <PhotoGallery
        photos={galleryPhotos ?? []}
        open={galleryPhotos !== null}
        onClose={() => setGalleryPhotos(null)}
      />
    </>
  )
}
