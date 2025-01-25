import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, Package, CreditCard, Leaf, Award, Truck, Shield } from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "AI-powered scheduling system that learns your preferences and suggests optimal pickup times"
  },
  {
    icon: Package,
    title: "Real-time Tracking",
    description: "Track your laundry's journey from pickup to delivery with live updates and notifications"
  },
  {
    icon: CreditCard,
    title: "Flexible Plans",
    description: "Choose from subscription plans or pay-as-you-go options that fit your lifestyle"
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "100% eco-friendly cleaning methods and biodegradable packaging for a sustainable future"
  },
  {
    icon: Truck,
    title: "Express Delivery",
    description: "Same-day and next-day delivery options available for urgent requirements"
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "Premium care with satisfaction guarantee and free re-cleaning if you're not satisfied"
  }
]

export function Features() {
  return (
    <section className="container py-24 sm:py-32">
      <div className="relative">
        <div className="space-y-6 text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why Choose CleanCart?
          </h2>
          <p className="text-muted-foreground text-lg">
            Experience the future of laundry services with our innovative features designed for your convenience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden group">
              <CardContent className="p-6">
                <div className="rounded-lg p-2 w-12 h-12 bg-primary/10 mb-4 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors" />
                </div>
                <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
              <div className="absolute inset-0 border border-primary/10 group-hover:border-primary/30 rounded-lg transition-colors"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
