"use client"

import dynamic from "next/dynamic"

// SSR must be off — Leaflet reads window/document at import time
const MapView = dynamic(() => import("@/components/map-view"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full rounded-lg bg-muted animate-pulse flex items-center justify-center">
      <p className="text-muted-foreground text-sm">Loading map…</p>
    </div>
  ),
})

export default function MapPage() {
  return (
    <div className="flex flex-col h-full gap-4">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Map</h2>
        <p className="text-muted-foreground mt-1">Explore and pin sightseeing locations.</p>
      </div>
      <div className="flex-1 min-h-0">
        <MapView />
      </div>
    </div>
  )
}
