import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white page-transition">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center border-b border-white/10">
        <div className="w-28 h-28 mb-10 rounded-full overflow-hidden border border-white/20"><Image src="/profile.jpg" alt="Profile" width="112" height="112" className="w-full h-full object-cover" priority /></div>

        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6 max-w-3xl">
          Brillianta Zayyan Muhammad
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-6">
          Data Enthusiast - IT Support
        </p>

        <p className="text-base md:text-lg text-gray-500 mb-10 max-w-2xl leading-relaxed">
          I craft thoughtful digital products with clean interfaces, clear
          systems, and reliable engineering. Every project balances usability,
          visual clarity, and long-term maintainability.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/portfolio"
            className="px-8 py-3 rounded-full bg-white text-black font-medium tracking-wide uppercase btn-click btn-smooth hover:bg-gray-200"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 rounded-full border border-white/40 text-white font-medium tracking-wide uppercase btn-click btn-smooth hover:bg-white hover:text-black"
          >
            Contact
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm uppercase tracking-[0.4em] text-gray-500 text-center mb-12">
            Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              [
                "Frontend Development",
                "Interfaces that balance brand expression with crisp usability across devices.",
              ],
              [
                "Backend Development",
                "APIs and systems that stay predictable, secure, and easy to extend.",
              ],
              [
                "Product & Experience",
                "End-to-end thinking from structure and flows to polished micro-interactions.",
              ],
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/10 bg-black/40 p-8 flex flex-col gap-4 hover:bg-white/5 transition-colors"
              >
                <span className="text-xs uppercase tracking-[0.35em] text-gray-500">
                  0{index + 1}
                </span>
                <h3 className="text-2xl font-light">{item[0]}</h3>
                <p className="text-gray-500 leading-relaxed">{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              Selected Work
            </h2>
            <Link
              href="/portfolio"
              className="text-sm uppercase tracking-[0.3em] text-gray-500 hover:text-white btn-smooth"
            >
              View full portfolio
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Project One",
                description:
                  "A modern web application built with React and Node.js",
                tags: ["React", "Node.js"],
              },
              {
                title: "Project Two",
                description: "E-commerce platform with advanced features",
                tags: ["Next.js", "MongoDB"],
              },
              {
                title: "Project Three",
                description: "Mobile-first design system and components",
                tags: ["Vue.js", "Tailwind"],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="flex flex-col rounded-xl border border-white/10 overflow-hidden bg-black/40 hover:bg-white/5 transition-colors"
              >
                <div className="h-40 bg-white/5 border-b border-white/10"></div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-light mb-3">{project.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 border border-white/15 text-xs uppercase tracking-[0.2em] text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
            Let&apos;s Build Together
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-10">
            I&apos;m open to new collaborations, product challenges, and
            conversations about thoughtful design systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center justify-center gap-3 px-6 py-3 rounded-full border border-white/20 text-sm uppercase tracking-[0.3em] text-white hover:bg-white hover:text-black btn-click btn-smooth"
            >
              @<span className="sr-only">Email</span> your.email@example.com
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              className="flex items-center justify-center gap-3 px-6 py-3 rounded-full border border-white/20 text-sm uppercase tracking-[0.3em] text-white hover:bg-white hover:text-black btn-click btn-smooth"
            >
              in<span className="sr-only">LinkedIn</span>{" "}
              linkedin.com/in/yourprofile
            </a>
            <a
              href="https://github.com/yourusername"
              className="flex items-center justify-center gap-3 px-6 py-3 rounded-full border border-white/20 text-sm uppercase tracking-[0.3em] text-white hover:bg-white hover:text-black btn-click btn-smooth"
            >
              &lt;&gt;<span className="sr-only">GitHub</span>{" "}
              github.com/yourusername
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}


