import Link from "next/link";
import Image from "next/image";

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

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border border-white/20"><Image src="/profile.jpg" alt="Profile" width="112" height="112" className="w-full h-full object-cover" priority /></div>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight">About Me</h1>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            I&apos;m a passionate full-stack developer and UI/UX designer with over five years of experience
            shaping thoughtful digital products. I love translating complex requirements into calm,
            intuitive experiences.
          </p>
        </section>

        {/* Story Section */}
        <section className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 text-gray-500 leading-relaxed">
            <h2 className="text-2xl font-light text-white">My Story</h2>
            <p>My journey in tech started during university when I built my first website for a local business. The immediate feedback loop of designing, building, and shipping hooked me.</p>
            <p>Since then I&apos;ve worked with startups, agencies, and established teams to launch products that stay useful beyond their first release. Great software is empathetic: it solves real needs with clarity and care.</p>
            <p>Outside of client work I contribute to open-source projects, write about design systems, and mentor emerging developers. Continuous learning keeps the craft exciting.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/40 p-8 space-y-5">
            <h3 className="text-xl font-light">Quick Facts</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center justify-between"><span>Experience</span><span>5+ years</span></div>
              <div className="flex items-center justify-between"><span>Projects</span><span>50+ delivered</span></div>
              <div className="flex items-center justify-between"><span>Approach</span><span>Remote-first</span></div>
              <div className="flex items-center justify-between"><span>Mindset</span><span>Always learning</span></div>
              <div className="flex items-center justify-between"><span>Fuel</span><span>Black coffee</span></div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-light">Skills & Technologies</h2>
            <p className="text-gray-500">A toolbox centred on modern web stacks and product collaboration.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/10 bg-black/40 p-6 space-y-4"
              >
                <h3 className="text-lg font-light">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-gray-500">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 border border-white/15"
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
        <section className="space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-light">Experience</h2>
            <p className="text-gray-500">Selected roles that shaped how I design and build.</p>
          </div>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/10 bg-black/40 p-6 space-y-4 hover:bg-white/5 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-light text-white">{job.role}</h3>
                    <p className="text-gray-500">{job.company}</p>
                  </div>
                  <span className="text-sm text-gray-500">{job.period}</span>
                </div>
                <p className="text-gray-500 leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-light">Education</h2>
            <p className="text-gray-500">Foundations in computer science and human-centred design.</p>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/10 bg-black/40 p-6 space-y-4 hover:bg-white/5 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-light text-white">{edu.degree}</h3>
                    <p className="text-gray-500">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-gray-500">{edu.period}</span>
                </div>
                <p className="text-gray-500 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center rounded-xl border border-white/10 bg-black/40 p-12 space-y-6">
          <h2 className="text-3xl font-light">Let&apos;s build something considered</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            I&apos;m always interested in new challenges and opportunities to craft experiences that feel effortless.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/portfolio"
              className="px-8 py-3 rounded-full bg-white text-black uppercase tracking-[0.3em] text-sm btn-click btn-smooth"
            >
              View Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full border border-white/40 text-white uppercase tracking-[0.3em] text-sm hover:bg-white hover:text-black btn-click btn-smooth"
            >
              Start a Project
            </Link>
          </div>
        </section>
      </div>
    </div>
  );

}


