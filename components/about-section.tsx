'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { UtensilsCrossed, Leaf, HeartHandshake } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const pillars = [
  {
    icon: UtensilsCrossed,
    title: 'Frisch zubereitete Gerichte',
    text: 'Pizza und Pasta werden täglich frisch zubereitet — mit hochwertigen Zutaten für echten italienischen Genuss.',
  },
  {
    icon: Leaf,
    title: 'Idyllischer Außenbereich',
    text: 'Genießen Sie milde Sommerabende in unserem schönen Außenbereich — der perfekte Ort für einen geselligen Abend.',
  },
  {
    icon: HeartHandshake,
    title: 'Herzliche Gastfreundschaft',
    text: 'Unser freundliches Team begrüßt Sie gern — ob zum Mittag, Abendessen oder für Ihre private Feier.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Images */}
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/ambient/ambient3.png"
              alt="Das Restaurant Trattoria Da Potti von außen"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute -bottom-6 -left-4 hidden w-44 overflow-hidden rounded-2xl border-4 border-card shadow-2xl sm:block lg:-left-8 lg:w-56"
          >
            <div className="relative aspect-square">
              <Image
                src="/ambient/ambient2.png"
                alt="Innenraum der Trattoria Da Potti"
                fill
                sizes="224px"
                className="object-cover"
              />
            </div>
          </motion.div>
          <div className="absolute -right-3 top-6 rounded-2xl bg-primary px-5 py-4 text-center text-primary-foreground shadow-xl">
            <span className="block font-heading text-3xl font-bold">4,8</span>
            <span className="text-xs font-medium uppercase tracking-wide">
              Google Bewertung
            </span>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="flex flex-col gap-6">
          <Reveal className="flex flex-col gap-3">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              <span className="h-px w-6 bg-primary/60" />
              Über uns
            </span>
            <h2 className="text-balance font-heading text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Italienischer Genuss, ehrlich zubereitet
            </h2>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Ein geselliger Abend mit italienischem Essen – wir servieren Ihnen
              frisch zubereitete Gerichte in einer ansprechenden Atmosphäre. Gut
              gelegen in Zeuthen mit umfassendem Getränkeangebot. Lassen Sie
              sich überzeugen und probieren Sie die italienische Küche.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-1">
            {pillars.map((pillar, i) => (
              <Reveal
                key={pillar.title}
                delay={i * 0.1}
                className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                  <pillar.icon className="size-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {pillar.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
