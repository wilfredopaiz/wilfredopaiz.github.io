"use client"

import { useState } from "react"
import { Check, ChevronDown, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface TechnologyFilterProps {
  technologies: string[]
  selectedTechnologies: string[]
  onChange: (technologies: string[]) => void
}

export default function TechnologyFilter({ technologies, selectedTechnologies, onChange }: TechnologyFilterProps) {
  const [open, setOpen] = useState(false)

  const toggleTechnology = (tech: string) => {
    if (selectedTechnologies.includes(tech)) {
      onChange(selectedTechnologies.filter((t) => t !== tech))
    } else {
      onChange([...selectedTechnologies, tech])
    }
  }

  const clearFilters = () => {
    onChange([])
  }

  return (
    <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="border-gray-700 text-gray-300 hover:text-white transition-all duration-300 w-full sm:w-auto"
          >
            Filter by technology
            <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64 p-0 bg-gray-900 border-gray-800">
          <div className="p-2">
            <div className="text-sm font-medium text-gray-300 mb-2">Technologies</div>
            <div className="space-y-1 max-h-[300px] overflow-auto">
              {technologies.map((tech) => (
                <div
                  key={tech}
                  className={cn(
                    "flex items-center px-2 py-1.5 rounded-md cursor-pointer hover:bg-gray-800",
                    selectedTechnologies.includes(tech) ? "bg-gray-800" : "",
                  )}
                  onClick={() => toggleTechnology(tech)}
                >
                  <div className="flex items-center justify-center w-4 h-4 mr-2 rounded-sm border border-gray-700">
                    {selectedTechnologies.includes(tech) && <Check className="h-3 w-3 text-purple-400" />}
                  </div>
                  <span className="text-gray-300">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>

      <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
        {selectedTechnologies.length > 0 && (
          <Button variant="ghost" size="sm" onClick={clearFilters} className="h-8 text-gray-400 hover:text-white">
            Clear filters
            <X className="ml-2 h-3 w-3" />
          </Button>
        )}
        {selectedTechnologies.map((tech) => (
          <Badge
            key={tech}
            variant="secondary"
            className="bg-gray-800 hover:bg-gray-700 text-gray-300 flex items-center"
          >
            {tech}
            <button className="ml-1 rounded-full hover:bg-gray-700 p-0.5" onClick={() => toggleTechnology(tech)}>
              <X className="h-3 w-3" />
            </button>
          </Badge>
        ))}
      </div>
    </div>
  )
}

