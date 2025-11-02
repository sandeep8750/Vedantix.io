"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Briefcase, Users } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function CareersPage() {
  const [filteredJobs, setFilteredJobs] = useState<string | null>(null)

  const jobs = [
    {
      id: 1,
      title: "Senior Full-Stack Engineer",
      department: "Engineering",
      location: "Remote / US",
      type: "Full-time",
      level: "Senior",
      description: "Build and scale our core platform serving 1000+ clients worldwide.",
      requirements: ["React/Next.js", "Node.js", "PostgreSQL", "AWS", "System Design"],
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "Talent Acquisition Manager",
      department: "People",
      location: "New York, NY",
      type: "Full-time",
      level: "Mid",
      description: "Lead our recruitment efforts and build top-tier teams for our clients.",
      requirements: ["5+ years recruiting", "Tech industry", "Management", "CRM expertise"],
      posted: "1 week ago",
    },
    {
      id: 3,
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      level: "Senior",
      description: "Define and execute product strategy for our B2B database platform.",
      requirements: ["5+ years PM", "B2B SaaS", "Analytics", "SQL", "Stakeholder management"],
      posted: "3 days ago",
    },
    {
      id: 4,
      title: "Sales Development Representative",
      department: "Sales",
      location: "Remote / US",
      type: "Full-time",
      level: "Entry",
      description: "Start your career in enterprise sales and help businesses transform.",
      requirements: ["Communication skills", "CRM", "Coachable", "Tech enthusiasm"],
      posted: "5 days ago",
    },
    {
      id: 5,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / EU",
      type: "Full-time",
      level: "Mid",
      description: "Build and maintain infrastructure supporting global scale.",
      requirements: ["Kubernetes", "Docker", "CI/CD", "AWS/GCP", "Infrastructure as Code"],
      posted: "1 day ago",
    },
    {
      id: 6,
      title: "Content Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      level: "Mid",
      description: "Create compelling content that drives thought leadership and demand.",
      requirements: ["5+ years marketing", "Content strategy", "SEO", "Technical writing"],
      posted: "1 week ago",
    },
  ]

  const departments = ["All", "Engineering", "Sales", "People", "Product", "Marketing"]

  const filtered = filteredJobs ? jobs.filter((job) => job.department === filteredJobs) : jobs

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Help us connect talent with opportunity and transform businesses globally
          </p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border bg-background/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Work at Vedantix</h2>
            <p className="text-lg text-foreground/70">Build your career with a company that values impact and growth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Talented Team",
                description: "Work alongside brilliant minds from around the world",
              },
              {
                icon: MapPin,
                title: "Remote-First",
                description: "Work from anywhere with flexible arrangements",
              },
              {
                icon: ArrowRight,
                title: "Growth Opportunities",
                description: "Clear career paths and continuous learning",
              },
              {
                icon: Briefcase,
                title: "Competitive Benefits",
                description: "Health, wellness, equity, and professional development",
              },
              {
                icon: Users,
                title: "Inclusive Culture",
                description: "Diverse perspectives and equal opportunities",
              },
              {
                icon: ArrowRight,
                title: "Meaningful Impact",
                description: "Shape the future of global talent and tech",
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-foreground/60 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
{/* 
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-8">Open Positions</h2>

            <div className="flex flex-wrap gap-3">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setFilteredJobs(dept === "All" ? null : dept)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${(dept === "All" && !filteredJobs) || filteredJobs === dept
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-foreground hover:border-primary/50"
                    }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filtered.map((job) => (
              <div
                key={job.id}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{job.title}</h3>
                    <p className="text-foreground/60 text-sm">{job.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {job.level}
                    </span>
                    <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full">
                      {job.type}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-foreground/60 text-sm mb-2 flex items-center justify-end gap-1">
                      <MapPin size={16} />
                      {job.location}
                    </p>
                    <p className="text-foreground/40 text-xs">{job.posted}</p>
                  </div>
                </div>

                <div className="mb-4 pb-4 border-t border-border">
                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.requirements.map((req, i) => (
                      <span key={i} className="px-2 py-1 bg-muted text-foreground/70 text-xs rounded">
                        {req}
                      </span>
                    ))}
                  </div>
                </div>

                <Button asChild className="bg-primary hover:bg-primary/90 w-full md:w-auto">
                  <Link href={`/careers/${job.id}`}>
                    View & Apply <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-foreground/60 text-lg">No positions available in this department. Check back soon!</p>
            </div>
          )}
        </div>
      </section> */}



      {/* Internship Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border bg-background/40">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Internship Program</h2>
            <p className="text-lg text-foreground/70 mb-6 max-w-2xl mx-auto">
              Launch your career with hands-on experience, mentorship, and the chance to make a real impact.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/contact?inquiry=internship">Learn About Internships</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border bg-card/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Don't See Your Dream Role?</h2>
          <p className="text-lg text-foreground/70 mb-10">
            Send us your resume and tell us about yourself. We'd love to hear from talented professionals.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
            <Link href="/contact?inquiry=general">Submit Your Resume</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
