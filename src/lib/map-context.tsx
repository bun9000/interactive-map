"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface MapContextValue {
  selectedLocationId: string | null
  setSelectedLocationId: (id: string | null) => void
}

const MapContext = createContext<MapContextValue | null>(null)

export function MapContextProvider({ children }: { children: ReactNode }) {
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null)
  return (
    <MapContext.Provider value={{ selectedLocationId, setSelectedLocationId }}>
      {children}
    </MapContext.Provider>
  )
}

export function useMapContext() {
  const ctx = useContext(MapContext)
  if (!ctx) throw new Error("useMapContext must be used within MapContextProvider")
  return ctx
}
