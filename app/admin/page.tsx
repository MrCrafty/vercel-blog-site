"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BarChart3,
  FileText,
  Home,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquare,
  PlusCircle,
  Settings,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AdminStats } from "@/components/admin/admin-stats";
import { RecentPostsTable } from "@/components/admin/recent-posts-table";
import { PopularPostsChart } from "@/components/admin/popular-posts-chart";
import { CommentsActivity } from "@/components/admin/comments-activity";

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-white border-r w-64 flex-shrink-0 fixed inset-y-0 z-50 transition-transform duration-300 ease-in-out md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center h-16 px-6 border-b">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold text-xl"
            >
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
                className="flex items-center gap-3 px-3 py-2 text-purple-900 bg-purple-100 rounded-md"
              >
                <LayoutDashboard className="h-5 w-5" />
                Dashboard
              </Link>
              <Link
                href="/admin/posts"
                className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
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
            <Button
              variant="outline"
              className="w-full justify-start text-gray-700"
            >
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
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden mr-2"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center ml-auto gap-4">
            <Button asChild>
              <Link href="/admin/posts/new">
                <PlusCircle className="h-4 w-4 mr-2" />
                New Post
              </Link>
            </Button>
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-medium"
            >
              <Home className="h-4 w-4" />
              View Site
            </Link>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-1">Dashboard</h1>
            <p className="text-gray-500">Welcome back, Admin!</p>
          </div>

          <AdminStats />

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Recent Posts</CardTitle>
                <CardDescription>Your latest blog posts</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentPostsTable />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Popular Posts</CardTitle>
                <CardDescription>Top performing content</CardDescription>
              </CardHeader>
              <CardContent>
                <PopularPostsChart />
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Comments</CardTitle>
                <CardDescription>Latest activity on your blog</CardDescription>
              </CardHeader>
              <CardContent>
                <CommentsActivity />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
