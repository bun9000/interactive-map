"use client"

import { useEffect, useRef } from "react"
import { MapContainer, ImageOverlay, CircleMarker, Popup, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import locations from "@/data/locations.json"
import "@/lib/SmoothWheelZoom"
import { useMapContext } from "@/lib/map-context"

const IMAGE_HEIGHT = 6144
const BOUNDS: L.LatLngBoundsExpression = [[0, 0], [IMAGE_HEIGHT, 4096]]

// Image pixels have y increasing downward; Leaflet CRS.Simple has lat increasing upward.
// So we flip: lat = IMAGE_HEIGHT - pixel_y
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

function FlyToLocation({ markerRefs }: { markerRefs: React.MutableRefObject<Map<string, L.CircleMarker | null>> }) {
  const map = useMap()
  const { selectedLocationId } = useMapContext()

  useEffect(() => {
    if (!selectedLocationId) return
    const loc = locations.find((l) => l.id === selectedLocationId)
    if (!loc) return
    map.once("moveend", () => {
      markerRefs.current.get(selectedLocationId)?.openPopup()
    })
    map.flyTo(toLatLng(loc.x, loc.y) as L.LatLngExpression, 1, { duration: 0.8 })
  }, [selectedLocationId, map, markerRefs])

  return null
}

export default function MapView() {
  const markerRefs = useRef<Map<string, L.CircleMarker | null>>(new Map())

  return (
    <MapContainer
      crs={L.CRS.Simple}
      bounds={BOUNDS}
      minZoom={-3}
      maxZoom={4}
      scrollWheelZoom={false}
      smoothWheelZoom={true}
      smoothSensitivity={1}
      attributionControl={false}
      className="h-full w-full rounded-lg"
      style={{ background: "#0f0f1e" }}
    >
      <ImageOverlay url="/chase_map_base.avif" bounds={BOUNDS} />

      {locations.map((loc) => (
        <CircleMarker
          key={loc.id}
          ref={(el) => { markerRefs.current.set(loc.id, el) }}
          center={toLatLng(loc.x, loc.y)}
          radius={6}
          pathOptions={{ color: "#a855f7", fillColor: "#a855f7", fillOpacity: 0.9, weight: 2 }}
        >
          <Popup>
            <div className="text-sm">
              <p className="font-semibold">{loc.name}</p>
              {loc.description && <p className="text-muted-foreground mt-0.5">{loc.description}</p>}
              {loc.category && <p className="text-xs mt-1 opacity-60">{loc.category}</p>}
            </div>
          </Popup>
        </CircleMarker>
      ))}

      <MapInit />
      <FlyToLocation markerRefs={markerRefs} />
    </MapContainer>
  )
}
