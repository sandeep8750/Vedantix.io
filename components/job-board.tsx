"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"
import { Job } from "@/lib/jobs"
import { JobApplicationModal } from "@/components/job-application-modal"

interface JobBoardProps {
  initialJobs: Job[]
  departments: string[]
}

export function JobBoard({ initialJobs, departments }: JobBoardProps) {
  const [filteredDept, setFilteredDept] = useState<string>("All")
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filtered = filteredDept === "All" 
    ? initialJobs 
    : initialJobs.filter((job) => job.department === filteredDept)

  const handleApply = (job: Job) => {
    setSelectedJob(job)
    setIsModalOpen(true)
  }

  return (
    <>
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-8">Open Positions</h2>

        <div className="flex flex-wrap gap-3">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setFilteredDept(dept)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filteredDept === dept
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
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full h-fit">
                  {job.level}
                </span>
                <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full h-fit">
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

            <Button 
              onClick={() => handleApply(job)}
              className="bg-primary hover:bg-primary/90 w-full md:w-auto"
            >
              View & Apply <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-foreground/60 text-lg">No positions available in this department. Check back soon!</p>
        </div>
      )}

      <JobApplicationModal 
        job={selectedJob} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}
