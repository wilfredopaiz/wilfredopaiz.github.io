"use client";

import { ArrowLeft, Github, ExternalLink, Calendar, Code } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import { useLanguage } from "@/contexts/language-context";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import ImageCarousel from "@/components/image-carousel";
import { getProjectById, getProjectsData } from "@/utils/data-loader";
import { Project } from "@/utils/types";
import { StatusBadge } from "@/components/status-badge"

type ProjectPageClientProps = {
  projectId: string;
};

export default function ProjectPageClient({ projectId }: ProjectPageClientProps) {
  const { t, language } = useLanguage();

  const project: Project | null = getProjectById(projectId, language);
  const allProjects: Project[] = getProjectsData(language);

  const defaultProject = {
    id: "not-found",
    title: "Project Not Found",
    description: "The requested project could not be found.",
    longDescription: "The project you're looking for doesn't exist or has been removed.",
    technologies: [],
    features: [],
    challenges: "",
    solutions: "",
    results: "",
    images: ["/placeholder.svg?height=600&width=1200"],
    date: "",
  };

  const projectData = project || defaultProject;

  // Variantes para las animaciones
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-20">
        {/* Encabezado y navegación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4"
        >
          <div>
            <Link
              href="/projects"
              className="inline-flex items-center text-gray-400 hover:text-gray-300 mb-4 transition-colors duration-300"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("projects.backToProjects")}
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              {projectData.title}
            </h1>
            {projectData.status && (
              <div className="mt-2">
                <StatusBadge
                  variant={projectData.status as any}
                  status={t(`projectView.status.${projectData.status}`)}
                />
              </div>
            )}
          </div>
          <div className="flex gap-4">
            {projectData.githubUrl && (
              <a href={projectData.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:text-white transition-all duration-300"
                >
                  <Github className="mr-2 h-4 w-4" />
                  {t("projectView.viewCode")}
                </Button>
              </a>
            )}
            {projectData.liveUrl && (
              <a href={projectData.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {t("projectView.liveDemoButton")}
                </Button>
              </a>
            )}
          </div>
        </motion.div>

        {/* Carrusel de imágenes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <ImageCarousel images={projectData.images} alt={projectData.title} />
        </motion.div>

        {/* Información del proyecto */}
        <motion.div className="grid md:grid-cols-3 gap-8 mb-12" variants={container} initial="hidden" animate="visible">
          <motion.div variants={item} className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">{t("projectView.overview")}</h2>
            <p className="text-gray-300 mb-6">{projectData.longDescription}</p>
            {projectData.date && (
              <div className="flex items-center text-gray-400 mb-6">
                <Calendar className="h-5 w-5 mr-2" />
                <span>
                  {t("projectView.completed")}: {new Date(projectData.date).toLocaleDateString()}
                </span>
              </div>
            )}
            <h2 className="text-2xl font-bold mb-4">{t("projectView.features")}</h2>
            <ul className="list-disc pl-5 text-gray-300 mb-6 space-y-2">
              {projectData.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
            <motion.div variants={item}>
              <Tabs defaultValue="challenges" className="mb-6">
                <TabsList className="bg-gray-800 border-gray-700">
                  <TabsTrigger value="challenges">{t("projectView.challenges")}</TabsTrigger>
                  <TabsTrigger value="solutions">{t("projectView.solutions")}</TabsTrigger>
                  <TabsTrigger value="results">{t("projectView.results")}</TabsTrigger>
                </TabsList>
                <TabsContent value="challenges" className="text-gray-300 mt-4">
                  {projectData.challenges}
                </TabsContent>
                <TabsContent value="solutions" className="text-gray-300 mt-4">
                  {projectData.solutions}
                </TabsContent>
                <TabsContent value="results" className="text-gray-300 mt-4">
                  {projectData.results}
                </TabsContent>
              </Tabs>
            </motion.div>
          </motion.div>

          <motion.div variants={item}>
            <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 transition-all duration-300 hover:shadow-md hover:shadow-purple-900/10">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Code className="mr-2 h-5 w-5" />
                  {t("projectView.technologies")}
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projectData.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <Separator className="bg-gray-800 my-6" />
                <h3 className="text-xl font-bold mb-4">{t("projectView.moreProjects")}</h3>
                <div className="space-y-4">
                  {Object.values(allProjects)
                    .filter((p) => p.id !== projectId)
                    .slice(0, 3)
                    .map((p, index) => (
                      <motion.div
                        key={p.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      >
                        <Link href={`/projects/${p.id}`} className="block">
                          <div className="group p-3 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                            <h4 className="font-medium group-hover:text-white transition-colors duration-300">
                              {p.title}
                            </h4>
                            <p className="text-sm text-gray-400 line-clamp-2">{p.description}</p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </main>
      <footer className="py-8 border-t border-gray-800 text-center text-gray-500">
        <div className="container mx-auto px-4">
          <p>
            © {new Date().getFullYear()} Wilfredo Paiz. {t("footer.rights")}
          </p>
        </div>
      </footer>
    </div>
  );
}
