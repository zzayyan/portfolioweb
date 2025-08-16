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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="pt-8 pb-4">
        <div className="max-w-6xl mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300 mb-8"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            A collection of my recent work showcasing web development, UI/UX
            design, and creative problem-solving.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <div
                  key={project.id}
                  className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="h-64 bg-gradient-to-br from-purple-500 to-pink-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-2 flex-wrap">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-black/30 text-white text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 border-2 border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-12 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            All Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {project.description.substring(0, 100)}...
                  </p>
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.technologies.slice(0, 2).map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                    >
                      Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-3 py-2 border border-purple-400 text-purple-400 rounded-lg text-sm font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
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

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Interested in Working Together?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm always open to discussing new projects and opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
