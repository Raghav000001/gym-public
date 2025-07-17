"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Moon, Sun, NotebookIcon as Lotus } from "lucide-react"
import { useTheme } from "next-themes"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/ai-planner", label: "AI Wellness Plan" },
    { href: "/astrology", label: "Astrology" },
    { href: "/trainers", label: "Trainers" },
    { href: "/about", label: "About" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Lotus className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold yoga-text-gradient">R-zone Yoga</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-green-600"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            <div className="hidden md:flex space-x-2">
              <Link href="/admin/login">
                <Button variant="outline" size="sm">
                  Admin
                </Button>
              </Link>
              <Link href="/trainer/login">
                <Button variant="outline" size="sm">
                  Trainer
                </Button>
              </Link>
            </div>

            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-lg font-medium transition-colors hover:text-green-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="flex flex-col space-y-2 pt-4 border-t">
                    <Link href="/admin/login" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full bg-transparent">
                        Admin Login
                      </Button>
                    </Link>
                    <Link href="/trainer/login" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full bg-transparent">
                        Trainer Login
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
