'use client'

import { Star, Quote } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const stats = [
  { value: '4,8', label: 'Google Bewertung' },
  { value: '394', label: 'Zufriedene Gäste' },
  { value: '€20–30', label: 'Pro Person' },
  { value: 'Mo, Mi–Fr', label: 'Ab 12 Uhr geöffnet' },
]

const reviews = [
  {
    name: 'S. Y.',
    text: 'Das Essen war köstlich und der Service sehr freundlich.',
    role: 'Local Guide',
  },
  {
    name: 'Beatrice L.',
    text: 'Tolle Pizzen, freundliches Personal. Wir hatten eine wunderbare Zeit. Parkplatz und einfache Straßenparkplätze sind vorhanden.',
    role: 'Local Guide',
  },
  {
    name: 'Paulina S.',
    text: 'Das frische und knackige Gemüse war ein sehr positiver Aspekt. Ein gut gelegenes Restaurant mit umfassendem Getränkeangebot.',
    role: 'Local Guide',
  },
]

export function ReviewsSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Stats band */}
        <Reveal className="grid grid-cols-2 gap-4 rounded-3xl bg-brown px-6 py-8 text-center sm:grid-cols-4 sm:px-10">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-heading text-3xl font-bold text-gold sm:text-4xl">
                {stat.value}
              </span>
              <span className="mt-1 text-sm text-[color-mix(in_srgb,var(--card)_85%,transparent)]">
                {stat.label}
              </span>
            </div>
          ))}
        </Reveal>

        <SectionHeading
          className="mt-16"
          eyebrow="Von Gästen geliebt"
          title="Das sagen unsere Gäste"
          description="Von Erstbesuchern bis zu treuen Stammgästen — das ist, warum die Menschen immer wieder in die Trattoria Da Potti kommen."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal
              key={review.name}
              delay={i * 0.1}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <Quote className="size-8 text-primary/30" />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-3 flex-1 text-pretty leading-relaxed text-foreground/90">
                {review.text}
              </p>
              <div className="mt-5 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary font-heading font-bold text-primary-foreground">
                  {review.name.charAt(0)}
                </span>
                <div className="leading-tight">
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
