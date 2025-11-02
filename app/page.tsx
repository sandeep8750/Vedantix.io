import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, Briefcase, Code, Database, Zap, Users, TrendingUp, Globe, Rocket, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute -top-20 left-1/3 w-80 h-80 bg-gradient-to-br from-secondary/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "4s" }}
          ></div>
          <div
            className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-tr from-accent/8 to-transparent rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center space-y-8">
            {/* Trust Badge */}
            <div className="inline-block animate-in fade-in slide-in-from-top-8 duration-1000">
              <div className="px-4 py-2 rounded-full bg-primary/15 border border-primary/40 text-sm font-semibold text-primary hover-scale cursor-default backdrop-blur-sm">
                <span className="inline-flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full animate-glow-pulse"></span>
                  Trusted by Companies Worldwide
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight text-balance animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
              Bringing{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
                Experts
              </span>{" "}
              <br className="hidden md:block" />
              to Your <span className="text-primary">Doorstep</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-foreground/75 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 font-light">
              Top-tier IT talent, custom software solutions, and verified B2B data. We connect you with the expertise
              your business needs to scale fast and succeed globally.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              <button className="h-13 px-8 text-base font-semibold rounded-lg button-gradient text-white hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 hover-scale border border-primary/30">
                <div className="flex items-center justify-center gap-2">
                  <Briefcase size={20} />
                  Hire Talent
                </div>
              </button>

              <button className="h-13 px-8 text-base font-semibold rounded-lg border-2 border-secondary text-secondary hover:bg-secondary/15 transition-all duration-300 hover-scale backdrop-blur-sm">
                <div className="flex items-center justify-center gap-2">
                  <Code size={20} />
                  Build Your Project
                </div>
              </button>

              <button className="h-13 px-8 text-base font-semibold rounded-lg button-gradient-accent text-white hover:shadow-2xl hover:shadow-accent/40 transition-all duration-300 hover-scale border border-accent/30">
                <div className="flex items-center justify-center gap-2">
                  <Database size={20} />
                  Get B2B Database
                </div>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm backdrop-blur-sm">
                <div className="flex items-center gap-3 bg-primary/10 px-4 py-3 rounded-lg border border-primary/20">
                  <div className="w-8 h-8 rounded-full bg-primary/25 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <span className="text-foreground/80 font-medium">Specialized AI & Tech Talent</span>
                </div>
                <div className="hidden sm:block w-px h-8 bg-gradient-to-b from-primary to-secondary opacity-50"></div>
                <div className="flex items-center gap-3 bg-secondary/10 px-4 py-3 rounded-lg border border-secondary/20">
                  <div className="w-8 h-8 rounded-full bg-secondary/25 flex items-center justify-center">
                    <span className="text-secondary font-bold text-sm">✓</span>
                  </div>
                  <span className="text-foreground/80 font-medium">Outcome-Driven Engagement</span>
                </div>
                <div className="hidden sm:block w-px h-8 bg-gradient-to-b from-secondary to-accent opacity-50"></div>
                <div className="flex items-center gap-3 bg-accent/10 px-4 py-3 rounded-lg border border-accent/20">
                  <div className="w-8 h-8 rounded-full bg-accent/25 flex items-center justify-center">
                    <span className="text-accent font-bold text-sm">✓</span>
                  </div>
                  <span className="text-foreground/80 font-medium">Continuous Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-primary font-semibold mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <Zap size={16} />
              OUR SERVICES
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Solutions That Drive Growth</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Expert solutions designed for startups, mid-market, and enterprises. We scale with your ambitions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* IT Staffing Card */}
            <div className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/15 hover:border-primary/30 transition-all duration-500 hover-scale">
              <div className="w-14 h-14 bg-primary/15 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                <Briefcase className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">IT Staffing</h3>
              <p className="text-foreground/70 mb-6">
                Expert talent placement with contract, C2H, and full-time options across all tech domains.
              </p>
              <ul className="space-y-3 text-sm text-foreground/60 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary flex-shrink-0" />
                  Contract & Temporary
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary flex-shrink-0" />
                  Convert to Hire (C2H)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary flex-shrink-0" />
                  Full-time Recruitment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary flex-shrink-0" />
                  US Staffing Solutions
                </li>
              </ul>
              <Link
                href="/services"
                className="text-primary hover:text-primary/80 font-semibold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                Learn More <ArrowRight size={18} />
              </Link>
            </div>

            {/* Web & App Development Card */}
            <div className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:shadow-secondary/15 hover:border-secondary/30 transition-all duration-500 hover-scale">
              <div className="w-14 h-14 bg-secondary/15 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-all">
                <Code className="text-secondary" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Web & App Development</h3>
              <p className="text-foreground/70 mb-6">
                Custom software and enterprise systems built with cutting-edge technology and scalability.
              </p>
              <ul className="space-y-3 text-sm text-foreground/60 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-secondary flex-shrink-0" />
                  Custom Software
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-secondary flex-shrink-0" />
                  Enterprise Systems
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-secondary flex-shrink-0" />
                  Mobile Applications
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-secondary flex-shrink-0" />
                  Cloud Solutions
                </li>
              </ul>
              <Link
                href="/services"
                className="text-secondary hover:text-secondary/80 font-semibold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                Learn More <ArrowRight size={18} />
              </Link>
            </div>

            {/* B2B Database Card */}
            <div className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:shadow-accent/15 hover:border-accent/30 transition-all duration-500 hover-scale">
              <div className="w-14 h-14 bg-accent/15 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all">
                <Database className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">B2B Database Services</h3>
              <p className="text-foreground/70 mb-6">
                Accurate, verified business contact data for targeted outreach and strategic growth.
              </p>
              <ul className="space-y-3 text-sm text-foreground/60 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-accent flex-shrink-0" />
                  Business Contact Data
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-accent flex-shrink-0" />
                  Decision Maker Profiles
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-accent flex-shrink-0" />
                  Industry Segmentation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-accent flex-shrink-0" />
                  Real-time Updates
                </li>
              </ul>
              <Link
                href="/services"
                className="text-accent hover:text-accent/80 font-semibold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                Learn More <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, label: "Expert Talent", value: "500+", desc: "Vetted professionals" },
              { icon: TrendingUp, label: "Success Rate", value: "98%", desc: "Client satisfaction" },
              { icon: Rocket, label: "Fast Delivery", value: "<7 days", desc: "Average placement" },
              { icon: Globe, label: "Global Reach", value: "25+", desc: "Countries served" },
            ].map((stat, i) => {
              const Icon = stat.icon
              return (
                <div
                  key={i}
                  className="bg-muted border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover-scale"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">{stat.label}</p>
                      <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-foreground/50">{stat.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-primary font-semibold mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <Zap size={16} />
              TESTIMONIALS
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Trusted by Industry Leaders</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              See what our clients say about their transformative partnerships with Vedantix
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Vedantix connected us with exceptional talent within weeks. The quality exceeded our expectations.",
                author: "Sarah Chen",
                role: "CTO",
                company: "Fintech",
              },
              {
                quote: "Their development team delivered our enterprise system on time and with outstanding quality.",
                author: "Michael Torres",
                role: "VP Engineering",
                company: "Healthcare",
              },
              {
                quote: "The B2B database accuracy and support are unmatched. ROI was immediate and significant.",
                author: "Jennifer Liu",
                role: "Sales Director",
                company: "Enterprise Solutions",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="group relative bg-card border border-border rounded-xl p-8 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/15 transition-all duration-300 hover-scale"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-primary text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed font-light">"{testimonial.quote}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  <p className="text-sm text-primary font-semibold">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background/40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-primary font-semibold mb-6 px-4 py-2 bg-primary/10 rounded-full">
            <Rocket size={16} />
            READY TO SCALE?
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-balance">
            Transform Your Business Today
          </h2>
          <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join 200+ companies that trust Vedantix to accelerate their growth. Get expert talent, custom solutions, and
            verified business data—all from one partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="h-12 px-10 text-base font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover-scale shadow-lg shadow-primary/20">
              Schedule Demo
            </button>
            <button className="h-12 px-10 text-base font-semibold rounded-lg border-2 border-secondary text-secondary hover:bg-secondary/10 transition-all duration-300 hover-scale">
              <Link href="/contact" className="flex items-center justify-center gap-2">
                Contact Sales
              </Link>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
