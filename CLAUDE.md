@AGENTS.md

# Sightseeing Map

Next.js 16 app with React 19, TypeScript, Tailwind v4, Supabase, and Leaflet/react-leaflet for an interactive sightseeing map.

## Stack
- **Next.js 16** — App Router, `src/app/` with `(dashboard)` route group
- **Supabase** — client in `src/lib/supabase.ts`
- **Leaflet + react-leaflet** — map in `src/components/map-view.tsx`
- **shadcn/ui** — components in `src/components/ui/`, config in `components.json`
- **Tailwind v4** — PostCSS-based, no `tailwind.config`

## Key files
- `src/data/locations.json` — static location data
- `src/lib/SmoothWheelZoom.js` — custom Leaflet plugin
- `src/app/(dashboard)/map/page.tsx` — main map route

## Commands
```
npm run dev    # start dev server
npm run build  # production build
npm run lint   # eslint
```
