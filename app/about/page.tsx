import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Lightbulb, Heart } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Vedantix</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Connecting exceptional talent with ambitious businesses since 2020
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border bg-background/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Text Column */}
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-foreground/70">
                <p>
                  Founded in 2020, Vedantix emerged from a simple insight: businesses struggle to find
                  exceptional talent, and talented professionals struggle to find the right opportunities.
                  We set out to bridge that gap.
                </p>
                <p>
                  What started as a small recruiting team has grown into a global organization serving
                  enterprise companies, startups, and everything in between. Today, we're proud to have
                  placed over 1,000 professionals and completed 150+ development projects.
                </p>
                <p>
                  Our mission remains unchanged: to bring world-class talent and solutions to businesses
                  worldwide, enabling them to grow, innovate, and succeed.
                </p>
              </div>
            </div>

            {/* Image Column */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
              <img
                src="/OurStory.png"
                alt="Professional team working together"
                className="relative rounded-2xl border border-border object-cover w-full h-[450px]"
              />
            </div>

          </div>
        </div>
      </section>


      {/* Mission, Vision, Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="group relative bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Target className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-foreground/70 leading-relaxed">
                To connect exceptional talent with ambitious businesses, empowering growth through people, technology,
                and data-driven insights.
              </p>
            </div>

            {/* Vision */}
            <div className="group relative bg-card border border-border rounded-xl p-8 hover:border-secondary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <Lightbulb className="text-secondary" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-foreground/70 leading-relaxed">
                To be the global leader in connecting talent, technology, and opportunity, transforming how businesses
                build and scale.
              </p>
            </div>

            {/* Values */}
            <div className="group relative bg-card border border-border rounded-xl p-8 hover:border-accent/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Heart className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-foreground/70 leading-relaxed">
                Integrity, excellence, innovation, and human-centered solutions. We believe in building lasting
                relationships and delivering exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border bg-background/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why We're Different</h2>
            <p className="text-lg text-foreground/70">What sets Vedantix apart from the competition</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Quality Over Quantity",
                description:
                  "We focus on finding the perfect match, not just filling positions quickly. Every candidate is vetted for skills, culture fit, and long-term success.",
              },
              {
                title: "Industry Expertise",
                description:
                  "Our team has deep knowledge across tech, finance, healthcare, and more. We understand your industry's unique challenges and opportunities.",
              },
              {
                title: "Technology-Driven",
                description:
                  "Powered by advanced matching algorithms and data analytics, we make smarter placements and better recommendations.",
              },
              {
                title: "Global Reach",
                description:
                  "With operations across multiple continents, we connect you with talent and markets worldwide while maintaining local expertise.",
              },
              {
                title: "End-to-End Solutions",
                description:
                  "From staffing to development to data insights, we provide comprehensive solutions for all your business needs.",
              },
              {
                title: "Partnership Approach",
                description:
                  "We're not just vendors—we're partners invested in your long-term success. Your goals become our goals.",
              },
            ].map((diff, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors"
              >
                <h3 className="text-xl font-bold mb-3">{diff.title}</h3>
                <p className="text-foreground/70">{diff.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Leadership</h2>
            <p className="text-lg text-foreground/70">Meet the team driving Vedantix forward</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Rajesh Kumar", role: "Founder & CEO", background: "20+ years in tech staffing" },
              { name: "Priya Sharma", role: "CTO", background: "Former VP Engineering at TechCorp" },
              { name: "Marco Rodriguez", role: "Head of Sales", background: "15 years in enterprise sales" },
              { name: "Lisa Chen", role: "Head of Operations", background: "Ex-McKinsey consultant" },
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-28 h-28 bg-muted rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-foreground/60">{member.background}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border bg-background/40">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Vedantix Community</h2>
          <p className="text-lg text-foreground/70 mb-10">
            Whether you're looking to grow your team or launch your next project, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button size="lg" className="bg-primary hover:bg-primary/90 glow-primary" asChild>
              <Link href="/careers">
                View Careers <ArrowRight size={20} />
              </Link>
            </Button> */}
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10 bg-transparent"
              asChild
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
