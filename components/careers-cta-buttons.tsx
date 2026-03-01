"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { JobApplicationModal } from "@/components/job-application-modal"
import { Job } from "@/lib/jobs"

// A synthetic "job" entry used when the user applies via the generic CTA buttons
const INTERNSHIP_JOB: Job = {
  id: 0,
  title: "Internship / Open Application",
  department: "General",
  location: "Remote",
  type: "Internship",
  level: "Entry",
  description: "Submit your resume and let us know how you'd like to contribute.",
  requirements: [],
  posted: "Always open",
}

const GENERAL_JOB: Job = {
  id: -1,
  title: "Open Application",
  department: "General",
  location: "Remote",
  type: "Full-time / Part-time",
  level: "Any",
  description: "Don't see your dream role? Send us your resume anyway!",
  requirements: [],
  posted: "Always open",
}

interface CareersCTAButtonsProps {
  variant: "internship" | "general"
  label: string
  className?: string
  size?: "default" | "sm" | "lg" | "icon"
}

export function CareersCTAButton({ variant, label, className, size = "lg" }: CareersCTAButtonsProps) {
  const [isOpen, setIsOpen] = useState(false)
  const job = variant === "internship" ? INTERNSHIP_JOB : GENERAL_JOB

  return (
    <>
      <Button
        size={size}
        className={className}
        onClick={() => setIsOpen(true)}
      >
        {label}
      </Button>

      <JobApplicationModal
        job={job}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  )
}
