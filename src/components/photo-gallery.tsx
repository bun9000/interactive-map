"use client"

import { useEffect, useState } from "react"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import type { LocationEntry } from "@/lib/cluster-locations"

type Props = {
  photos: LocationEntry[]
  open: boolean
  onClose: () => void
}

export function PhotoGallery({ photos, open, onClose }: Props) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)

  useEffect(() => {
    setLightboxIdx(null)
  }, [photos])

  function handleOpenChange(nextOpen: boolean) {
    if (!nextOpen) {
      setLightboxIdx(null)
      onClose()
    }
  }

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetContent side="right" className="flex flex-col gap-0 p-0">
        <SheetHeader className="p-4 pb-2 pr-12 border-b">
          {lightboxIdx !== null ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLightboxIdx(null)}
                className="p-1 rounded hover:bg-muted shrink-0"
              >
                <ArrowLeft className="size-4" />
              </button>
              <SheetTitle className="truncate">{photos[lightboxIdx]?.name}</SheetTitle>
            </div>
          ) : (
            <SheetTitle>
              {photos.length === 1 ? "1 photo" : `${photos.length} photos in this area`}
            </SheetTitle>
          )}
        </SheetHeader>

        {lightboxIdx !== null ? (
          <LightboxView photos={photos} idx={lightboxIdx} onChangeIdx={setLightboxIdx} />
        ) : (
          <div className="flex-1 overflow-y-auto p-4">
            <div className="grid grid-cols-2 gap-3">
              {photos.map((loc, idx) => (
                <button
                  key={loc.id}
                  onClick={() => setLightboxIdx(idx)}
                  className="text-left rounded-lg overflow-hidden border border-border hover:border-amber-500/60 transition-colors"
                >
                  {loc.img ? (
                    <img
                      src={loc.img}
                      alt={loc.name}
                      className="w-full aspect-video object-cover"
                    />
                  ) : (
                    <div className="w-full aspect-video bg-muted flex items-center justify-center text-muted-foreground text-xs">
                      No image
                    </div>
                  )}
                  <div className="p-2">
                    <p className="text-xs font-medium truncate">{loc.name}</p>
                    {"submitted_by_character" in loc && loc.submitted_by_character && (
                      <p className="text-xs text-muted-foreground truncate">
                        {loc.submitted_by_character}
                      </p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

function LightboxView({
  photos,
  idx,
  onChangeIdx,
}: {
  photos: LocationEntry[]
  idx: number
  onChangeIdx: (i: number) => void
}) {
  const loc = photos[idx]

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="relative flex-1 bg-black flex items-center justify-center min-h-0">
        {loc.img ? (
          <img src={loc.img} alt={loc.name} className="max-h-full max-w-full object-contain" />
        ) : (
          <span className="text-muted-foreground text-sm">No image available</span>
        )}
        {idx > 0 && (
          <button
            onClick={() => onChangeIdx(idx - 1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 hover:bg-black/70 text-white"
          >
            <ChevronLeft className="size-5" />
          </button>
        )}
        {idx < photos.length - 1 && (
          <button
            onClick={() => onChangeIdx(idx + 1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 hover:bg-black/70 text-white"
          >
            <ChevronRight className="size-5" />
          </button>
        )}
      </div>
      <div className="p-4 border-t shrink-0">
        {loc.description && (
          <p className="text-sm text-muted-foreground mt-0.5">{loc.description}</p>
        )}
        {"submitted_by_character" in loc && loc.submitted_by_character && (
          <p className="text-xs text-muted-foreground mt-1">
            By <span className="font-medium">{loc.submitted_by_character}</span>
            {"submitted_by_stateid" in loc && loc.submitted_by_stateid && (
              <span className="opacity-60"> #{loc.submitted_by_stateid}</span>
            )}
          </p>
        )}
        {photos.length > 1 && (
          <p className="text-xs text-muted-foreground mt-2 opacity-50">
            {idx + 1} / {photos.length}
          </p>
        )}
      </div>
    </div>
  )
}
