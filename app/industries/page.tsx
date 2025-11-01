import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function IndustriesPage() {
  const industries = [
    {
      name: "Technology",
      description: "Rapid-growth tech companies need specialized talent and custom solutions.",
      services: ["IT Staffing", "Web & App Development", "B2B Database"],
      stats: [
        { label: "Projects Completed", value: "150+" },
        { label: "Tech Professionals", value: "500+" },
      ],
    },
    {
      name: "Finance",
      description: "Secure, compliant solutions for fintech, banking, and investment firms.",
      services: ["IT Staffing", "Web & App Development", "B2B Database"],
      stats: [
        { label: "Compliance Rate", value: "100%" },
        { label: "Enterprise Clients", value: "50+" },
      ],
    },
    {
      name: "Healthcare",
      description: "HIPAA-compliant talent and systems for medical and health tech organizations.",
      services: ["IT Staffing", "Web & App Development", "B2B Database"],
      stats: [
        { label: "Healthcare Projects", value: "80+" },
        { label: "Certified Professionals", value: "200+" },
      ],
    },
    {
      name: "E-commerce",
      description: "High-performance systems and teams for online retail and marketplace platforms.",
      services: ["IT Staffing", "Web & App Development", "B2B Database"],
      stats: [
        { label: "E-commerce Solutions", value: "120+" },
        { label: "Peak Traffic Support", value: "99.9% Uptime" },
      ],
    },
    {
      name: "Startups",
      description: "Flexible staffing and rapid development for fast-growing early-stage companies.",
      services: ["IT Staffing", "Web & App Development", "B2B Database"],
      stats: [
        { label: "Startup Partners", value: "300+" },
        { label: "Avg. Time to Launch", value: "6-8 Weeks" },
      ],
    },
    {
      name: "Enterprises",
      description: "Large-scale transformation and dedicated teams for Fortune 500 companies.",
      services: ["IT Staffing", "Web & App Development", "B2B Database"],
      stats: [
        { label: "Fortune 500 Clients", value: "30+" },
        { label: "Dedicated Teams", value: "200+" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Expertise across diverse sectors with tailored solutions for every industry
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border bg-background/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, i) => (
              <div
                key={i}
                className="group relative bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="text-primary" size={24} />
                </div>

                <h3 className="text-2xl font-bold mb-3">{industry.name}</h3>
                <p className="text-foreground/70 mb-6">{industry.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-border">
                  {industry.stats.map((stat, j) => (
                    <div key={j}>
                      <p className="text-2xl font-bold text-primary">{stat.value}</p>
                      <p className="text-xs text-foreground/60">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <p className="text-xs font-semibold text-foreground/50 mb-3 uppercase tracking-wide">Services</p>
                  <div className="flex flex-wrap gap-2">
                    {industry.services.map((service, j) => (
                      <span key={j} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="text-primary hover:text-primary/80 font-medium text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h2>
            <p className="text-lg text-foreground/70">How we've helped businesses transform and scale</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "FinTech Startup Scaling",
                industry: "Finance",
                challenge: "Needed 15 senior developers in 4 weeks",
                result: "Assembled team, deployed MVP in 6 weeks",
                impact: "Series A Funding: $10M",
              },
              {
                title: "Healthcare Platform Launch",
                industry: "Healthcare",
                challenge: "HIPAA-compliant system for patient data",
                result: "Built secure, scalable platform with compliance",
                impact: "500K+ Active Users",
              },
              {
                title: "E-commerce Scale-Up",
                industry: "E-commerce",
                challenge: "Handle 10x traffic during peak season",
                result: "Architected cloud solution with auto-scaling",
                impact: "99.9% Uptime, 10x Traffic Handled",
              },
            ].map((caseStudy, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-8 hover:border-secondary/50 transition-all duration-300"
              >
                <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full mb-4">
                  {caseStudy.industry}
                </div>
                <h3 className="text-xl font-bold mb-4">{caseStudy.title}</h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wide mb-1">Challenge</p>
                    <p className="text-foreground/70">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wide mb-1">Solution</p>
                    <p className="text-foreground/70">{caseStudy.result}</p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-lg font-bold text-primary">{caseStudy.impact}</p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="text-secondary hover:text-secondary/80 font-medium text-sm inline-flex items-center gap-2 mt-6 group hover:gap-3 transition-all"
                >
                  View Full Case Study <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border bg-background/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Vedantix</h2>
            <p className="text-lg text-foreground/70">Industry-specific expertise with global reach</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Domain Expertise", desc: "Deep knowledge of each industry's unique challenges" },
              { title: "Global Talent Pool", desc: "Access to professionals worldwide" },
              { title: "Compliance Ready", desc: "HIPAA, SOC2, ISO 27001 certified" },
              { title: "Rapid Deployment", desc: "Teams ready in days, not weeks" },
              { title: "Cost Effective", desc: "25-40% savings vs. traditional recruiting" },
              { title: "Dedicated Support", desc: "24/7 support and account management" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors"
              >
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-foreground/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-accent/5 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Find Your Industry Solution</h2>
          <p className="text-lg text-foreground/70 mb-10">
            Let's discuss how Vedantix can support your industry-specific goals.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 glow-primary" asChild>
            <Link href="/contact">
              Connect With An Expert <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
