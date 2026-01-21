"use client"

import { Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <MapPin className="h-4 w-4" />
            <span>Surat, Gujarat, India</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">Nirali Vaghani</h1>

          <p className="text-xl md:text-2xl text-primary font-medium">Senior Frontend Developer</p>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
            I build accessible, pixel-perfect digital experiences for the web. Specializing in React.js and Next.js
            ecosystem with a passion for performance optimization and exceptional user experiences.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <Link
              href="mailto:nirvaghani009@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary rounded-lg"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/nirali-vaghani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary rounded-lg"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="https://github.com/nirali-vaghani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary rounded-lg"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.kaggle.com/niraliivaghani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary rounded-lg flex items-center gap-1"
              aria-label="Kaggle"
            >
              <span className="text-sm font-medium">Kaggle</span>
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-primary/10 absolute -top-4 -left-4 blur-3xl" />
            <div className="w-72 h-72 rounded-full border-2 border-border bg-card flex items-center justify-center relative">
              <div className="text-center p-8">
                <p className="text-6xl font-bold text-primary">2+</p>
                <p className="text-muted-foreground mt-2">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
