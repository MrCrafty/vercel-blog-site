"use client"

import { motion } from "framer-motion"
import { Eye, MessageSquare, ThumbsUp, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AdminStats() {
  const stats = [
    {
      title: "Total Views",
      value: "24.5K",
      change: "+12%",
      icon: Eye,
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Total Posts",
      value: "42",
      change: "+3",
      icon: FileText,
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Comments",
      value: "328",
      change: "+18%",
      icon: MessageSquare,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Engagement",
      value: "87%",
      change: "+5%",
      icon: ThumbsUp,
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                  <div className="flex items-baseline mt-1">
                    <p className="text-2xl font-semibold">{stat.value}</p>
                    <p className={`ml-2 text-sm ${stat.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                      {stat.change}
                    </p>
                  </div>
                </div>
                <div className={`p-2 rounded-full bg-gradient-to-r ${stat.color}`}>
                  <stat.icon className="h-5 w-5 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

