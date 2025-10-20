"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Chen",
      role: "CEO & Founder",
      image: "/professional-man-tech-ceo.jpg",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "CTO & Lead Developer",
      image: "/professional-woman-tech-developer.jpg",
    },
    {
      id: 3,
      name: "Michael Park",
      role: "Head of Security",
      image: "/professional-man-security-blockchain.jpg",
    },
    {
      id: 4,
      name: "Emma Davis",
      role: "Product Manager",
      image: "/professional-woman-product-manager.jpg",
    },
    {
      id: 5,
      name: "James Wilson",
      role: "Blockchain Architect",
      image: "/professional-man-blockchain-architect.jpg",
    },
    {
      id: 6,
      name: "Lisa Anderson",
      role: "Community Manager",
      image: "/professional-woman-community-manager.jpg",
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
              Meet Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Talented individuals united by a passion for blockchain innovation and decentralized finance.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Link key={member.id} href={`/team/${member.id}`} className="group cursor-pointer">
                <div className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 transform hover:-translate-y-2">
                  <div className="mb-4 overflow-hidden rounded-lg h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-foreground/70">{member.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
