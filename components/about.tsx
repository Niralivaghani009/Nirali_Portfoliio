export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-primary w-16" />
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider">About</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend
              thoughtful design with robust engineering. My favorite work lies at the intersection of design and
              development, creating experiences that not only look great but are meticulously built for performance and
              usability.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently, I&apos;m a Senior Front-End Developer at{" "}
              <span className="text-foreground font-medium">PAR Solutions</span>, where I contribute to building
              enterprise-level applications with real-time features and complex data visualization dashboards.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In my spare time, I enjoy creating hand-drawn sketches, architectural designs, and landscape
              illustrations. I&apos;m also a <span className="text-foreground font-medium">Kaggle Dataset Expert</span>,
              contributing to the data science community.
            </p>
          </div>

          <div className="space-y-8">
            <div className="p-6 bg-card rounded-xl border border-border">
              <h3 className="text-foreground font-semibold mb-4">Education</h3>
              <div className="space-y-2">
                <p className="text-foreground font-medium">Bachelor of Technology in Information Technology</p>
                <p className="text-muted-foreground">P P Savani University, Surat, India</p>
                <p className="text-sm text-muted-foreground">June 2019 – May 2023</p>
                <div className="flex items-center gap-2 mt-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    50% Merit Scholarship
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-card rounded-xl border border-border text-center">
                <p className="text-3xl font-bold text-primary">30%</p>
                <p className="text-sm text-muted-foreground mt-1">Faster Reviews</p>
              </div>
              <div className="p-4 bg-card rounded-xl border border-border text-center">
                <p className="text-3xl font-bold text-primary">45%</p>
                <p className="text-sm text-muted-foreground mt-1">Load Time Reduction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
