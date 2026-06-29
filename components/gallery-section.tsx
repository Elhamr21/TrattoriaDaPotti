'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'motion/react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const gallery = [
  { src: '/menu/mixed-grill.png', alt: 'Tagliatelle mit Lachs und Gemüse', span: 'row' },
  { src: '/gallery/platter-two.png', alt: 'Antipasto-Platte mit Aufschnitt und Oliven' },
  { src: '/ambient/storefront.png', alt: 'Trattoria Da Potti von außen' },
  { src: '/menu/pizza.png', alt: 'Frisch gebackene Pizza Margherita' },
  { src: '/gallery/wrap-counter.png', alt: 'Unser freundliches Team beim Servieren', span: 'col' },
  { src: '/menu/burek.png', alt: 'Hausgemachtes Focaccia-Brot' },
  { src: '/ambient/interior.png', alt: 'Einladender Innenraum der Trattoria' },
  { src: '/menu/tres-leches.png', alt: 'Hausgemachtes Tiramisù' },
  { src: '/ambient/counter.png', alt: 'Idyllischer Außenbereich im Sommer' },
]

export function GallerySection() {
  const [index, setIndex] = useState<number | null>(null)

  const open = (i: number) => setIndex(i)
  const close = () => setIndex(null)
  const prev = () =>
    setIndex((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length))
  const next = () =>
    setIndex((i) => (i === null ? i : (i + 1) % gallery.length))

  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [index])

  return (
    <section id="gallery" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Galerie"
          title="Auch ein Fest für die Augen"
          description="Werfen Sie einen Blick in unsere Küche, in unseren Gastraum und auf die Gerichte, für die unsere Gäste immer wieder nach Zeuthen kommen."
        />

        <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-3 lg:grid-cols-4">
          {gallery.map((item, i) => (
            <motion.button
              key={item.src}
              type="button"
              onClick={() => open(i)}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className={cn(
                'group relative overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-3 focus-visible:ring-ring',
                item.span === 'row' && 'row-span-2',
                item.span === 'col' && 'col-span-2',
              )}
              aria-label={`${item.alt} ansehen`}
            >
              <Image
                src={item.src || '/placeholder.svg'}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4"
            onClick={close}
            role="dialog"
            aria-label="Bildbetrachter"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Betrachter schließen"
              className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X className="size-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              aria-label="Vorheriges Bild"
              className="absolute left-3 flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6"
            >
              <ChevronLeft className="size-6" />
            </button>
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="relative h-[70vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={gallery[index].src || '/placeholder.svg'}
                alt={gallery[index].alt}
                fill
                sizes="100vw"
                className="rounded-2xl object-contain"
              />
              <p className="absolute -bottom-9 left-0 right-0 text-center text-sm text-white/80">
                {gallery[index].alt}
              </p>
            </motion.div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              aria-label="Nächstes Bild"
              className="absolute right-3 flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6"
            >
              <ChevronRight className="size-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
