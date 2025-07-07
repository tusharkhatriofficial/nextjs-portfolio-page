"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Mail, Heart } from "lucide-react"

const techStack = [
  { name: "Flutter", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
  { name: "Firebase", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200" },
  { name: "Java", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" },
  { name: "DSA", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
  { name: "Android", color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200" },
  { name: "AI", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
]

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDark =
      localStorage.getItem("darkMode") === "true" ||
      (!localStorage.getItem("darkMode") && window.matchMedia("(prefers-color-scheme: dark)").matches)
    setDarkMode(isDark)
    document.documentElement.classList.toggle("dark", isDark)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem("darkMode", newDarkMode.toString())
    document.documentElement.classList.toggle("dark", newDarkMode)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 transition-colors duration-300">
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleDarkMode}
          className="rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          {darkMode ? <Sun className="h-4 w-4 text-yellow-500" /> : <Moon className="h-4 w-4 text-slate-700" />}
        </Button>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Hero Section */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent animate-gradient">
                  Hi, I'm Tushar Khatri
                </span>
              </h1>

              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full animate-pulse"></div>
            </div>

            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
              Tech enthusiast building creative apps with{" "}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">Flutter</span>,{" "}
              <span className="text-orange-600 dark:text-orange-400 font-semibold">Firebase</span>, and{" "}
              <span className="text-purple-600 dark:text-purple-400 font-semibold">AI</span>. Currently diving into
              native Android development with <span className="text-red-600 dark:text-red-400 font-semibold">Java</span>{" "}
              and sharpening my problem-solving skills in{" "}
              <span className="text-green-600 dark:text-green-400 font-semibold">Data Structures and Algorithms</span>.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">Technologies I Work With</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <span
                  key={tech.name}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md ${tech.color} animate-fade-in-delay`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-8 animate-slide-up">
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 sm:p-12 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
              <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6">Let's Connect</h2>

              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-3 text-slate-600 dark:text-slate-300">
                  <Mail className="h-5 w-5" />
                  <span className="text-lg font-medium">hello@tusharkhatri.in</span>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  <a href="mailto:hello@tusharkhatri.in">
                    <Mail className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                    Send Email
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center">
        <p className="text-slate-600 dark:text-slate-400 flex items-center justify-center space-x-2">
          <span>Built with</span>
          <Heart className="h-4 w-4 text-red-500 animate-pulse" />
          <span>by Tushar Khatri</span>
        </p>
      </footer>
    </div>
  )
}
