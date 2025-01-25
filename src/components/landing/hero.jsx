import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Meteors } from "../ui/meteors";
import { HeroVideoDialogTopInBottomOut } from "./herovideo";
import { Introducing } from "./introducing";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-background pt-[8.5rem]">
      <Meteors number={20} />
      <Introducing   />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="relative container">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Your Smart Laundry Solution
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Experience premium laundry services with smart scheduling,
              real-time tracking, and eco-friendly cleaning solutions. Join
              thousands of satisfied customers.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 min-[400px]:gap-6">
            <Button size="lg" className="text-lg h-12">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-lg h-12">
              View Demo
            </Button>
          </div>
          {/* <div className="relative w-full max-w-5xl aspect-[16/9] rounded-xl overflow-hidden mt-16"> */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-background/20 to-background/0 z-10"></div>
            <img
              src="https://i.imgur.com/yhYbDIS.png"
              alt="CleanCart Dashboard Preview"
              fill
              className="object-cover"
              priority
            />
            
          </div> */}
          <HeroVideoDialogTopInBottomOut />
        </div>
      </div>
    </div>
  );
}
