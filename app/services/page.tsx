"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Zap, Lock, TrendingUp, Wallet, Code, BarChart3 } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Wallet,
      title: "Digital Wallet",
      description: "Secure multi-chain wallet with advanced security features and easy asset management.",
    },
    {
      icon: TrendingUp,
      title: "Yield Farming",
      description: "Maximize your returns through our innovative yield farming and liquidity mining protocols.",
    },
    {
      icon: Lock,
      title: "Staking",
      description: "Earn rewards by staking your tokens in our secure and transparent staking pools.",
    },
    {
      icon: Zap,
      title: "Swaps",
      description: "Lightning-fast token swaps with minimal slippage and competitive rates.",
    },
    {
      icon: Code,
      title: "Smart Contracts",
      description: "Deploy and interact with custom smart contracts on our blockchain infrastructure.",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Real-time market data and advanced analytics to inform your trading decisions.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Comprehensive blockchain solutions designed to meet all your decentralized finance needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <div
                  key={i}
                  className="p-8 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/20 transform hover:-translate-y-2"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:animate-glow">
                    <Icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-foreground/70">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
