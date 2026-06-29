'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import type { MenuItem } from '@/lib/menu-data'

export function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {!loaded && <div className="absolute inset-0 skeleton-shimmer bg-muted" />}
        <Image
          src={item.image || '/placeholder.svg'}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          onLoad={() => setLoaded(true)}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {item.popular && (
          <span className="absolute left-3 top-3 rounded-full bg-gold px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-gold-foreground shadow">
            Beliebt
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-xl font-bold leading-tight">
          {item.name}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>

        {item.tags && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-secondary px-2.5 py-1 text-[0.7rem] font-medium text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  )
}
