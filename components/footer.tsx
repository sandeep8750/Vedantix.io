import Link from "next/link"
import { Linkedin, Youtube, Instagram, Mail, Phone, MapPin } from "lucide-react"

const XIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.482 2.395H4.295L17.607 20.65z" />
  </svg>
)

export function Footer() {
  const SOCIAL_LINK = "https://www.linkedin.com/company/vedantix/"

  return (
    <footer className="bg-background/60 border-t border-border backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-4">
              Vedantix
            </h3>
            <p className="text-sm text-foreground/60 mb-6">Bringing Experts to Your Doorstep</p>
            <div className="flex gap-4">
              <Link
                href={SOCIAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card border border-border rounded-lg text-foreground/60 hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href={SOCIAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card border border-border rounded-lg text-foreground/60 hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <XIcon size={18} />
              </Link>
              <Link
                href={SOCIAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card border border-border rounded-lg text-foreground/60 hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Youtube size={18} />
              </Link>
              <Link
                href={SOCIAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card border border-border rounded-lg text-foreground/60 hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Instagram size={18} />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-foreground/60 hover:text-foreground transition-colors">
                  IT Staffing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-foreground/60 hover:text-foreground transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-foreground/60 hover:text-foreground transition-colors">
                  B2B Database
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-foreground/60 hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-foreground/60 hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/60 hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-foreground">Contact</h4>
            <ul className="space-y-4 text-sm text-foreground/60">
              <li className="flex gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <div className="flex flex-col gap-1.5">
                  <a href="mailto:info@vedantix.io" className="hover:text-primary transition-colors">info@vedantix.io</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <div className="flex flex-col gap-1.5">
                  <a href="tel:+919716233818" className="hover:text-primary transition-colors">+91-9716233818</a>
                  <a href="tel:+918510870477" className="hover:text-primary transition-colors">+91-8510870477</a>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <div className="flex flex-col gap-1.5 text-foreground/70">
                  <span>Gurugram, Haryana, India</span>
                  <span>Hyderabad, Telangana, India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
          <p>&copy; 2025 Vedantix.io. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
