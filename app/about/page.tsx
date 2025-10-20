"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">Los Finance</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              We're building the future of decentralized finance with cutting-edge blockchain technology and a
              commitment to financial freedom.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="p-8 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
              <h2 className="text-2xl font-bold mb-4 text-primary">Our Mission</h2>
              <p className="text-foreground/80 leading-relaxed">
                To democratize access to financial services by leveraging blockchain technology. We believe everyone
                deserves the opportunity to participate in the global economy without barriers or intermediaries.
              </p>
            </div>

            <div className="p-8 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
              <h2 className="text-2xl font-bold mb-4 text-accent">Our Vision</h2>
              <p className="text-foreground/80 leading-relaxed">
                A world where financial services are transparent, secure, and accessible to everyone. Where blockchain
                technology empowers individuals to take control of their financial future.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { title: "Transparency", desc: "Complete visibility into all transactions" },
                { title: "Security", desc: "Military-grade protection for your assets" },
                { title: "Innovation", desc: "Constantly pushing blockchain boundaries" },
                { title: "Community", desc: "Built by and for our users" },
              ].map((value, i) => (
                <div
                  key={i}
                  className="p-6 rounded-lg border border-border bg-background hover:border-primary/50 transition-colors text-center"
                >
                  <h3 className="font-semibold text-lg mb-2 text-primary">{value.title}</h3>
                  <p className="text-foreground/70 text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
            <div className="space-y-8">
              {[
                { year: "2021", event: "Los Finance Founded" },
                { year: "2022", event: "Launched Mainnet" },
                { year: "2023", event: "Reached $1B TVL" },
                { year: "2024", event: "Expanded to 50+ Countries" },
              ].map((item, i) => (
                <div key={i} className="flex gap-8 items-center">
                  <div className="w-24 font-bold text-primary text-lg">{item.year}</div>
                  <div className="flex-1 p-4 rounded-lg border border-border bg-card/50 hover:border-primary/50 transition-colors">
                    <p className="text-foreground">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
