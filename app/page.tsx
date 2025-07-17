import HeroSection from "@/components/home/hero-section"
import AboutSection from "@/components/home/about-section"
import TrainersSection from "@/components/home/trainers-section"
import PricingSection from "@/components/home/pricing-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import CTASection from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <TrainersSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
