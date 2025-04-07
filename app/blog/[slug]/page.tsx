import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, Share2, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

// This would normally be fetched from a database
const post = {
  title: "Getting Started with Next.js and Tailwind CSS",
  content: `
    <p class="mb-4">Next.js is a powerful React framework that enables functionality such as server-side rendering and static site generation. Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without ever leaving your HTML.</p>
    
    <p class="mb-4">In this tutorial, we'll walk through setting up a new project with Next.js and Tailwind CSS, and explore some of the key features that make this combination so effective for modern web development.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Setting Up Your Project</h2>
    
    <p class="mb-4">To get started, you'll need to have Node.js installed on your machine. Then, you can create a new Next.js project with the following command:</p>
    
    <pre class="bg-gray-100 p-4 rounded-md my-4 overflow-x-auto"><code>npx create-next-app my-project</code></pre>
    
    <p class="mb-4">Next, you'll need to install Tailwind CSS and its dependencies:</p>
    
    <pre class="bg-gray-100 p-4 rounded-md my-4 overflow-x-auto"><code>npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p</code></pre>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Configuring Tailwind CSS</h2>
    
    <p class="mb-4">After installation, you'll need to configure Tailwind by updating the <code>tailwind.config.js</code> file:</p>
    
    <pre class="bg-gray-100 p-4 rounded-md my-4 overflow-x-auto"><code>module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}</code></pre>
    
    <p class="mb-4">Then, add the Tailwind directives to your CSS file:</p>
    
    <pre class="bg-gray-100 p-4 rounded-md my-4 overflow-x-auto"><code>@tailwind base;
@tailwind components;
@tailwind utilities;</code></pre>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Building Your First Component</h2>
    
    <p class="mb-4">Now you're ready to start building components using Tailwind CSS. Here's a simple example of a card component:</p>
    
    <pre class="bg-gray-100 p-4 rounded-md my-4 overflow-x-auto"><code>export function Card({ title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}</code></pre>
    
    <p class="mb-4">With Next.js and Tailwind CSS, you can quickly build beautiful, responsive interfaces without having to write custom CSS.</p>
  `,
  author: "John Doe",
  authorBio: "Frontend Developer with a passion for React and modern web technologies.",
  authorImage: "/placeholder.svg?height=100&width=100",
  date: "May 15, 2023",
  readTime: "5 min read",
  category: "Web Development",
  tags: ["Next.js", "Tailwind CSS", "React", "Web Development"],
  imageUrl: "/placeholder.svg?height=600&width=1200",
  relatedPosts: [
    {
      id: 1,
      title: "Building Responsive Layouts with CSS Grid",
      excerpt: "Learn how to create beautiful, responsive layouts using CSS Grid.",
      author: "Sarah Williams",
      date: "May 20, 2023",
      category: "Web Development",
      imageUrl: "/placeholder.svg?height=200&width=300",
      slug: "building-responsive-layouts-with-css-grid",
    },
    {
      id: 2,
      title: "10 Tips for Better Productivity",
      excerpt: "Discover how to maximize your productivity with these proven strategies.",
      author: "Jane Smith",
      date: "June 2, 2023",
      category: "Productivity",
      imageUrl: "/placeholder.svg?height=200&width=300",
      slug: "10-tips-for-better-productivity",
    },
    {
      id: 3,
      title: "The Future of Artificial Intelligence",
      excerpt: "Exploring the latest advancements in AI and what they mean for humanity.",
      author: "Michael Johnson",
      date: "May 28, 2023",
      category: "Technology",
      imageUrl: "/placeholder.svg?height=200&width=300",
      slug: "future-of-artificial-intelligence",
    },
  ],
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <div className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-purple-600">
              Home
            </Link>{" "}
            {" / "}
            <Link href="/blog" className="hover:text-purple-600">
              Blog
            </Link>{" "}
            {" / "}
            <span className="text-gray-700">{params.slug}</span>
          </div>

          {/* Post Header */}
          <div className="mb-8">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">{post.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
            <Image src={post.imageUrl || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>

          {/* Post Content */}
          <div className="prose prose-purple max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* Tags */}
          <div className="mb-8">
            <h3 className="font-semibold mb-2">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="hover:bg-gray-100">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-semibold">Share:</span>
            <Button variant="outline" size="sm" className="rounded-full">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>

          {/* Author Bio */}
          <Card className="mb-12">
            <CardContent className="flex flex-col md:flex-row gap-4 p-6">
              <Avatar className="w-16 h-16">
                <AvatarImage src={post.authorImage} alt={post.author} />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-bold mb-2">About {post.author}</h3>
                <p className="text-gray-600 mb-4">{post.authorBio}</p>
                <Button variant="outline" size="sm">
                  View All Posts
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Related Posts */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {post.relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-40">
                    <Image
                      src={relatedPost.imageUrl || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <Badge className="mb-2 bg-purple-100 text-purple-800 hover:bg-purple-200">
                      {relatedPost.category}
                    </Badge>
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <h3 className="font-bold mb-2 hover:text-purple-600 transition-colors">{relatedPost.title}</h3>
                    </Link>
                    <div className="flex items-center text-xs text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{relatedPost.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

