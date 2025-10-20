"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, Github, Linkedin, Twitter } from "lucide-react"

export default function TeamMember() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string

  // Mock team data - in a real app, this would come from a database
  const teamData: Record<string, any> = {
    "1": {
      name: "Alex Chen",
      role: "CEO & Founder",
      image: "/professional-man-tech-ceo.jpg",
      bio: "Visionary leader with 15+ years in blockchain and fintech. Alex founded Los Finance to democratize access to decentralized finance.",
      expertise: ["Blockchain", "DeFi", "Strategy", "Leadership"],
      social: { github: "#", linkedin: "#", twitter: "#" },
    },
    "2": {
      name: "Sarah Johnson",
      role: "CTO & Lead Developer",
      image: "/professional-woman-tech-developer.jpg",
      bio: "Full-stack blockchain engineer with expertise in smart contracts and protocol design. Sarah leads our technical innovation.",
      expertise: ["Smart Contracts", "Solidity", "Protocol Design", "Web3"],
      social: { github: "#", linkedin: "#", twitter: "#" },
    },
    "3": {
      name: "Michael Park",
      role: "Head of Security",
      image: "/professional-man-security-blockchain.jpg",
      bio: "Security expert with background in cryptography and penetration testing. Michael ensures Los Finance remains secure.",
      expertise: ["Cryptography", "Security Audits", "Risk Management", "Compliance"],
      social: { github: "#", linkedin: "#", twitter: "#" },
    },
    "4": {
      name: "Emma Davis",
      role: "Product Manager",
      image: "/professional-woman-product-manager.jpg",
      bio: "Product strategist focused on user experience and market fit. Emma shapes the future of Los Finance products.",
      expertise: ["Product Strategy", "UX Design", "Market Research", "Analytics"],
      social: { github: "#", linkedin: "#", twitter: "#" },
    },
    "5": {
      name: "James Wilson",
      role: "Blockchain Architect",
      image: "/professional-man-blockchain-architect.jpg",
      bio: "Blockchain infrastructure specialist designing scalable and efficient systems. James optimizes our network performance.",
      expertise: ["Infrastructure", "Scalability", "Consensus", "Performance"],
      social: { github: "#", linkedin: "#", twitter: "#" },
    },
    "6": {
      name: "Lisa Anderson",
      role: "Community Manager",
      image: "/professional-woman-community-manager.jpg",
      bio: "Community builder passionate about connecting users and fostering engagement. Lisa drives our community initiatives.",
      expertise: ["Community Building", "Communications", "Events", "Engagement"],
      social: { github: "#", linkedin: "#", twitter: "#" },
    },
  }

  const member = teamData[id]

  if (!member) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Team Member Not Found</h1>
            <button onClick={() => router.back()} className="text-primary hover:text-accent transition-colors">
              Go Back
            </button>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Team
          </button>

          {/* Member Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Image */}
            <div className="rounded-lg overflow-hidden h-96 md:h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-full object-cover" />
            </div>

            {/* Info */}
            <div>
              <h1 className="text-4xl font-bold mb-2">{member.name}</h1>
              <p className="text-2xl text-primary mb-6">{member.role}</p>

              <p className="text-foreground/80 text-lg leading-relaxed mb-8">{member.bio}</p>

              {/* Expertise */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill: string, i: number) => (
                    <span key={i} className="px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href={member.social.github}
                  className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary/50 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href={member.social.linkedin}
                  className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary/50 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={member.social.twitter}
                  className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary/50 transition-colors"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
