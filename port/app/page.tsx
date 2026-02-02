"use client"

import { Navigation } from "@/components/ui/navigation"
import { HeroCard } from "@/components/ui/hero-card"
import { AIBackground } from "@/components/background/ai-background"
import { MobileSymbols } from "@/components/background/mobile-symbols"

export default function Home() {
  return (
    <main className="relative w-full h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
      <AIBackground />
      <Navigation />
      <MobileSymbols />
      <HeroCard />
    </main>
  )
}
