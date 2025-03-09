import enProjects from "@/data/projects/en.json"
import esProjects from "@/data/projects/es.json"
import enCV from "@/data/cv/en.json"
import esCV from "@/data/cv/es.json"
import { Project } from "./types"

type Language = "en" | "es"

export function getProjectsData(language: Language): Project[] {
  return language === "en" ? enProjects : esProjects
}

export function getProjectById(id: string, language: Language): Project | null {
  const projects = getProjectsData(language)
  return projects.find(project => project.id === id) || null
}

export function getCVData(language: Language) {
  return language === "en" ? enCV : esCV
}
