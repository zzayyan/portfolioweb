import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 page-transition">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white text-4xl font-bold">
            YM
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Brillianta <span className="text-white">Zayyan</span> Muhammad
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
          Full Stack Developer & UI/UX Designer
        </p>

        <p className="text-lg text-gray-400 mb-12 max-w-3xl leading-relaxed">
          Passionate about creating beautiful, functional, and user-centered
          digital experiences. I specialize in modern web technologies and love
          bringing ideas to life through code.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/portfolio"
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1 text-center btn-click btn-smooth ripple"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 text-center btn-click btn-smooth ripple"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            What I Do
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300 card-hover">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Frontend Development
              </h3>
              <p className="text-gray-400">
                Creating responsive and interactive user interfaces using React,
                Next.js, and modern CSS frameworks.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300 card-hover">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Backend Development
              </h3>
              <p className="text-gray-400">
                Building robust server-side applications with Node.js,
                databases, and RESTful APIs.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300 card-hover">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                UI/UX Design
              </h3>
              <p className="text-gray-400">
                Designing intuitive and beautiful user experiences with a focus
                on usability and accessibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group card-hover">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Project One
                </h3>
                <p className="text-gray-400 mb-4">
                  A modern web application built with React and Node.js
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                    Node.js
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group card-hover">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Project Two
                </h3>
                <p className="text-gray-400 mb-4">
                  E-commerce platform with advanced features
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">
                    MongoDB
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group card-hover">
              <div className="h-48 bg-gradient-to-br from-green-500 to-emerald-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Project Three
                </h3>
                <p className="text-gray-400 mb-4">
                  Mobile-first design system and components
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">
                    Vue.js
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                    Tailwind
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Let's Work Together
          </h2>

          <p className="text-xl text-gray-300 mb-12">
            I'm always interested in new opportunities and exciting projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300 text-white btn-click card-hover"
            >
              <span>📧</span>
              your.email@example.com
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              className="flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300 text-white btn-click card-hover"
            >
              <span>💼</span>
              LinkedIn
            </a>
            <a
              href="https://github.com/yourusername"
              className="flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300 text-white btn-click card-hover"
            >
              <span>🔗</span>
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
