'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { categories, menuItems, type MenuCategory } from '@/lib/menu-data'
import { SectionHeading } from '@/components/section-heading'
import { MenuCard } from '@/components/menu-card'
import { cn } from '@/lib/utils'

type Filter = 'Alle' | MenuCategory

const filters: Filter[] = ['Alle', ...categories]

export function MenuSection() {
  const [active, setActive] = useState<Filter>('Alle')

  const visible = useMemo(
    () =>
      active === 'Alle'
        ? menuItems
        : menuItems.filter((item) => item.category === active),
    [active],
  )

  return (
    <section id="menu" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Unsere Speisekarte"
          title="Pizza, Pasta & mehr — mit Leidenschaft zubereitet"
          description="Von knuspriger Pizza über frische Pasta bis zu hausgemachten Desserts — jedes Gericht wird auf traditionelle italienische Art frisch für Sie zubereitet."
        />

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={cn(
                'rounded-full border px-5 py-2 text-sm font-semibold transition-all',
                active === filter
                  ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                  : 'border-border bg-card text-foreground/70 hover:border-primary/40 hover:text-foreground',
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((item, index) => (
              <MenuCard key={item.id} item={item} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
