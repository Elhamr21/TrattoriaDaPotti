import { UtensilsCrossed } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
        <UtensilsCrossed className="size-5" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-heading text-lg font-bold tracking-tight">
          Trattoria Da
        </span>
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-primary">
          POTTI
        </span>
      </span>
    </span>
  )
}
