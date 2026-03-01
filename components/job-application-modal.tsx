"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"

import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { Job } from "@/lib/jobs"
import { User, GraduationCap, Briefcase, Link2, CheckCircle2, ChevronLeft, ChevronRight, Send, X } from "lucide-react"

interface JobApplicationModalProps {
  job: Job | null
  isOpen: boolean
  onClose: () => void
}

const STEPS = [
  { id: 1, label: "Personal", icon: User },
  { id: 2, label: "Education", icon: GraduationCap },
  { id: 3, label: "Experience", icon: Briefcase },
  { id: 4, label: "Links", icon: Link2 },
]

const emptyForm = {
  fullName: "",
  email: "",
  phone: "",
  alternatePhone: "",
  dateOfBirth: "",
  gender: "",
  currentCity: "",
  currentAddress: "",
  nationality: "",
  highestQualification: "",
  degree: "",
  totalExperience: "",
  currentCompany: "",
  currentJobTitle: "",
  previousCompany: "",
  currentSalary: "",
  expectedSalary: "",
  noticePeriod: "",
  linkedInProfile: "",
  githubProfile: "",
  portfolioWebsite: "",
}

export function JobApplicationModal({ job, isOpen, onClose }: JobApplicationModalProps) {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState(emptyForm)
  const [resume, setResume] = useState<File | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setStep(1)
      setSubmitted(false)
      setFormData(emptyForm)
      setResume(null)
    }, 300)
  }

  // ── Google Apps Script URL (logs to Sheet + sends plain-text email) ──────
  const GAS_URL = "https://script.google.com/macros/s/AKfycbwsPM3HA9OnBcnDap7aL4JDFfEFjsk7vpOx0rBncOlIlmg1_-umwrEkRwuAzBVi0RPi/exec"
  // ─────────────────────────────────────────────────────────────────────────

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!job) return
    if (!resume) {
      toast.error("Please attach your resume (PDF) before submitting.")
      return
    }

    setIsSubmitting(true)
    try {
      const payload = {
        ...formData,
        jobTitle: job.title,
        jobDepartment: job.department,
        appliedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      }

      // 1️⃣ Fire GAS → logs to Google Sheet (fire-and-forget, doesn't block)
      fetch(GAS_URL, {
        method: "POST",
        body: JSON.stringify(payload),
      }).catch((err) => console.warn("[Modal] GAS sheet log failed:", err))

      // 2️⃣ Send HTML email + resume via /api/apply (awaited for success screen)
      const data = new FormData()
      Object.entries(payload).forEach(([k, v]) => data.append(k, v))
      data.append("resume", resume)

      const res = await fetch("/api/apply", { method: "POST", body: data })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || "Server error")
      }

      setSubmitted(true)
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong."
      console.error("[Modal] Submission error:", err)
      toast.error(msg)
    } finally {
      setIsSubmitting(false)
    }
  }


  const progress = (step / STEPS.length) * 100

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
        <DialogContent className="w-full max-w-[98vw] sm:max-w-[620px] max-h-[92dvh] flex flex-col p-0 overflow-hidden border-border bg-card gap-0 [&>button]:hidden rounded-xl">
        <DialogTitle className="sr-only">Apply for {job?.title}</DialogTitle>

        {/* Header */}
        <div className="relative px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4 border-b border-border bg-gradient-to-r from-primary/10 via-card to-accent/5">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-muted transition-colors text-foreground/50 hover:text-foreground"
          >
            <X size={18} />
          </button>
          <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{job?.department}</p>
          <h2 className="text-lg sm:text-xl font-bold text-foreground pr-8">Apply for {job?.title}</h2>
          <p className="text-sm text-foreground/60 mt-1">
            {submitted ? "We've received your application!" : "Complete all steps to submit your application"}
          </p>

          {!submitted && (
            <div className="mt-4">
              {/* Step Tabs */}
              <div className="flex gap-1 mb-3">
                {STEPS.map((s) => {
                  const Icon = s.icon
                  const isActive = step === s.id
                  const isDone = step > s.id
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => step > s.id && setStep(s.id)}
                      className={`flex-1 flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : isDone
                          ? "bg-primary/20 text-primary cursor-pointer hover:bg-primary/30"
                          : "bg-muted/50 text-foreground/40 cursor-default"
                      }`}
                    >
                      <Icon size={12} />
                      <span className="hidden sm:inline">{s.label}</span>
                      <span className="sm:hidden">{s.id}</span>
                    </button>
                  )
                })}
              </div>
              {/* Progress bar */}
              <div className="h-1 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-500 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        {submitted ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center">
              <CheckCircle2 className="text-green-500" size={36} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Application Submitted!</h3>
              <p className="text-foreground/60 max-w-xs">
                Thank you, <strong>{formData.fullName}</strong>! We&#39;ll review your application and get back to you at <strong>{formData.email}</strong>.
              </p>
            </div>
            <Button onClick={handleClose} className="mt-2 bg-primary hover:bg-primary/90 px-8">
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col flex-1 min-h-0">
            <div className="flex-1 min-h-0 overflow-y-auto px-4 sm:px-6">
              <div className="py-5 space-y-5">

                {/* Step 1 – Personal */}
                {step === 1 && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                    <SectionTitle icon={User} title="Personal Details" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Full Name" required className="col-span-2">
                        <Input id="fullName" placeholder="Rahul Sharma" required value={formData.fullName} onChange={handleInputChange} />
                      </Field>
                      <Field label="Email Address" required>
                        <Input id="email" type="email" placeholder="rahul@example.com" required value={formData.email} onChange={handleInputChange} />
                      </Field>
                      <Field label="Phone Number" required>
                        <Input id="phone" type="tel" placeholder="+91 98765 43210" required value={formData.phone} onChange={handleInputChange} />
                      </Field>
                      <Field label="Alternate Phone">
                        <Input id="alternatePhone" type="tel" placeholder="+91 98765 43211" value={formData.alternatePhone} onChange={handleInputChange} />
                      </Field>
                      <Field label="Date of Birth" >
                        <Input id="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={handleInputChange} />
                      </Field>
                      <Field label="Gender" required>
                        <Select onValueChange={(v) => handleSelectChange("gender", v)} value={formData.gender}>
                          <SelectTrigger id="gender" className="bg-background">
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                            <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                          </SelectContent>
                        </Select>
                      </Field>
                      <Field label="Nationality">
                        <Input id="nationality" placeholder="Indian" value={formData.nationality} onChange={handleInputChange} />
                      </Field>
                      <Field label="Current City" required>
                        <Input id="currentCity" placeholder="Gurugram" required value={formData.currentCity} onChange={handleInputChange} />
                      </Field>
                      <Field label="Current Address" required className="col-span-2">
                        <Input id="currentAddress" placeholder="123 Street, Sector 45, Gurugram" required value={formData.currentAddress} onChange={handleInputChange} />
                      </Field>
                    </div>
                  </div>
                )}

                {/* Step 2 – Education */}
                {step === 2 && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                    <SectionTitle icon={GraduationCap} title="Education" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Highest Qualification" className="col-span-2">
                        <Select onValueChange={(v) => handleSelectChange("highestQualification", v)} value={formData.highestQualification}>
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Select qualification" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="10th">10th</SelectItem>
                            <SelectItem value="12th">12th</SelectItem>
                            <SelectItem value="diploma">Diploma</SelectItem>
                            <SelectItem value="graduation">Graduation</SelectItem>
                            <SelectItem value="post graduation">Post Graduation</SelectItem>
                            <SelectItem value="phd">PhD</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </Field>
                      <Field label="Degree / Major" className="col-span-2">
                        <Input id="degree" placeholder="e.g. B.Tech in Computer Science" value={formData.degree} onChange={handleInputChange} />
                      </Field>
                    </div>
                  </div>
                )}

                {/* Step 3 – Experience */}
                {step === 3 && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                    <SectionTitle icon={Briefcase} title="Professional Experience" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Total Experience (Years)">
                        <Input id="totalExperience" placeholder="e.g. 5" value={formData.totalExperience} onChange={handleInputChange} />
                      </Field>
                      <Field label="Notice Period (Days)">
                        <Input id="noticePeriod" placeholder="e.g. 30" value={formData.noticePeriod} onChange={handleInputChange} />
                      </Field>
                      <Field label="Current Job Title">
                        <Input id="currentJobTitle" placeholder="Senior Developer" value={formData.currentJobTitle} onChange={handleInputChange} />
                      </Field>
                      <Field label="Current Company">
                        <Input id="currentCompany" placeholder="Google" value={formData.currentCompany} onChange={handleInputChange} />
                      </Field>
                      <Field label="Previous Company">
                        <Input id="previousCompany" placeholder="Microsoft" value={formData.previousCompany} onChange={handleInputChange} />
                      </Field>
                      <Field label="Current CTC">
                        <Input id="currentSalary" placeholder="e.g. 15 LPA" value={formData.currentSalary} onChange={handleInputChange} />
                      </Field>
                      <Field label="Expected CTC" className="col-span-2">
                        <Input id="expectedSalary" placeholder="e.g. 20 LPA" value={formData.expectedSalary} onChange={handleInputChange} />
                      </Field>
                    </div>
                  </div>
                )}

                {/* Step 4 – Links & Resume */}
                {step === 4 && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                    <SectionTitle icon={Link2} title="Links & Resume" />
                    <div className="space-y-4">
                      <Field label="LinkedIn Profile">
                        <Input id="linkedInProfile" placeholder="https://linkedin.com/in/username" value={formData.linkedInProfile} onChange={handleInputChange} />
                      </Field>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Field label="GitHub Profile">
                          <Input id="githubProfile" placeholder="https://github.com/username" value={formData.githubProfile} onChange={handleInputChange} />
                        </Field>
                        <Field label="Portfolio Website">
                          <Input id="portfolioWebsite" placeholder="https://portfolio.com" value={formData.portfolioWebsite} onChange={handleInputChange} />
                        </Field>
                      </div>
                      <Field label="Resume (PDF only)" required>
                        <div className={`relative border-2 border-dashed rounded-lg p-4 transition-colors ${resume ? "border-primary/50 bg-primary/5" : "border-border hover:border-primary/30"}`}>
                          <input
                            type="file"
                            accept=".pdf"
                            required
                            onChange={(e) => setResume(e.target.files?.[0] || null)}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                          />
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${resume ? "bg-primary/15" : "bg-muted"}`}>
                              📄
                            </div>
                            <div>
                              {resume ? (
                                <>
                                  <p className="text-sm font-semibold text-primary">{resume.name}</p>
                                  <p className="text-xs text-foreground/50">{(resume.size / 1024).toFixed(1)} KB</p>
                                </>
                              ) : (
                                <>
                                  <p className="text-sm font-medium">Click to upload your resume</p>
                                  <p className="text-xs text-foreground/50">PDF format, max 5MB</p>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </Field>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Footer Nav */}
            <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-border bg-card flex items-center gap-2 sm:gap-3">
              {step > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep((s) => s - 1)}
                  disabled={isSubmitting}
                  className="gap-1.5"
                >
                  <ChevronLeft size={16} /> Back
                </Button>
              )}
              <div className="flex-1" />
              {step < STEPS.length ? (
                <Button
                  type="button"
                  onClick={() => {
                    // Step Validation before moving next
                    if (step === 1) {
                      const required = ["fullName", "email", "phone", "gender", "currentCity", "currentAddress"];
                      const missing = required.filter(f => !formData[f as keyof typeof formData]);
                      if (missing.length > 0) {
                        toast.error("Please fill in all mandatory Personal Details.");
                        return;
                      }
                    }
                    setStep((s) => s + 1);
                  }}
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary/90 gap-1.5 px-6"
                >
                  Next <ChevronRight size={16} />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary/90 gap-2 px-4 sm:px-6 min-w-[130px] sm:min-w-[160px]"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Submit Application
                    </>
                  )}
                </Button>
              )}
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}

// Helpers
function SectionTitle({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="flex items-center gap-2 pb-2 border-b border-border">
      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
        <Icon size={15} className="text-primary" />
      </div>
      <h3 className="font-semibold text-foreground">{title}</h3>
    </div>
  )
}

function Field({
  label,
  required,
  children,
  className,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`space-y-1.5 ${className ?? ""}`}>
      <Label className="text-xs font-medium text-foreground/70">
        {label}
        {required && <span className="text-primary ml-1">*</span>}
      </Label>
      {children}
    </div>
  )
}
