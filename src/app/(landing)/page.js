import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { Features } from "@/components/landing/features"
import { Pricing } from "@/components/landing/pricing"
import { PayAsYouGo } from "@/components/landing/pay-as-you-go"
import { Testimonials } from "@/components/landing/testimonials"
import { CTA } from "@/components/landing/cta"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <PayAsYouGo />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}
