"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

// Mock data - in a real app, this would come from your database
const posts = [
  {
    id: 1,
    title: "10 Tips for Better Productivity",
    excerpt: "Discover how to maximize your productivity with these proven strategies.",
    author: "Jane Smith",
    date: "June 2, 2023",
    category: "Productivity",
    imageUrl: "/placeholder.svg?height=400&width=600",
    slug: "10-tips-for-better-productivity",
  },
  {
    id: 2,
    title: "The Future of Artificial Intelligence",
    excerpt: "Exploring the latest advancements in AI and what they mean for humanity.",
    author: "Michael Johnson",
    date: "May 28, 2023",
    category: "Technology",
    imageUrl: "/placeholder.svg?height=400&width=600",
    slug: "future-of-artificial-intelligence",
  },
  {
    id: 3,
    title: "Building Responsive Layouts with CSS Grid",
    excerpt: "Learn how to create beautiful, responsive layouts using CSS Grid.",
    author: "Sarah Williams",
    date: "May 20, 2023",
    category: "Web Development",
    imageUrl: "/placeholder.svg?height=400&width=600",
    slug: "building-responsive-layouts-with-css-grid",
  },
]

export function RecentPosts() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <Image src={post.imageUrl || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
            <CardContent className="p-5">
              <Badge className="mb-2 bg-purple-100 text-purple-800 hover:bg-purple-200">{post.category}</Badge>
              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-xl font-bold mb-2 hover:text-purple-600 transition-colors">{post.title}</h3>
              </Link>
              <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
              <div className="flex items-center text-xs text-gray-500">
                <div className="flex items-center mr-3">
                  <User className="h-3 w-3 mr-1" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{post.date}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

