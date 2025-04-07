"use client"

import { useState } from "react"
import { Bold, Italic, Link, List, ListOrdered, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
}

export function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const [isFocused, setIsFocused] = useState(false)

  const handleFormat = (format: string) => {
    // In a real implementation, this would apply formatting to the selected text
    console.log(`Applying ${format} formatting`)
  }

  return (
    <div className={`border rounded-md overflow-hidden ${isFocused ? "ring-2 ring-purple-500 ring-opacity-50" : ""}`}>
      <div className="bg-gray-50 p-2 border-b flex flex-wrap gap-1">
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => handleFormat("bold")}>
          <Bold className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => handleFormat("italic")}>
          <Italic className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => handleFormat("link")}>
          <Link className="h-4 w-4" />
        </Button>
        <Separator orientation="vertical" className="mx-1 h-8" />
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => handleFormat("bullet-list")}>
          <List className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => handleFormat("numbered-list")}>
          <ListOrdered className="h-4 w-4" />
        </Button>
        <Separator orientation="vertical" className="mx-1 h-8" />
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => handleFormat("image")}>
          <ImageIcon className="h-4 w-4" />
        </Button>
      </div>
      <textarea
        className="w-full p-3 min-h-[300px] focus:outline-none"
        placeholder="Start writing your post..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  )
}

