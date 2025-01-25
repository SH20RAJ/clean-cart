import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"
 
const items = [
  {
    icon: (
      <>
        <img
          className="h-8 w-8 object-contain"
          src="https://www.svgrepo.com/show/4454/t-shirt.svg"
          alt=""
        />
      </>
    ),
    name: "Shirts & T-Shirts",
    price: "49",
    features: [
      "Premium wash & iron",
      "Stain treatment",
      "Button repair",
      "Next-day delivery",
    ],
  },
  {
    icon: (
      <>
        <img
          className="h-8 w-8 object-contain"
          src="https://www.svgrepo.com/show/14092/pants.svg"
          alt=""
        />
      </>
    ),
    name: "Pants & Trousers",
    price: "69",
    features: [
      "Deep cleaning",
      "Crease perfection",
      "Zip repair",
      "Express service",
    ],
  },
  {
    icon: (
      <>
        <img
          className="h-8 w-8 object-contain"
          src="https://www.svgrepo.com/show/422565/business-management-suit.svg"
          alt=""
        />
      </>
    ),
    name: "Dresses & Suits",
    price: "149",
    features: [
      "Delicate care",
      "Hand wash option",
      "Spot cleaning",
      "Premium packaging",
    ],
  },
  {
    icon: (
      <>
        <img
          className="h-8 w-8 object-contain"
          src="https://www.svgrepo.com/show/232598/jacket-overcoat.svg"
          alt=""
        />
      </>
    ),
    name: "Coats & Jackets",
    price: "199",
    features: [
      "Dry cleaning",
      "Fabric protection",
      "Minor repairs",
      "Quality check",
    ],
  },
];

export function PayAsYouGo() {
  return (
    <section id="pay-as-you-go" className="container py-24 sm:py-32">
      <div className="relative">
        <div className="space-y-6 text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Pay As You Go
          </h2>
          <p className="text-lg text-muted-foreground">
            No commitment needed. Pay only for what you clean with our transparent per-item pricing.
          </p>
        </div>

        {/* Per KG Pricing */}
        <Card className="mb-16">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Per KG Pricing</h3>
              <div className="flex justify-center items-baseline gap-2">
                <span className="text-4xl font-bold">₹99</span>
                <span className="text-muted-foreground">/kg</span>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold">Included Services:</h4>
                <ul className="space-y-3">
                  {[
                    "Wash & Iron",
                    "Fabric Softener",
                    "Stain Treatment",
                    "Free Pickup & Delivery",
                    "24-hour Turnaround"
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold">How it Works:</h4>
                <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
                  <li>Schedule a pickup through our app</li>
                  <li>We weigh your laundry at pickup</li>
                  <li>Pay only for the actual weight</li>
                  <li>Track your order in real-time</li>
                  <li>Receive fresh, clean laundry at your doorstep</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Per Item Pricing */}
        <div className="space-y-6 text-center max-w-2xl mx-auto mb-12">
          <h3 className="text-2xl font-bold">Per Item Pricing</h3>
          <p className="text-muted-foreground">
            Premium care for your special garments with item-specific treatment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <Card key={item.name} className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-4">
                 {item.icon && item.icon}
                </div>
                <h4 className="font-semibold text-lg mb-2">{item.name}</h4>
                <div className="mb-4">
                  <span className="text-2xl font-bold">₹{item.price}</span>
                  <span className="text-muted-foreground">/item</span>
                </div>
                <ul className="space-y-2">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="px-8">
            Schedule Pickup
          </Button>
        </div>
      </div>
    </section>
  )
}
