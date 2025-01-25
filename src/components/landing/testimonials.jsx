import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Working Professional",
    content:
      "CleanCart has completely transformed my laundry routine. The app is intuitive, and the service is consistently excellent. I love the eco-friendly approach!",
    avatar:
      "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg",
  },
  {
    name: "Raj Patel",
    role: "Business Owner",
    content:
      "As a busy entrepreneur, CleanCart saves me precious time. The subscription plan is perfect for my needs, and the quality of service is outstanding.",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Emily Chen",
    role: "Parent of Three",
    content:
      "The family plan is a lifesaver! Real-time tracking and flexible scheduling make managing our family's laundry effortless. Highly recommended!",
    avatar:
      "https://images.unsplash.com/photo-1599457382197-820d65b8bbdc?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function Testimonials() {
  return (
    <section className="container py-24 sm:py-32">
      <div className="space-y-6 text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Loved by Thousands
        </h2>
        <p className="text-muted-foreground text-lg">
          Don't just take our word for it. Here's what our customers have to say.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="relative overflow-hidden">
            <CardContent className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6">{testimonial.content}</p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
