"use client"

import Link from "next/link"
import { Edit, Eye, MoreHorizontal, Trash } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Mock data - in a real app, this would come from your database
const posts = [
  {
    id: 1,
    title: "Getting Started with Next.js and Tailwind CSS",
    status: "Published",
    date: "May 15, 2023",
    views: 1245,
    slug: "getting-started-with-nextjs-and-tailwind",
  },
  {
    id: 2,
    title: "The Future of Artificial Intelligence",
    status: "Published",
    date: "May 28, 2023",
    views: 982,
    slug: "future-of-artificial-intelligence",
  },
  {
    id: 3,
    title: "Building Responsive Layouts with CSS Grid",
    status: "Published",
    date: "May 20, 2023",
    views: 876,
    slug: "building-responsive-layouts-with-css-grid",
  },
  {
    id: 4,
    title: "10 Tips for Better Productivity",
    status: "Draft",
    date: "June 2, 2023",
    views: 0,
    slug: "10-tips-for-better-productivity",
  },
  {
    id: 5,
    title: "The Psychology of Color in Marketing",
    status: "Draft",
    date: "May 10, 2023",
    views: 0,
    slug: "psychology-of-color-in-marketing",
  },
]

export function RecentPostsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3 px-4 font-medium">Title</th>
            <th className="text-left py-3 px-4 font-medium">Status</th>
            <th className="text-left py-3 px-4 font-medium">Date</th>
            <th className="text-left py-3 px-4 font-medium">Views</th>
            <th className="text-right py-3 px-4 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} className="border-b hover:bg-gray-50">
              <td className="py-3 px-4">
                <Link href={`/admin/posts/${post.id}`} className="font-medium hover:text-purple-600">
                  {post.title}
                </Link>
              </td>
              <td className="py-3 px-4">
                <Badge
                  className={
                    post.status === "Published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                  }
                >
                  {post.status}
                </Badge>
              </td>
              <td className="py-3 px-4 text-gray-500">{post.date}</td>
              <td className="py-3 px-4 text-gray-500">{post.views.toLocaleString()}</td>
              <td className="py-3 px-4 text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">
                      <Trash className="h-4 w-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

