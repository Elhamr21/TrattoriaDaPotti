'use client'

import { motion, useReducedMotion } from 'motion/react'
import { ChevronDown, Clock, MapPin, Star, UtensilsCrossed } from 'lucide-react'
import { Button } from '@/components/ui/button'

const embers = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${(i * 7 + 4) % 100}%`,
  delay: `${(i % 7) * 0.9}s`,
  duration: `${5 + (i % 5)}s`,
  drift: `${(i % 2 === 0 ? 1 : -1) * (10 + (i % 4) * 8)}px`,
  size: `${4 + (i % 3) * 2}px`,
}))

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          className="size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(230,81,0,0.35),transparent_60%)]" />
      </div>

      {/* Embers */}
      {!reduce && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {embers.map((e) => (
            <span
              key={e.id}
              className="ember"
              style={
                {
                  left: e.left,
                  width: e.size,
                  height: e.size,
                  animationDelay: e.delay,
                  animationDuration: e.duration,
                  '--drift': e.drift,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 py-28 text-center text-white">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] backdrop-blur"
        >
          <UtensilsCrossed className="size-4 text-gold" />
          Frisch zubereitete italienische Küche
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-balance font-heading text-4xl font-bold leading-[1.05] drop-shadow-lg sm:text-6xl lg:text-7xl"
        >
          Italienische Küche,
          <span className="block text-gold">mit Herz serviert</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg"
        >
          Frisch zubereitete Pizza, Pasta und mehr in ansprechender Atmosphäre.
          Genießen Sie milde Sommerabende in unserem idyllischen Außenbereich
          direkt am See in Zeuthen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button
            render={<a href="#menu" />}
            className="h-12 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90"
          >
            Speisekarte ansehen
          </Button>
          <Button
            render={<a href="#visit" />}
            className="h-12 rounded-full border border-white/40 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur hover:bg-white/20"
          >
            So finden Sie uns
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/80"
        >
          <span className="inline-flex items-center gap-1.5">
            <Star className="size-4 fill-gold text-gold" />
            4,8 von 394 Gästen
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-4 text-gold" />
            Mo, Mi–Fr ab 12 Uhr geöffnet
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-4 text-gold" />
            Zeuthen, Seestraße 104
          </span>
        </motion.div>
      </div>

      <a
        href="#menu"
        aria-label="Zur Speisekarte scrollen"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/70 transition-colors hover:text-white"
      >
        <ChevronDown className="size-7 animate-bounce" />
      </a>
    </section>
  )
}
