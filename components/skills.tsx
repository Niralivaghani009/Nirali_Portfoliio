import { Code2, Palette, Database, Zap, GitBranch, Layers } from "lucide-react"

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "HTML", "CSS", "Python"],
  },
  {
    title: "Frontend",
    icon: Layers,
    skills: ["React.js", "Next.js", "Redux", "Redux Toolkit", "React Query", "React Router", "React Hooks"],
  },
  {
    title: "UI/UX",
    icon: Palette,
    skills: ["TailwindCSS", "Bootstrap", "Material-UI", "Responsive Design", "Figma"],
  },
  {
    title: "State & Real-time",
    icon: Zap,
    skills: ["Redux", "Context API", "React Query", "Socket.io"],
  },
  {
    title: "Tools & DevOps",
    icon: GitBranch,
    skills: ["Git", "GitHub", "VS Code", "Webpack", "Vite", "npm/yarn", "Docker"],
  },
  {
    title: "Data Science",
    icon: Database,
    skills: ["Anaconda", "Jupyter Notebook", "Google Colab"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-primary w-16" />
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider">Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-muted-foreground text-sm rounded-lg hover:text-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
