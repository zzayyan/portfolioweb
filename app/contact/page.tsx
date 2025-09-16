"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const resetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // For demo purposes, we'll just show success
    setSubmitStatus("success");
    setIsSubmitting(false);

    // Reset form after 3 seconds
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
    }

    resetTimeoutRef.current = setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitStatus("idle");
      resetTimeoutRef.current = null;
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

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

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight">Get in touch</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            I&apos;d love to learn about your project, team, or product challenge. Leave a note and I&apos;ll respond within one business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="rounded-xl border border-white/10 bg-black/40 p-8 space-y-6">
            <h2 className="text-xl font-light">Send a message</h2>

            {submitStatus === "success" && (
              <div className="p-4 border border-white/20 text-sm text-gray-100">
                Thanks for your message. I&apos;ll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm uppercase tracking-[0.3em] text-gray-500">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm uppercase tracking-[0.3em] text-gray-500">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm uppercase tracking-[0.3em] text-gray-500">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                  placeholder="Project discussion"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm uppercase tracking-[0.3em] text-gray-500">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-full bg-white text-black uppercase tracking-[0.3em] text-sm font-medium hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="rounded-xl border border-white/10 bg-black/40 p-8 space-y-6">
              <h2 className="text-xl font-light">Connect</h2>
              <p className="text-gray-500">Prefer a direct channel? Here are the places I&apos;m active.</p>

              <div className="space-y-5 text-sm uppercase tracking-[0.3em] text-gray-500">
                <div className="flex flex-col gap-1">
                  <span className="text-white normal-case tracking-normal">Email</span>
                  <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-white transition-colors normal-case">your.email@example.com</a>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white normal-case tracking-normal">LinkedIn</span>
                  <a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors normal-case"
                  >
                    linkedin.com/in/yourprofile
                  </a>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white normal-case tracking-normal">GitHub</span>
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors normal-case"
                  >
                    github.com/yourusername
                  </a>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white normal-case tracking-normal">Location</span>
                  <span className="text-gray-400 normal-case">Working remotely from Your City, Country</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/40 p-8 space-y-3">
              <h3 className="text-lg font-light">Response time</h3>
              <p className="text-gray-500">I typically reply within 24 hours on weekdays.</p>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gray-500">
                <span className="w-2 h-2 rounded-full bg-white/70"></span>Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
