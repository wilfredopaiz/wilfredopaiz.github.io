"use client"

import { ArrowLeft, Download, Calendar, MapPin, Award } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"
import { getCVData } from "@/utils/data-loader"

export default function CVPage() {
  const { t, language } = useLanguage()
  const cvData = getCVData(language)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="min-h-screen text-white">
      <Navbar />

      <main className="container mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4"
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              {t("cv.title")}
            </h1>
            <p className="text-gray-400 max-w-2xl">{t("cv.subtitle")}</p>
          </div>
          <div className="flex gap-4">
            <Link href="/">
              <Button
                variant="outline"
                className="border-gray-700 text-gray-300 hover:text-white transition-all duration-300"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t("cv.backToHome")}
              </Button>
            </Link>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
              <Download className="mr-2 h-4 w-4" />
              {t("cv.download")}
            </Button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Personal Info & Skills */}
          <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
            {/* Personal Info */}
            <motion.div variants={item}>
              <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 transition-all duration-300 hover:shadow-md hover:shadow-purple-900/10">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{t("cv.personalInfo")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-gray-300">{t("cv.birthDate")}</h3>
                      <p className="text-gray-400">{cvData.personalInfo.birthDate}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-gray-300">{t("cv.location")}</h3>
                      <p className="text-gray-400">{cvData.personalInfo.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 flex items-center justify-center text-gray-400 mt-0.5">@</div>
                    <div>
                      <h3 className="font-medium text-gray-300">{t("cv.email")}</h3>
                      <p className="text-gray-400">{cvData.personalInfo.email}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Skills */}
            <motion.div variants={item}>
              <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 transition-all duration-300 hover:shadow-md hover:shadow-purple-900/10">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{t("cv.skills")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-300 mb-2">{t("cv.programmingLanguages")}</h3>
                    <div className="flex flex-wrap gap-2">
                      {cvData.skills.programmingLanguages.map((lang, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-300">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-300 mb-2">{t("cv.frameworks")}</h3>
                    <div className="flex flex-wrap gap-2">
                      {cvData.skills.frameworks.map((framework, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-300">
                          {framework}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-300 mb-2">{t("cv.databases")}</h3>
                    <div className="flex flex-wrap gap-2">
                      {cvData.skills.databases.map((db, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-300">
                          {db}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-300 mb-2">{t("cv.tools")}</h3>
                    <div className="flex flex-wrap gap-2">
                      {cvData.skills.tools.map((tool, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-300">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-300 mb-2">{t("cv.languages")}</h3>
                    <div className="space-y-2">
                      {cvData.skills.languages.map((lang, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-gray-300">{lang.name}</span>
                          <span className="text-gray-400">{lang.level}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={item}>
              <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 transition-all duration-300 hover:shadow-md hover:shadow-purple-900/10">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{t("cv.certifications")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {cvData.certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-gray-400 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-gray-300">{cert.name}</h3>
                        <p className="text-gray-400">
                          {cert.issuer}, {cert.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Right Column - Experience & Education */}
          <motion.div variants={container} initial="hidden" animate="show" className="md:col-span-2 space-y-8">
            {/* Work Experience */}
            <motion.div variants={item}>
              <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 transition-all duration-300 hover:shadow-md hover:shadow-purple-900/10">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{t("cv.workExperience")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {cvData.workExperience.map((job, index) => (
                    <div key={index}>
                      {index > 0 && <Separator className="bg-gray-800 my-6" />}
                      <div className="space-y-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-lg text-white">{job.position}</h3>
                            <p className="text-purple-400">{job.company}</p>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <Calendar className="h-4 w-4" />
                            <span>{job.period}</span>
                          </div>
                        </div>
                        <p className="text-gray-300">{job.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {job.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-300">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Education */}
            <motion.div variants={item}>
              <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 transition-all duration-300 hover:shadow-md hover:shadow-purple-900/10">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{t("cv.education")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {cvData.education.map((edu, index) => (
                    <div key={index}>
                      {index > 0 && <Separator className="bg-gray-800 my-6" />}
                      <div className="space-y-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-lg text-white">{edu.degree}</h3>
                            <p className="text-purple-400">{edu.institution}</p>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                        <p className="text-gray-300">{edu.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Projects */}
            <motion.div variants={item}>
              <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 transition-all duration-300 hover:shadow-md hover:shadow-purple-900/10">
                <CardHeader className="flex flex-row justify-between items-center">
                  <CardTitle className="text-xl font-bold">{t("cv.keyProjects")}</CardTitle>
                  <Link href="/projects">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-700 text-gray-300 hover:text-white transition-all duration-300"
                    >
                      {t("cv.viewAll")}
                    </Button>
                  </Link>
                </CardHeader>
                <CardContent className="space-y-6">
                  {cvData.keyProjects.map((project, index) => (
                    <div key={index}>
                      {index > 0 && <Separator className="bg-gray-800 my-6" />}
                      <div className="space-y-3">
                        <h3 className="font-semibold text-lg text-white">{project.title}</h3>
                        <p className="text-gray-300">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-300">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
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

