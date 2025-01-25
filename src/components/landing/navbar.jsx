import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Pay As You Go", href: "#pay-as-you-go" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-sm z-50">
      <nav className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">CleanCart</span>
          </Link>
          <div className="hidden md:flex md:gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex md:gap-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Get Started</Link>
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>
    </header>
  )
}
