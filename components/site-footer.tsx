import { MapPin, Phone } from 'lucide-react'
import { Logo } from '@/components/logo'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

const columns = [
  {
    title: 'Entdecken',
    links: [
      { label: 'Speisekarte', href: '#menu' },
      { label: 'Über uns', href: '#about' },
      { label: 'Galerie', href: '#gallery' },
      { label: 'Besuchen', href: '#visit' },
    ],
  },
  {
    title: 'Service',
    links: [
      { label: 'Vor Ort genießen', href: '#visit' },
      { label: 'Zum Mitnehmen', href: '#menu' },
      { label: 'Private Events', href: '#visit' },
      { label: 'Reservierung', href: 'tel:+4903376220406' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Frisch zubereitete italienische Gerichte in einer ansprechenden
            Atmosphäre — mit idyllischem Außenbereich in Zeuthen.
          </p>
          <div className="flex gap-2">
            <a
              href="#"
              aria-label="Instagram"
              className="flex size-10 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <InstagramIcon className="size-5" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex size-10 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <FacebookIcon className="size-5" />
            </a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-3">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide">
              {col.title}
            </h3>
            <ul className="flex flex-col gap-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-sm font-bold uppercase tracking-wide">
            So finden Sie uns
          </h3>
          <a
            href="#visit"
            className="flex items-start gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <MapPin className="mt-0.5 size-4 shrink-0" />
            Seestraße 104, 15738 Zeuthen
          </a>
          <a
            href="tel:+4903376220406"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="size-4 shrink-0" />
            +49 033762 204069
          </a>
          <p className="text-sm text-muted-foreground">Mo, Mi–Fr 12–23 Uhr</p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} Trattoria Da Potti. Alle Rechte
            vorbehalten.
          </p>
          <p>Frisch zubereitet, mit Herzlichkeit serviert.</p>
        </div>
      </div>
    </footer>
  )
}
