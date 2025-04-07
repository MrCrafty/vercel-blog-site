"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Clock, XCircle } from "lucide-react"

// Mock data - in a real app, this would come from your database
const comments = [
  {
    id: 1,
    author: "Jane Smith",
    authorImage: "/placeholder.svg?height=40&width=40",
    content:
      "This article was incredibly helpful! I've been struggling with CSS Grid for a while now, and your explanations made it click for me.",
    post: "Building Responsive Layouts with CSS Grid",
    date: "2 hours ago",
    status: "pending",
  },
  {
    id: 2,
    author: "Michael Johnson",
    authorImage: "/placeholder.svg?height=40&width=40",
    content: "I disagree with some points in this article. AI is advancing much faster than you've indicated here.",
    post: "The Future of Artificial Intelligence",
    date: "5 hours ago",
    status: "pending",
  },
  {
    id: 3,
    author: "Sarah Williams",
    authorImage: "/placeholder.svg?height=40&width=40",
    content:
      "Thank you for this comprehensive guide! I was able to set up my Next.js project with Tailwind in minutes following your instructions.",
    post: "Getting Started with Next.js and Tailwind CSS",
    date: "1 day ago",
    status: "approved",
  },
  {
    id: 4,
    author: "David Wilson",
    authorImage: "/placeholder.svg?height=40&width=40",
    content: "This is spam content that should be rejected.",
    post: "10 Tips for Better Productivity",
    date: "2 days ago",
    status: "rejected",
  },
]

export function CommentsActivity() {
  const [commentsList, setCommentsList] = useState(comments)

  const handleApprove = (id: number) => {
    setCommentsList(commentsList.map((comment) => (comment.id === id ? { ...comment, status: "approved" } : comment)))
  }

  const handleReject = (id: number) => {
    setCommentsList(commentsList.map((comment) => (comment.id === id ? { ...comment, status: "rejected" } : comment)))
  }

  return (
    <div className="space-y-4">
      {commentsList.map((comment) => (
        <div key={comment.id} className="flex gap-4 p-4 border rounded-lg">
          <Avatar>
            <AvatarImage src={comment.authorImage} alt={comment.author} />
            <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{comment.author}</p>
                <p className="text-sm text-gray-500">
                  On: <span className="font-medium">{comment.post}</span>
                </p>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-3 w-3 mr-1" />
                {comment.date}
              </div>
            </div>
            <p className="mt-2 text-gray-700">{comment.content}</p>
            <div className="mt-3 flex items-center justify-between">
              <div>
                {comment.status === "pending" && (
                  <span className="inline-flex items-center text-xs font-medium text-yellow-800 bg-yellow-100 px-2 py-1 rounded">
                    <Clock className="h-3 w-3 mr-1" />
                    Pending Review
                  </span>
                )}
                {comment.status === "approved" && (
                  <span className="inline-flex items-center text-xs font-medium text-green-800 bg-green-100 px-2 py-1 rounded">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    Approved
                  </span>
                )}
                {comment.status === "rejected" && (
                  <span className="inline-flex items-center text-xs font-medium text-red-800 bg-red-100 px-2 py-1 rounded">
                    <XCircle className="h-3 w-3 mr-1" />
                    Rejected
                  </span>
                )}
              </div>
              {comment.status === "pending" && (
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-green-600 border-green-200 hover:bg-green-50 hover:text-green-700"
                    onClick={() => handleApprove(comment.id)}
                  >
                    Approve
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                    onClick={() => handleReject(comment.id)}
                  >
                    Reject
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

