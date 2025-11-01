import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Users, Code, Database, Clock, Shield, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs, backed by industry expertise
          </p>
        </div>
      </section>

      {/* IT Staffing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border bg-background/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">IT Staffing Solutions</h2>
              <p className="text-lg text-foreground/70 mb-8">
                Access to vetted IT professionals across all expertise levels. Whether you need temporary contractors,
                long-term placements, or full-time employees, we have the right talent for your team.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { title: "Contract Staffing", desc: "Flexible, short-term professionals for specific projects" },
                  { title: "Convert to Hire (C2H)", desc: "Try before you hire with conversion options" },
                  { title: "Full-time Recruitment", desc: "Permanent placements for key positions" },
                  { title: "US Staffing", desc: "Domestic and international talent pool" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check size={16} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-foreground/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90 glow-primary" asChild>
                <Link href="/contact">
                  Start Hiring <ArrowRight size={20} />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-card border border-border rounded-2xl p-8">
                <div className="space-y-6">
                  {[
                    { icon: Users, label: "1000+ Professionals", value: "Vetted & Verified" },
                    { icon: Clock, label: "24-48 Hours", value: "Average Placement Time" },
                    { icon: Shield, label: "100% Match", value: "Skill Verification" },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <stat.icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <p className="font-semibold">{stat.label}</p>
                        <p className="text-sm text-foreground/60">{stat.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web & App Development Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-last lg:order-first">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-card border border-border rounded-2xl p-8">
                <div className="space-y-6">
                  {[
                    { icon: Code, label: "Custom Development", value: "Tailored Solutions" },
                    { icon: Database, label: "Enterprise Systems", value: "Scalable Architecture" },
                    { icon: BarChart3, label: "Performance", value: "Optimized & Reliable" },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <stat.icon className="text-secondary" size={24} />
                      </div>
                      <div>
                        <p className="font-semibold">{stat.label}</p>
                        <p className="text-sm text-foreground/60">{stat.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-6">Web & App Development</h2>
              <p className="text-lg text-foreground/70 mb-8">
                Transform your ideas into powerful digital solutions. Our expert developers build custom software and
                enterprise systems using the latest technologies and best practices.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { title: "Custom Software", desc: "Built from scratch to your exact specifications" },
                  { title: "Enterprise Systems", desc: "Robust solutions for complex business needs" },
                  { title: "Mobile Apps", desc: "iOS and Android applications for maximum reach" },
                  { title: "Cloud Solutions", desc: "Scalable cloud-native architecture" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check size={16} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-foreground/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild>
                <Link href="/contact">
                  Start a Project <ArrowRight size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Database Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border bg-background/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">B2B Database Services</h2>
              <p className="text-lg text-foreground/70 mb-8">
                Access verified business contact data to power your sales, marketing, and research initiatives. Our
                database is continuously updated and verified for accuracy.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { title: "Business Contact Data", desc: "Millions of accurate business records" },
                  { title: "Decision Maker Profiles", desc: "Direct contact information for decision makers" },
                  { title: "Industry Segmentation", desc: "Filter by industry, company size, and more" },
                  { title: "Real-time Updates", desc: "Always current and verified information" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check size={16} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-foreground/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <Link href="/contact">
                  Explore Database <ArrowRight size={20} />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-card border border-border rounded-2xl p-8">
                <div className="space-y-6">
                  {[
                    { icon: Database, label: "10M+ Records", value: "Comprehensive Coverage" },
                    { icon: Shield, label: "99.9% Accuracy", value: "Verified & Updated Daily" },
                    { icon: BarChart3, label: "Advanced Filtering", value: "Segment by 50+ Criteria" },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        <stat.icon className="text-accent" size={24} />
                      </div>
                      <div>
                        <p className="font-semibold">{stat.label}</p>
                        <p className="text-sm text-foreground/60">{stat.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Process</h2>
            <p className="text-lg text-foreground/70">How we deliver exceptional results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "1", title: "Consultation", desc: "Understand your needs and goals" },
              { num: "2", title: "Assessment", desc: "Evaluate requirements in detail" },
              { num: "3", title: "Execution", desc: "Deliver solutions on time" },
              { num: "4", title: "Support", desc: "Ongoing support and optimization" },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-card border border-border rounded-xl p-8 text-center h-full">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">{step.num}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-foreground/60">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/3 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border bg-background/40">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-foreground/70 mb-10">
            Choose your service and let our experts help you achieve your business goals.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 glow-primary" asChild>
            <Link href="/contact">
              Schedule Consultation <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
