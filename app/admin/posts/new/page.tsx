"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Image,
  Menu,
  Save,
  LayoutDashboard,
  FileText,
  MessageSquare,
  Users,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RichTextEditor } from "@/components/admin/rich-text-editor"

export default function NewPostPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [postContent, setPostContent] = useState("")

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-white border-r w-64 flex-shrink-0 fixed inset-y-0 z-50 transition-transform duration-300 ease-in-out md:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center h-16 px-6 border-b">
            <Link href="/" className="flex items-center gap-2 font-semibold text-xl">
              <span className="h-8 w-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white">
                P
              </span>
              Harsh Blog
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-4">
            <nav className="px-4 space-y-1">
              <Link
                href="/admin"
                className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <LayoutDashboard className="h-5 w-5" />
                Dashboard
              </Link>
              <Link
                href="/admin/posts"
                className="flex items-center gap-3 px-3 py-2 text-purple-900 bg-purple-100 rounded-md"
              >
                <FileText className="h-5 w-5" />
                Posts
              </Link>
              <Link
                href="/admin/comments"
                className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <MessageSquare className="h-5 w-5" />
                Comments
              </Link>
              <Link
                href="/admin/users"
                className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <Users className="h-5 w-5" />
                Users
              </Link>
              <Link
                href="/admin/analytics"
                className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <BarChart3 className="h-5 w-5" />
                Analytics
              </Link>
              <Link
                href="/admin/settings"
                className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <Settings className="h-5 w-5" />
                Settings
              </Link>
            </nav>
          </div>
          <div className="p-4 border-t">
            <Button variant="outline" className="w-full justify-start text-gray-700">
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-64">
        {/* Header */}
        <header className="bg-white border-b h-16 flex items-center px-6 sticky top-0 z-10">
          <Button variant="ghost" size="icon" className="md:hidden mr-2" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
          <Link href="/admin/posts" className="flex items-center text-sm font-medium">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Posts
          </Link>
          <div className="ml-auto">
            <Button>
              <Save className="h-4 w-4 mr-2" />
              Save Post
            </Button>
          </div>
        </header>

        {/* Editor Content */}
        <main className="p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-1">Create New Post</h1>
            <p className="text-gray-500">Create and publish a new blog post</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white p-6 rounded-lg border">
                <div className="mb-4">
                  <Label htmlFor="title">Post Title</Label>
                  <Input id="title" placeholder="Enter post title" className="mt-1" />
                </div>

                <div className="mb-4">
                  <Label htmlFor="slug">Slug</Label>
                  <Input id="slug" placeholder="post-title" className="mt-1" />
                </div>

                <div>
                  <Label>Content</Label>
                  <Tabs defaultValue="editor" className="mt-1">
                    <TabsList className="mb-4">
                      <TabsTrigger value="editor">Visual Editor</TabsTrigger>
                      <TabsTrigger value="markdown">Markdown</TabsTrigger>
                    </TabsList>
                    <TabsContent value="editor">
                      <RichTextEditor value={postContent} onChange={setPostContent} />
                    </TabsContent>
                    <TabsContent value="markdown">
                      <Textarea
                        placeholder="Write your content in Markdown..."
                        className="min-h-[300px]"
                        value={postContent}
                        onChange={(e) => setPostContent(e.target.value)}
                      />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-medium mb-4">Post Settings</h3>

                <div className="mb-4">
                  <Label htmlFor="status">Status</Label>
                  <Select defaultValue="draft">
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="scheduled">Scheduled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="mb-4">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-development">Web Development</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="productivity">Productivity</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="mb-4">
                  <Label htmlFor="tags">Tags</Label>
                  <Input id="tags" placeholder="tag1, tag2, tag3" className="mt-1" />
                </div>

                <div>
                  <Label>Featured Image</Label>
                  <div className="mt-1 border-2 border-dashed rounded-lg p-6 text-center">
                    <Image className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-500 mb-2">Drag and drop an image here, or click to browse</p>
                    <Button variant="outline" size="sm">
                      Upload Image
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-medium mb-4">SEO Settings</h3>

                <div className="mb-4">
                  <Label htmlFor="meta-title">Meta Title</Label>
                  <Input id="meta-title" placeholder="Meta title" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="meta-description">Meta Description</Label>
                  <Textarea id="meta-description" placeholder="Meta description" className="mt-1" />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

