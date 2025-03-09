"use client"

import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  githubUrl?: string
  liveUrl?: string
  id?: string
  index?: number
}

export default function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  githubUrl,
  liveUrl,
  id = title.toLowerCase().replace(/\s+/g, "-"),
  index = 0,
}: ProjectCardProps) {
  // Item animation for use in staggered containers
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div variants={item} className="h-full">
      <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 overflow-hidden flex flex-col h-full hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300">
        <Link href={`/projects/${id}`}>
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </Link>
        <CardHeader>
          <Link href={`/projects/${id}`}>
            <CardTitle className="text-xl font-bold hover:text-purple-400 transition-colors duration-300">
              {title}
            </CardTitle>
          </Link>
          <CardDescription className="text-gray-400 line-clamp-2">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow overflow-hidden">
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech, index) => (
              <span key={index} className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300">
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex gap-3 mt-auto">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="sm"
                className="border-gray-700 text-gray-300 hover:text-white transition-all duration-300"
              >
                <Github className="h-4 w-4 mr-2" />
                Code
              </Button>
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="sm"
                className="border-gray-700 text-gray-300 hover:text-white transition-all duration-300"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </Button>
            </a>
          )}
          <Link href={`/projects/${id}`} className="ml-auto">
            <Button
              size="sm"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              View Details
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

