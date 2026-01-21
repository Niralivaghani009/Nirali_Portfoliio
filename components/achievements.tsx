import { Award, Users, Pencil, Zap } from "lucide-react"

const achievements = [
  {
    icon: Award,
    title: "Kaggle Dataset Expert",
    description: "Recognized contributor to the Kaggle data science community with high-quality datasets.",
  },
  {
    icon: Users,
    title: "Developer Mentor",
    description: "Mentored junior developers on React best practices and component architecture.",
  },
  {
    icon: Pencil,
    title: "Creative Artist",
    description: "Skilled in hand-drawn sketching, architectural designs, and landscape illustrations.",
  },
  {
    icon: Zap,
    title: "Performance Expert",
    description: "Passionate about performance optimization achieving 45% load time reductions.",
  },
]

export function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-primary w-16" />
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider">Achievements</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                <achievement.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold mb-2">{achievement.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
