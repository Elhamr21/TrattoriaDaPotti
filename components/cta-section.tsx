'use client'

import Image from 'next/image'
import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'

export function CtaSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/menu/rita-plate.png"
          alt=""
          fill
          aria-hidden="true"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(249,168,37,0.25),transparent_55%)]" />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 py-20 text-center sm:py-28">
        <Reveal className="flex flex-col items-center gap-5">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Schon hungrig?
          </span>
          <h2 className="text-balance font-heading text-3xl font-bold leading-tight text-white sm:text-5xl">
            Besuchen Sie uns — die Küche ist bereit
          </h2>
          <p className="max-w-xl text-pretty leading-relaxed text-white" style={{ color: '#ffffff' }}>
            Frische Pizza, Pasta und mehr, täglich frisch für Sie zubereitet.
            Genießen Sie bei uns vor Ort oder nehmen Sie Ihre Lieblingsgerichte
            mit nach Hause. Reservierungen unter 033762204069.
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button
              render={<a href="#menu" />}
              className="h-12 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-black/20 hover:bg-primary/90"
            >
              Zur Speisekarte
            </Button>
            <Button
              render={<a href="#visit" />}
              className="h-12 gap-2 rounded-full border border-white/40 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur hover:bg-white/20"
            >
              <Phone className="size-4" />
              Rufen Sie uns an
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
