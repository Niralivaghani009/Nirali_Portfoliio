"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Send, Linkedin, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    const mailtoLink = `mailto:nirvaghani009@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-primary w-16" />
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider">Contact</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              If you would like to discuss a project or just say hi, I&apos;m always down to chat.
            </h3>

            <div className="space-y-4 pt-4">
              <a
                href="mailto:nirvaghani009@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="h-5 w-5" />
                <span className="group-hover:underline">nirvaghani009@gmail.com</span>
              </a>

              <a
                href="https://linkedin.com/in/nirali-vaghani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Linkedin className="h-5 w-5" />
                <span className="group-hover:underline">Nirali Vaghani</span>
              </a>

              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>Surat, Gujarat, India</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-background border-border"
                required
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-background border-border"
                required
              />
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-background border-border min-h-[150px]"
                required
              />
            </div>

            <Button type="submit" className="w-full gap-2">
              <Send className="h-4 w-4" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
