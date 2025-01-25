import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { Features } from "@/components/landing/features"
import { Pricing } from "@/components/landing/pricing"
import { PayAsYouGo } from "@/components/landing/pay-as-you-go"
import { Testimonials } from "@/components/landing/testimonials"
import { CTA } from "@/components/landing/cta"
import { Footer } from "@/components/landing/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { Flow } from "@/components/landing/flow"

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Features />
      {/* <Flow /> */}
      <Pricing />
      <PayAsYouGo />
      <Testimonials />
      <CTA />
      <ScrollProgress className="top-[65px]" />

      <Footer />
    </div>
  );
}
