import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Link
              href="mailto:nirvaghani009@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/nirali-vaghani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/nirali-vaghani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.kaggle.com/niraliivaghani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
              aria-label="Kaggle"
            >
              <span className="text-sm">Kaggle</span>
              <ExternalLink className="h-3 w-3" />
            </Link>
          </div>

          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Nirali Vaghani. Built with Next.js & TailwindCSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
