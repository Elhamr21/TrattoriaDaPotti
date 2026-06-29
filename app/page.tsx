import { Providers } from "@/components/providers"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { MenuSection } from "@/components/menu-section"
import { AboutSection } from "@/components/about-section"
import { GallerySection } from "@/components/gallery-section"
import { ReviewsSection } from "@/components/reviews-section"
import { CtaSection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"

export default function Page() {
  return (
    <Providers>
      <SiteHeader />
      <main>
        <Hero />
        <MenuSection />
        <AboutSection />
        <GallerySection />
        <ReviewsSection />
        <CtaSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <MobileBottomNav />
    </Providers>
  )
}
