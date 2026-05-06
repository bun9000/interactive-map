import locations from "@/data/locations.json"

export type LocationEntry = (typeof locations)[number]

export type MarkerItem = {
  id: string
  x: number
  y: number
  loc: LocationEntry
}

export type Cluster = {
  markers: MarkerItem[]
  cx: number
  cy: number
}

export function clusterMarkers(items: MarkerItem[], screenPx: number, zoom: number): Cluster[] {
  const threshold = screenPx / Math.pow(2, zoom)
  const assigned = new Set<string>()
  const clusters: Cluster[] = []

  for (const item of items) {
    if (assigned.has(item.id)) continue
    assigned.add(item.id)
    const members: MarkerItem[] = [item]

    for (const other of items) {
      if (assigned.has(other.id)) continue
      const dx = other.x - item.x
      const dy = other.y - item.y
      if (Math.sqrt(dx * dx + dy * dy) <= threshold) {
        members.push(other)
        assigned.add(other.id)
      }
    }

    const cx = members.reduce((s, m) => s + m.x, 0) / members.length
    const cy = members.reduce((s, m) => s + m.y, 0) / members.length
    clusters.push({ markers: members, cx, cy })
  }

  return clusters
}
