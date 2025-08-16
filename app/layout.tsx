import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import RouteTransition from "@/components/RouteTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brillianta Zayyan Muhammad - Full Stack Developer",
  description:
    "Full Stack Developer & UI/UX Designer. Passionate about creating beautiful, functional, and user-centered digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <RouteTransition>
          <main id="page-wrapper" className="pt-16 page-fade-enter">
            {children}
          </main>
        </RouteTransition>
      </body>
    </html>
  );
}
