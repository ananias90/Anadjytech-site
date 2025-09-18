"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Filter, X } from "lucide-react"

interface BlogFiltersSidebarProps {
  topics: { name: string; count: number }[]
  difficulties: { name: string; count: number }[]
  tags: { name: string; count: number }[]
  className?: string
}

export default function BlogFiltersSidebar({ topics, difficulties, tags, className = "" }: BlogFiltersSidebarProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Get initial values from URL
  const [selectedTopics, setSelectedTopics] = useState<string[]>(() => {
    const topics = searchParams.get("topic")
    return topics ? topics.split(",") : []
  })

  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>(() => {
    const difficulties = searchParams.get("level")
    return difficulties ? difficulties.split(",") : []
  })

  const [selectedTags, setSelectedTags] = useState<string[]>(() => {
    const tags = searchParams.get("tag")
    return tags ? tags.split(",") : []
  })

  const [isOpen, setIsOpen] = useState(false)

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())

    // Update topic parameter
    if (selectedTopics.length > 0) {
      params.set("topic", selectedTopics.join(","))
    } else {
      params.delete("topic")
    }

    // Update level parameter
    if (selectedDifficulties.length > 0) {
      params.set("level", selectedDifficulties.join(","))
    } else {
      params.delete("level")
    }

    // Update tag parameter
    if (selectedTags.length > 0) {
      params.set("tag", selectedTags.join(","))
    } else {
      params.delete("tag")
    }

    // Preserve search query
    const search = searchParams.get("search")
    if (search) {
      params.set("search", search)
    }

    const newUrl = `${window.location.pathname}?${params.toString()}`
    router.replace(newUrl, { scroll: false })
  }, [selectedTopics, selectedDifficulties, selectedTags, router, searchParams])

  const handleTopicChange = (topic: string, checked: boolean) => {
    if (checked) {
      setSelectedTopics([...selectedTopics, topic])
    } else {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic))
    }
  }

  const handleDifficultyChange = (difficulty: string, checked: boolean) => {
    if (checked) {
      setSelectedDifficulties([...selectedDifficulties, difficulty])
    } else {
      setSelectedDifficulties(selectedDifficulties.filter((d) => d !== difficulty))
    }
  }

  const handleTagChange = (tag: string, checked: boolean) => {
    if (checked) {
      setSelectedTags([...selectedTags, tag])
    } else {
      setSelectedTags(selectedTags.filter((t) => t !== tag))
    }
  }

  const clearAllFilters = () => {
    setSelectedTopics([])
    setSelectedDifficulties([])
    setSelectedTags([])
  }

  const hasActiveFilters = selectedTopics.length > 0 || selectedDifficulties.length > 0 || selectedTags.length > 0

  const FilterContent = () => (
    <div className="space-y-6">
      {hasActiveFilters && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-900">Active Filters</span>
            <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-blue-600 hover:text-blue-700">
              Clear All
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {selectedTopics.map((topic) => (
              <div
                key={topic}
                className="flex items-center gap-1 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
              >
                <span>Topic: {topic}</span>
                <button
                  onClick={() => handleTopicChange(topic, false)}
                  className="hover:bg-blue-200 rounded-full p-0.5"
                  aria-label={`Remove ${topic} filter`}
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
            {selectedDifficulties.map((difficulty) => (
              <div
                key={difficulty}
                className="flex items-center gap-1 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
              >
                <span>Level: {difficulty}</span>
                <button
                  onClick={() => handleDifficultyChange(difficulty, false)}
                  className="hover:bg-green-200 rounded-full p-0.5"
                  aria-label={`Remove ${difficulty} filter`}
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
            {selectedTags.map((tag) => (
              <div
                key={tag}
                className="flex items-center gap-1 bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full"
              >
                <span>Tag: {tag}</span>
                <button
                  onClick={() => handleTagChange(tag, false)}
                  className="hover:bg-purple-200 rounded-full p-0.5"
                  aria-label={`Remove ${tag} filter`}
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Topics Filter */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Topic</h3>
        <div className="space-y-3">
          {topics.map((topic) => (
            <div key={topic.name} className="flex items-center space-x-3">
              <Checkbox
                id={`topic-${topic.name}`}
                checked={selectedTopics.includes(topic.name)}
                onCheckedChange={(checked) => handleTopicChange(topic.name, checked as boolean)}
                aria-label={`Filter by ${topic.name}`}
              />
              <label htmlFor={`topic-${topic.name}`} className="text-sm text-gray-700 cursor-pointer flex-1">
                {topic.name}
              </label>
              <span className="text-xs text-gray-500">({topic.count})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Difficulty Filter */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Difficulty</h3>
        <div className="space-y-3">
          {difficulties.map((difficulty) => (
            <div key={difficulty.name} className="flex items-center space-x-3">
              <Checkbox
                id={`difficulty-${difficulty.name}`}
                checked={selectedDifficulties.includes(difficulty.name)}
                onCheckedChange={(checked) => handleDifficultyChange(difficulty.name, checked as boolean)}
                aria-label={`Filter by ${difficulty.name}`}
              />
              <label htmlFor={`difficulty-${difficulty.name}`} className="text-sm text-gray-700 cursor-pointer flex-1">
                {difficulty.name}
              </label>
              <span className="text-xs text-gray-500">({difficulty.count})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tags Filter */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
        <div className="space-y-3">
          {tags.map((tag) => (
            <div key={tag.name} className="flex items-center space-x-3">
              <Checkbox
                id={`tag-${tag.name}`}
                checked={selectedTags.includes(tag.name)}
                onCheckedChange={(checked) => handleTagChange(tag.name, checked as boolean)}
                aria-label={`Filter by ${tag.name}`}
              />
              <label htmlFor={`tag-${tag.name}`} className="text-sm text-gray-700 cursor-pointer flex-1">
                {tag.name}
              </label>
              <span className="text-xs text-gray-500">({tag.count})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <div className={`hidden lg:block w-80 flex-shrink-0 ${className}`}>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Filters</h2>
            {hasActiveFilters && (
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                {selectedTopics.length + selectedDifficulties.length + selectedTags.length} active
              </span>
            )}
          </div>
          <FilterContent />
        </div>
      </div>

      {/* Mobile Filter Button & Sheet */}
      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full mb-4 bg-transparent" aria-label="Open filters">
              <Filter className="w-4 h-4 mr-2" />
              Filters
              {hasActiveFilters && (
                <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full">
                  {selectedTopics.length + selectedDifficulties.length + selectedTags.length}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}
