'use client'

import { useState } from 'react'
import { Clock, Mail, MapPin, Phone, Send, Check } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'

const hours = [
  { day: 'Montag', time: '12:00 – 23:00' },
  { day: 'Dienstag', time: 'Geschlossen' },
  { day: 'Mittwoch – Freitag', time: '12:00 – 23:00' },
]

const details = [
  {
    icon: MapPin,
    label: 'Besuchen Sie uns',
    value: 'Seestraße 104, 15738 Zeuthen',
  },
  { icon: Phone, label: 'Anrufen', value: '+49 033762 204069' },
  { icon: Mail, label: 'E-Mail', value: 'trattoria-da-potti@gmx.de' },
]

export function ContactSection() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    window.setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="visit" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Besuchen Sie uns"
          title="Hungrig kommen, glücklich gehen"
          description="Sie finden uns in Zeuthen an der Seestraße 104. Vor Ort genießen, mitnehmen oder schreiben Sie uns eine Nachricht — wir freuen uns von Ihnen zu hören."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Info + map */}
          <Reveal className="flex flex-col gap-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {details.map((d) => (
                <div
                  key={d.label}
                  className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-5 shadow-sm"
                >
                  <div className="flex size-10 items-center justify-center rounded-xl bg-accent text-primary">
                    <d.icon className="size-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {d.label}
                  </span>
                  <span className="text-sm font-medium leading-snug">
                    {d.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                <Clock className="size-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-lg font-bold">Öffnungszeiten</h3>
                <ul className="mt-2 flex flex-col gap-1.5">
                  {hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex justify-between gap-4 text-sm"
                    >
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className="font-medium">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                title="Karte mit dem Standort von Trattoria Da Potti in Zeuthen"
                src="https://www.openstreetmap.org/export/embed.html?bbox=13.6119%2C52.3382%2C13.6319%2C52.3582&layer=mapnik&marker=52.3482%2C13.6219"
                className="h-64 w-full grayscale-[0.2]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
            >
              <h3 className="font-heading text-2xl font-bold">Nachricht senden</h3>
              <p className="-mt-2 text-sm text-muted-foreground">
                Reservierungen, Anfragen oder einfach Hallo sagen — wir
                antworten meist innerhalb eines Tages.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" id="name" placeholder="Ihr Name" />
                <Field
                  label="Telefon"
                  id="phone"
                  type="tel"
                  placeholder="Telefonnummer"
                />
              </div>
              <Field
                label="E-Mail"
                id="email"
                type="email"
                placeholder="sie@email.de"
              />
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Wie können wir helfen?"
                  className="resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring focus:ring-3 focus:ring-ring/30"
                />
              </div>

              <Button
                type="submit"
                disabled={sent}
                className="mt-auto h-12 gap-2 rounded-full bg-primary text-base font-semibold text-primary-foreground hover:bg-primary/90"
              >
                {sent ? (
                  <>
                    <Check className="size-4" /> Nachricht gesendet
                  </>
                ) : (
                  <>
                    <Send className="size-4" /> Nachricht senden
                  </>
                )}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  id,
  type = 'text',
  placeholder,
}: {
  label: string
  id: string
  type?: string
  placeholder?: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring focus:ring-3 focus:ring-ring/30"
      />
    </div>
  )
}
