import enProjects from "@/data/projects/en.json"
import esProjects from "@/data/projects/es.json"
import enCV from "@/data/cv/en.json"
import esCV from "@/data/cv/es.json"

type Language = "en" | "es"

export function getProjectsData(language: Language) {
  return language === "en" ? enProjects : esProjects
}

export function getProjectById(id: string, language: Language) {
  const projects = getProjectsData(language)
  return projects[id] || null
}

export function getCVData(language: Language) {
  return language === "en" ? enCV : esCV
}

