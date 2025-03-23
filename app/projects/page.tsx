"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import Navbar from "@/components/navbar"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { getProjectsData } from "@/utils/data-loader"
import TechnologyFilter from "@/components/technology-filter"
import { Project } from "@/utils/types"

export default function ProjectsPage() {
  const { t, language } = useLanguage()
  const projectsData: Project[] = getProjectsData(language)
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([])

  // Extract all unique technologies from projects
  const allTechnologies = useMemo<string[]>(() => {
    const techSet = new Set<string>()
    projectsData.forEach((project: Project) => {
      project.technologies.forEach((tech) => techSet.add(tech))
    })
    return Array.from(techSet).sort()
  }, [projectsData])

  // Filter projects based on selected technologies
  const filteredProjects = useMemo<Project[]>(() => {
    if (selectedTechnologies.length === 0) {
      return projectsData
    }

    return projectsData.filter((project: Project) =>
      selectedTechnologies.every((tech) => project.technologies.includes(tech)),
    )
  }, [projectsData, selectedTechnologies])

  // Container animation for staggered children
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  }

  return (
    <div className="min-h-screen text-white">
      <Navbar />

      <main className="container mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4"
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              {t("projects.allProjectsTitle")}
            </h1>
            <p className="text-gray-400 max-w-2xl mb-4">{t("projects.allProjectsDescription")}</p>
          </div>
          <Link href="/">
            <Button
              variant="outline"
              className="border-gray-700 text-gray-300 hover:text-white transition-all duration-300"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("projects.backToHome")}
            </Button>
          </Link>
        </motion.div>

        <div className="mb-8">
          <TechnologyFilter
            technologies={allTechnologies}
            selectedTechnologies={selectedTechnologies}
            onChange={setSelectedTechnologies}
          />
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">{t("projects.filters.noProjects")}</p>
            <Button
              variant="link"
              onClick={() => setSelectedTechnologies([])}
              className="text-purple-400 hover:text-purple-300 mt-2"
            >
              {t("projects.filters.clearFilters")}
            </Button>
          </div>
        ) : (
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 grid-flow-row-dense"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                technologies={project.technologies.slice(0, 4)}
                imageUrl={project.images[0]}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                id={project.id}
                index={index}
                status={project.status}
              />
            ))}
          </motion.div>
        )}
      </main>

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

