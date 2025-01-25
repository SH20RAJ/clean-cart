import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Basic",
    price: "999",
    description: "Perfect for individuals with basic laundry needs",
    features: [
      "10kg laundry per month",
      "48-hour turnaround",
      "Free pickup & delivery",
      "Basic tracking",
      "Email support"
    ]
  },
  {
    name: "Premium",
    price: "1,499",
    description: "Ideal for professionals and small families",
    popular: true,
    features: [
      "20kg laundry per month",
      "24-hour turnaround",
      "Priority scheduling",
      "Advanced tracking",
      "Premium care instructions",
      "24/7 priority support"
    ]
  },
  {
    name: "Family",
    price: "2,499",
    description: "Best value for large families",
    features: [
      "40kg laundry per month",
      "24-hour turnaround",
      "Priority scheduling",
      "Advanced tracking",
      "Premium care instructions",
      "Family account sharing",
      "Dedicated account manager"
    ]
  }
]

export function Pricing() {
  return (
    <section className="container py-24 sm:py-32">
      <div className="relative">
        <div className="space-y-6 text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the perfect plan for your laundry needs. All plans include free pickup and delivery.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative flex flex-col ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-primary py-1 text-center text-sm font-medium text-primary-foreground">
                  Most Popular
                </div>
              )}
              <CardHeader className="flex-1 p-6">
                <div className="space-y-2">
                  <h3 className="font-bold text-2xl">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">₹{plan.price}</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-6 pt-0">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-8 w-full" variant={plan.popular ? "default" : "outline"}>
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
