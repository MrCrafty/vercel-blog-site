"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface FeaturedPostProps {
  title: string
  excerpt: string
  author: string
  date: string
  category: string
  imageUrl: string
  slug: string
}

export function FeaturedPost({ title, excerpt, author, date, category, imageUrl, slug }: FeaturedPostProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="overflow-hidden border-none shadow-lg">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-64 md:h-full min-h-[250px]">
            <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </div>
          <CardContent className="flex flex-col justify-center p-6">
            <Badge className="w-fit mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">{category}</Badge>
            <Link href={`/blog/${slug}`}>
              <h3 className="text-2xl font-bold mb-2 hover:text-purple-600 transition-colors">{title}</h3>
            </Link>
            <p className="text-gray-600 mb-4">{excerpt}</p>
            <div className="flex items-center text-sm text-gray-500 mt-auto">
              <div className="flex items-center mr-4">
                <User className="h-4 w-4 mr-1" />
                <span>{author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{date}</span>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  )
}

