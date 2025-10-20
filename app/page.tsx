"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 right-1/3 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 inline-block">
            <div className="px-4 py-2 rounded-full border border-primary/50 bg-primary/10 backdrop-blur-sm">
              <span className="text-primary font-semibold text-sm">🚀 Welcome to the Future of Finance</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Decentralized Finance</span>
            <br />
            <span className="text-foreground">Reimagined</span>
          </h1>

          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the power of blockchain technology with Los Finance. Secure, transparent, and revolutionary
            financial solutions for the modern world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              Start Trading <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 rounded-lg border border-primary/50 text-primary font-semibold hover:bg-primary/10 transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[
              { label: "Total Value Locked", value: "$2.5B+" },
              { label: "Active Users", value: "500K+" },
              { label: "Transactions", value: "10M+" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors"
              >
                <p className="text-foreground/60 text-sm mb-2">{stat.label}</p>
                <p className="text-3xl font-bold gradient-text">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="gradient-text">Los Finance</span>
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Built on cutting-edge blockchain technology with security and innovation at its core.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Maximum Security",
                description: "Military-grade encryption and multi-signature wallets protect your assets.",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Execute transactions in milliseconds with our optimized blockchain infrastructure.",
              },
              {
                icon: TrendingUp,
                title: "Yield Farming",
                description: "Earn passive income through our innovative yield farming protocols.",
              },
            ].map((feature, i) => {
              const Icon = feature.icon
              return (
                <div
                  key={i}
                  className="p-8 rounded-lg border border-border bg-background hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/20 transform hover:-translate-y-2"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:animate-glow">
                    <Icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join the <span className="gradient-text">Revolution</span>?
          </h2>
          <p className="text-foreground/70 text-lg mb-8">
            Start your journey into decentralized finance today. No limits, no intermediaries, just pure blockchain
            power.
          </p>
          <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105">
            Get Started Now
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
