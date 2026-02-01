"use client"

import { HeroCard } from "@/components/ui/hero-card"
import { Navigation } from "@/components/ui/navigation"
import { LoadingScreen } from "@/components/loading-screen"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
  
      <HeroCard />
    </main>
  )
}
