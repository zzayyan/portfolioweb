import Link from "next/link";

export default function About() {
  const skills = [
    {
      category: "Frontend",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Vue.js",
        "Angular",
        "Tailwind CSS",
        "Sass/SCSS",
        "JavaScript (ES6+)",
      ],
    },
    {
      category: "Backend",
      technologies: [
        "Node.js",
        "Express.js",
        "Python",
        "Django",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "RESTful APIs",
      ],
    },
    {
      category: "Tools & Others",
      technologies: [
        "Git",
        "Docker",
        "AWS",
        "Figma",
        "Adobe Creative Suite",
        "Webpack",
        "Jest",
        "CI/CD",
      ],
    },
  ];

  const experience = [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Innovators Inc.",
      period: "2022 - Present",
      description:
        "Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern web technologies.",
    },
    {
      role: "Frontend Developer",
      company: "Digital Solutions Co.",
      period: "2020 - 2022",
      description:
        "Developed responsive web applications using React and Vue.js, collaborated with design teams to implement pixel-perfect UIs.",
    },
    {
      role: "UI/UX Designer",
      company: "Creative Agency Ltd.",
      period: "2018 - 2020",
      description:
        "Designed user interfaces for web and mobile applications, conducted user research, and created design systems.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Technology",
      period: "2014 - 2018",
      description:
        "Specialized in Software Engineering and Human-Computer Interaction",
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

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white text-4xl font-bold">
            YM
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Me
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer and UI/UX designer with over 5
            years of experience creating digital experiences that matter. I love
            turning complex problems into simple, beautiful, and intuitive
            solutions.
          </p>
        </section>

        {/* Story Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">My Story</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  My journey in tech started during university when I built my
                  first website for a local business. The satisfaction of seeing
                  code come to life and solving real-world problems instantly
                  hooked me.
                </p>
                <p>
                  Over the years, I've had the privilege of working with
                  startups, agencies, and established companies, helping them
                  build products that users love. I believe great software is
                  not just about clean code, but about understanding user needs
                  and creating experiences that delight.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge through blog posts and mentoring. I'm always excited
                  about the next challenge and the opportunity to learn
                  something new.
                </p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-purple-400">🎯</span>
                  <span className="text-gray-300">5+ years of experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-purple-400">💼</span>
                  <span className="text-gray-300">50+ projects completed</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-purple-400">🌍</span>
                  <span className="text-gray-300">Remote-first mindset</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-purple-400">🎓</span>
                  <span className="text-gray-300">Continuous learner</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-purple-400">☕</span>
                  <span className="text-gray-300">Coffee enthusiast</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {job.role}
                    </h3>
                    <p className="text-purple-400 font-medium">{job.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm md:text-base">
                    {job.period}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-purple-400 font-medium">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="text-gray-400 text-sm md:text-base">
                    {edu.period}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in new challenges and opportunities to create
            meaningful digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/portfolio"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
