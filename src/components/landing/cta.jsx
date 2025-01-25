import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="border-t">
      <div className="container py-24 sm:py-32">
        <div className="relative isolate overflow-hidden bg-primary px-6 py-24 rounded-3xl shadow-2xl sm:px-24 xl:py-32">
          <div className="absolute -top-32 left-0 transform-gpu blur-3xl" aria-hidden="true">
            <div
              className="aspect-[1918/1080] w-[60rem] bg-gradient-to-r from-primary/40 via-primary/50 to-primary/60 opacity-30"
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to Transform Your Laundry Experience?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-foreground/90">
              Join thousands of satisfied customers who have made laundry day a breeze with CleanCart.
              Start your free trial today!
            </p>
            <div className="mt-10 flex items-center justify-center gap-6">
              <Button size="lg" variant="secondary">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
