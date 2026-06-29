import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-3',
        align === 'center' ? 'items-center text-center' : 'items-start',
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          <span className="h-px w-6 bg-primary/60" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance font-heading text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'max-w-2xl text-pretty leading-relaxed text-muted-foreground',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}
