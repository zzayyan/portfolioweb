import Link from "next/link";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
      image: "/api/placeholder/400/300",
      technologies: [
        "Next.js",
        "TypeScript",
        "Stripe",
        "MongoDB",
        "Tailwind CSS",
      ],
      liveUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/username/ecommerce-platform",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team features.",
      image: "/api/placeholder/400/300",
      technologies: [
        "React",
        "Node.js",
        "Socket.IO",
        "PostgreSQL",
        "Material-UI",
      ],
      liveUrl: "https://demo-taskapp.com",
      githubUrl: "https://github.com/username/task-manager",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather application with location-based forecasts and interactive maps.",
      image: "/api/placeholder/400/300",
      technologies: ["Vue.js", "Weather API", "Mapbox", "Chart.js", "Sass"],
      liveUrl: "https://demo-weather.com",
      githubUrl: "https://github.com/username/weather-dashboard",
      featured: false,
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description:
        "A comprehensive dashboard for social media analytics with data visualization.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "D3.js", "Express", "Redis", "Bootstrap"],
      liveUrl: "https://demo-analytics.com",
      githubUrl: "https://github.com/username/social-analytics",
      featured: false,
    },
    {
      id: 5,
      title: "Recipe Finder App",
      description:
        "A mobile-first recipe application with ingredient-based search and meal planning.",
      image: "/api/placeholder/400/300",
      technologies: [
        "React Native",
        "Firebase",
        "Recipe API",
        "Redux",
        "Styled Components",
      ],
      liveUrl: "https://demo-recipes.com",
      githubUrl: "https://github.com/username/recipe-finder",
      featured: false,
    },
    {
      id: 6,
      title: "Portfolio Website Builder",
      description:
        "A drag-and-drop website builder specifically designed for creative portfolios.",
      image: "/api/placeholder/400/300",
      technologies: ["Angular", "TypeScript", "Drag & Drop API", "AWS", "SCSS"],
      liveUrl: "https://demo-builder.com",
      githubUrl: "https://github.com/username/portfolio-builder",
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="pt-8 pb-4 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center text-sm uppercase tracking-[0.3em] text-gray-500 hover:text-white transition-colors duration-200"
          >
            <span aria-hidden="true" className="mr-3">&larr;</span>Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-16 border-b border-white/10">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight">Portfolio</h1>
          <p className="text-gray-500 max-w-3xl mx-auto">
            A selection of product, platform, and experience work focused on clarity, performance, and craft.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-4 py-16 border-b border-white/10">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-2xl md:text-3xl font-light">Featured projects</h2>
            <span className="text-sm uppercase tracking-[0.3em] text-gray-500">{projects.filter((project) => project.featured).length} case studies</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <div
                  key={project.id}
                  className="flex flex-col rounded-xl border border-white/10 overflow-hidden bg-black/40 hover:bg-white/5 transition-colors"
                >
                  <div className="h-48 bg-white/5 border-b border-white/10"></div>
                  <div className="p-6 flex-1 flex flex-col space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-light">{project.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.slice(0, 4).map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 border border-white/15 text-xs uppercase tracking-[0.2em] text-gray-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 pt-4 text-sm uppercase tracking-[0.3em]">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center border border-white/20 px-3 py-2 hover:bg-white hover:text-black transition-colors"
                      >
                        Live
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center border border-white/20 px-3 py-2 hover:bg-white hover:text-black transition-colors"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="px-4 py-16 border-b border-white/10">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-2xl md:text-3xl font-light">More work</h2>
            <span className="text-sm uppercase tracking-[0.3em] text-gray-500">{projects.length} projects</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col rounded-xl border border-white/10 bg-black/40 hover:bg-white/5 transition-colors"
              >
                <div className="h-40 bg-white/5 border-b border-white/10"></div>
                <div className="p-6 flex-1 flex flex-col space-y-4">
                  <h3 className="text-lg font-light">{project.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-gray-400">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 border border-white/15"
                      >
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

      {/* CTA Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center rounded-xl border border-white/10 bg-black/40 p-12 space-y-6">
          <h2 className="text-3xl font-light">Have a project in mind?</h2>
          <p className="text-gray-500">Let&apos;s collaborate on clear interfaces, resilient systems, and memorable product experiences.</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-black uppercase tracking-[0.3em] text-sm btn-click btn-smooth"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </div>
  );

}
