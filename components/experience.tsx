import { ExternalLink } from "lucide-react"

const experiences = [
  {
    period: "2023 — 2025",
    title: "Senior Frontend Developer",
    company: "PAR Solutions",
    location: "Surat, India",
    description:
      "Architected employee performance review platform with real-time analytics dashboards. Developed real-time messaging interfaces using Socket.io. Mentored junior developers on React best practices and component architecture.",
    achievements: [
      "Improved review completion speed by 30%",
      "Reduced initial load time by 45% through optimization",
      "Implemented infinite scroll with React Query and virtualization",
      "Built role-based UI components with dynamic rendering",
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "Redux", "Socket.io", "Chart.js"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-primary w-16" />
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider">Experience</h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="grid lg:grid-cols-[200px_1fr] gap-6 group">
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{exp.period}</div>

              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                      {exp.title} · {exp.company}
                      <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-muted-foreground text-sm">{exp.location}</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="text-primary mt-1.5">▹</span>
                      {achievement}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
