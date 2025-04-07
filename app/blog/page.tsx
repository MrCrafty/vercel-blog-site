import Link from "next/link"
import Image from "next/image"
import { Calendar, Search, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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
  {
    id: 4,
    title: "Getting Started with Next.js and Tailwind CSS",
    excerpt: "Learn how to build modern web applications with Next.js and style them beautifully with Tailwind CSS.",
    author: "John Doe",
    date: "May 15, 2023",
    category: "Web Development",
    imageUrl: "/placeholder.svg?height=400&width=600",
    slug: "getting-started-with-nextjs-and-tailwind",
  },
  {
    id: 5,
    title: "The Psychology of Color in Marketing",
    excerpt: "Understanding how colors affect consumer behavior and how to use them effectively in your marketing.",
    author: "Emily Chen",
    date: "May 10, 2023",
    category: "Marketing",
    imageUrl: "/placeholder.svg?height=400&width=600",
    slug: "psychology-of-color-in-marketing",
  },
  {
    id: 6,
    title: "Sustainable Business Practices for 2023",
    excerpt: "How businesses can implement eco-friendly practices while maintaining profitability.",
    author: "David Wilson",
    date: "May 5, 2023",
    category: "Business",
    imageUrl: "/placeholder.svg?height=400&width=600",
    slug: "sustainable-business-practices-2023",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <div className="container px-4 py-16 mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input placeholder="Search articles..." className="pl-10" />
          </div>
          <div className="flex gap-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="web-development">Web Development</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="productivity">Productivity</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="business">Business</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image src={post.imageUrl || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <CardContent className="p-5">
                <Badge className="mb-2 bg-purple-100 text-purple-800 hover:bg-purple-200">{post.category}</Badge>
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-xl font-bold mb-2 hover:text-purple-600 transition-colors">{post.title}</h2>
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
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" className="bg-purple-100 text-purple-800">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

