"use client"

import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import ParticleBackground from "@/components/particle-background"
import CursorLightEffect from "@/components/cursor-light-effect"
import Navbar from "@/components/navbar"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { getProjectsData } from "@/utils/data-loader"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

import { ReactNode } from "react"

function AnimatedSection({ children, delay = 0, className = "", id = "" }: { children: ReactNode, delay?: number, className?: string, id?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeIn}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

export default function Portfolio() {
  const { t, language } = useLanguage()
  const projectsData = getProjectsData(language)
  const featuredProjects = Object.values(projectsData).slice(0, 4)

  return (
    <div className="min-h-screen text-white">
      {/* Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen w-full flex flex-col items-center justify-center text-center before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.08)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(124,58,237,0.05)_0%,transparent_40%),radial-gradient(circle_at_20%_80%,rgba(56,189,248,0.05)_0%,transparent_40%)]">
          <ParticleBackground />
          <CursorLightEffect />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="container max-w-3xl mx-auto px-4 relative z-10"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              {t("hero.title")}
            </h1>
            <p className="text-xl text-gray-400 mb-8">{t("hero.subtitle")}</p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex gap-4 justify-center"
            >
              <Link href="/projects">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  {t("hero.viewProjects")}
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-gray-700 text-gray-300 hover:text-white transition-all duration-300"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {t("hero.contactMe")}
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <AnimatedSection id="about" className="py-20 border-t border-gray-800">
          <div className="container max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              {t("about.title")}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="aspect-square w-full max-w-sm mx-auto rounded-full bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center"
              >
                <div className="w-[95%] h-[95%] rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Wilfredo Paiz"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
              <div>
                <p className="text-gray-300 mb-4">{t("about.paragraph1")}</p>
                <p className="text-gray-300">{t("about.paragraph2")}</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection id="skills" className="py-20 border-t border-gray-800" delay={0.1}>
          <div className="container max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              {t("skills.title")}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Express",
                "MongoDB",
                "PostgreSQL",
                "GraphQL",
                "REST API",
                "Tailwind CSS",
                "Git",
                "Docker",
                "AWS",
                "CI/CD",
                "Jest",
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                >
                  <SkillBadge name={skill} />
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection id="projects" className="py-20 border-t border-gray-800" delay={0.2}>
          <div className="container max-w-4xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                {t("projects.title")}
              </h2>
              <Link href="/projects" className="mt-4 md:mt-0">
                <Button
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:text-white transition-all duration-300"
                >
                  {t("projects.viewAll")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-8 grid-flow-row-dense">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies.slice(0, 4)}
                  imageUrl={project.images[0]}
                  id={project.id}
                  index={index}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection id="contact" className="py-20 border-t border-gray-800" delay={0.3}>
          <div className="container max-w-3xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              {t("contact.title")}
            </h2>
            <p className="text-gray-300 mb-8">{t("contact.subtitle")}</p>
            <div className="flex justify-center gap-6 flex-wrap">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Button
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:text-white transition-all duration-300"
                  size="lg"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  {t("contact.email")}
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <Button
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:text-white transition-all duration-300"
                  size="lg"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  {t("contact.linkedin")}
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <Button
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:text-white transition-all duration-300"
                  size="lg"
                >
                  <Github className="mr-2 h-5 w-5" />
                  {t("contact.github")}
                </Button>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800 text-center text-gray-500">
        <div className="container mx-auto px-4">
          <p>
            © {new Date().getFullYear()} Wilfredo Paiz. {t("footer.rights")}
          </p>
        </div>
      </footer>
    </div>
  )
}

