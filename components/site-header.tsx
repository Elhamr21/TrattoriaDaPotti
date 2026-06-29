'use client'

import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'
import { useTheme } from '@/components/providers'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Speisekarte', href: '#menu' },
  { label: 'Über uns', href: '#about' },
  { label: 'Galerie', href: '#gallery' },
  { label: 'Besuchen', href: '#visit' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/95 py-2 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-background/80'
          : 'border-b border-transparent py-4',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className={cn(
            'transition-colors',
            scrolled ? 'text-foreground' : 'text-white drop-shadow-md',
          )}
          aria-label="Trattoria Da Potti Startseite"
        >
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                scrolled
                  ? 'text-foreground/80 hover:bg-muted hover:text-foreground'
                  : 'text-white/90 hover:bg-white/15 hover:text-white drop-shadow',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Zum ${theme === 'dark' ? 'hellen' : 'dunklen'} Modus wechseln`}
            className={cn(
              'flex size-10 items-center justify-center rounded-full transition-colors',
              scrolled
                ? 'text-foreground hover:bg-muted'
                : 'text-white hover:bg-white/15 drop-shadow',
            )}
          >
            {theme === 'dark' ? (
              <Sun className="size-5" />
            ) : (
              <Moon className="size-5" />
            )}
          </button>

          <Button
            render={<a href="#visit" />}
            className="ml-1 hidden h-10 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 sm:inline-flex"
          >
            Besuchen
          </Button>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={mobileOpen}
            className={cn(
              'flex size-10 items-center justify-center rounded-full transition-colors lg:hidden',
              scrolled
                ? 'text-foreground hover:bg-muted'
                : 'text-white hover:bg-white/15 drop-shadow',
            )}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-border/60 bg-background transition-[max-height] duration-300 lg:hidden',
          mobileOpen ? 'max-h-96' : 'max-h-0',
        )}
      >
        <nav
          className="flex flex-col gap-1 px-4 py-4"
          aria-label="Mobile Hauptnavigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-medium text-foreground hover:bg-muted"
            >
              {link.label}
            </a>
          ))}
          <Button
            render={<a href="#visit" />}
            onClick={() => setMobileOpen(false)}
            className="mt-2 h-11 rounded-full bg-primary text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Besuchen
          </Button>
        </nav>
      </div>
    </header>
  )
}
