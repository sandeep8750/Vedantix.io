"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    }>
      <ContactContent />
    </Suspense>
  )
}

function ContactContent() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   company: "",
  //   phone: "",
  //   subject: "",
  //   message: "",
  // })
  // const [submitted, setSubmitted] = useState(false)

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  //   const { name, value } = e.target
  //   setFormData((prev) => ({ ...prev, [name]: value }))
  // }

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   // Simulate form submission
  //   setSubmitted(true)
  //   setTimeout(() => {
  //     setFormData({ name: "", email: "", company: "", phone: "", subject: "", message: "" })
  //     setSubmitted(false)
  //   }, 3000)
  // }

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxsD_gjkZQSTGpWqQQUv0CcbW1n1n5rAChvmfZ1F8j4KS6HHDCgnjHeMySlGAIkh7FJiQ/exec"; // <-- Replace this
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(false);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      setSubmitted(true);

      // Reset fields after success
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an issue submitting the form. Please try again!");
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const subject = searchParams.get("subject");
    if (subject) {
      setFormData((prev) => ({ ...prev, subject }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Questions about our services? Reach out and let's chat about how we can help
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border bg-background/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Mail,
                title: "Email",
                value: ["info@vedantix.io", "hr@vedantix.io"],
                // desc: "We'll respond within 24 hours",
              },
              {
                icon: Phone,
                title: "Phone",
                value: ["+91-9716233818", "+91-8510870477"],
                // desc: "Available 9 AM - 6 PM IST",
              },
              {
                icon: MapPin,
                title: "Our Locations",
                value: ["Gurugram, Haryana, India", "Hyderabad, Telangana, India"],
                // desc: "With offices in 5+ countries",
              },
            ].map((contact, i) => (
              <div
                key={i}
                className="group relative bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center hover:border-primary/50 hover:bg-card/60 transition-all duration-500 hover:shadow-[0_0_30px_rgba(var(--primary),0.1)] hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-primary/20 shadow-[0_0_15px_rgba(var(--primary),0.1)]">
                    <contact.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent transition-all duration-300">
                    {contact.title}
                  </h3>
                  <div className="space-y-3 flex flex-col items-center">
                    {Array.isArray(contact.value) ? (
                      contact.value.map((val, idx) => (
                        <div key={idx} className="w-full">
                          {contact.title === "Email" ? (
                            <a
                              href={`mailto:${val}`}
                              className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors block py-1"
                            >
                              {val}
                            </a>
                          ) : contact.title === "Phone" ? (
                            <a
                              href={`tel:${val.replace(/\s+/g, "")}`}
                              className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors block py-1"
                            >
                              {val}
                            </a>
                          ) : (
                            <span className="text-lg font-medium text-foreground/80 block py-1">{val}</span>
                          )}
                        </div>
                      ))
                    ) : (
                      <div className="text-lg font-medium text-foreground/80">{contact.value}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Hours */}
      <section id="contact-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8">Talk to an Expert</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name*</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-card border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email*</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="bg-card border-border"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="bg-card border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="bg-card border-border"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject*</label>
                  <Select
                    key={formData.subject}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, subject: value }))}
                    value={formData.subject}
                    required
                  >
                    <SelectTrigger className="w-full bg-card border-border">
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hire">Hire Talent</SelectItem>
                      <SelectItem value="develop">Web & App Development</SelectItem>
                      <SelectItem value="database">B2B Database</SelectItem>
                      <SelectItem value="careers">Careers</SelectItem>
                      <SelectItem value="other">Other Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message*</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your needs..."
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto bg-primary hover:bg-primary/90 glow-primary"
                  disabled={submitted}
                >
                  {submitted ? "Message Sent!" : "Send Message"}
                </Button>

                {submitted && (
                  <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg text-primary text-sm">
                    Thank you! We've received your message and will get back to you soon.
                  </div>
                )}
              </form>
            </div>

            {/* Office Hours & Info */}
            <div className="space-y-8">
              {/* <div className="bg-card border border-border rounded-xl p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="text-accent" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-4">Office Hours</h3>
                <div className="space-y-3 text-sm text-foreground/70">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9 AM - 6 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">10 AM - 2 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div> */}

              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-lg font-bold mb-4">Quick Response</h3>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li>✓ Responses within 24 hours</li>
                  <li>✓ No lengthy processes</li>
                  <li>✓ Direct expert contact</li>
                  <li>✓ Personalized solutions</li>
                </ul>
              </div>

              {/* <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8">
                <h3 className="text-lg font-bold mb-2">Urgent Matter?</h3>
                <p className="text-sm text-foreground/70 mb-4">Call us directly for immediate assistance</p>
                <a
                  href="tel:+15551234567"
                  className="text-primary font-semibold hover:text-primary/80 transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border bg-background/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Global Presence</h2>
            <p className="text-lg text-foreground/70">Visit us in person or connect remotely</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                region: "North America",
                city: "New York, USA",
                address: "123 Tech Avenue, Suite 500",
                email: "us@vedantix.io",
                phone: "+1 (555) 123-4567",
              },
              {
                region: "Europe",
                city: "London, UK",
                address: "456 Innovation Street, Floor 3",
                email: "eu@vedantix.io",
                phone: "+44 (20) 7946 0958",
              },
              {
                region: "Asia-Pacific",
                city: "Singapore",
                address: "789 Digital Hub, Level 12",
                email: "apac@vedantix.io",
                phone: "+65 6836 0842",
              },
            ].map((office, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors"
              >
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{office.region}</p>
                <h3 className="text-xl font-bold mb-4">{office.city}</h3>
                <div className="space-y-3 text-sm text-foreground/70">
                  <p>{office.address}</p>
                  <p>
                    <a href={`mailto:${office.email}`} className="text-primary hover:text-primary/80 transition-colors">
                      {office.email}
                    </a>
                  </p>
                  <p>
                    <a href={`tel:${office.phone}`} className="text-primary hover:text-primary/80 transition-colors">
                      {office.phone}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: "How long does the hiring process take?",
                a: "Typically 2-4 weeks from initial consultation to candidate placement. Expedited options available for urgent needs.",
              },
              {
                q: "What's your success rate?",
                a: "We maintain a 95%+ client satisfaction rate with long-term placements averaging 2+ years tenure.",
              },
              {
                q: "Do you offer remote staffing?",
                a: "Yes! We connect global talent for remote positions, hybrid arrangements, and on-site roles.",
              },
              {
                q: "What industries do you serve?",
                a: "We specialize in Tech, Finance, Healthcare, E-commerce, and serve both Startups and Fortune 500 companies.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold mb-2 text-lg">{faq.q}</h4>
                <p className="text-foreground/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
