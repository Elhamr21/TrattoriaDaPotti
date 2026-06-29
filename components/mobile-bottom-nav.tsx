'use client'

import { UtensilsCrossed, Phone, MapPin, Images } from 'lucide-react'

export function MobileBottomNav() {
  return (
    <nav
      aria-label="Schnellzugriff"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 lg:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="mx-auto flex max-w-md items-center justify-around px-2 py-2">
        <a
          href="#menu"
          className="flex flex-1 flex-col items-center gap-1 rounded-lg py-1.5 text-xs font-medium text-foreground/70"
        >
          <UtensilsCrossed className="size-5" />
          Speisekarte
        </a>
        <a
          href="#gallery"
          className="flex flex-1 flex-col items-center gap-1 rounded-lg py-1.5 text-xs font-medium text-foreground/70"
        >
          <Images className="size-5" />
          Galerie
        </a>
        <a
          href="#visit"
          className="flex flex-1 flex-col items-center gap-1 rounded-lg py-1.5 text-xs font-medium text-foreground/70"
        >
          <MapPin className="size-5" />
          Besuchen
        </a>
        <a
          href="tel:+4903376220406"
          className="flex flex-1 flex-col items-center gap-1 rounded-lg py-1.5 text-xs font-semibold text-primary"
        >
          <Phone className="size-5" />
          Anrufen
        </a>
      </div>
    </nav>
  )
}
