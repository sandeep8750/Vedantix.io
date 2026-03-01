import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, MapPin, Briefcase, Users } from "lucide-react"
import { getJobs } from "@/lib/jobs"
import { JobBoard } from "@/components/job-board"
import { CareersCTAButton } from "@/components/careers-cta-buttons"

export default async function CareersPage() {
  const jobs = await getJobs()
  const departments = ["All", ...Array.from(new Set(jobs.map((job) => job.department)))]

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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <JobBoard initialJobs={jobs} departments={departments} />
        </div>
      </section>

      {/* Internship Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border bg-background/40">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Internship Program</h2>
            <p className="text-lg text-foreground/70 mb-6 max-w-2xl mx-auto">
              Launch your career with hands-on experience, mentorship, and the chance to make a real impact.
            </p>
            <CareersCTAButton
              variant="internship"
              label="Learn About Internships"
              className="bg-primary hover:bg-primary/90"
            />
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
          <CareersCTAButton
            variant="general"
            label="Submit Your Resume"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          />
        </div>
      </section>

      <Footer />
    </div>
  )
}
