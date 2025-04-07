import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeaturedPost } from "@/components/featured-post";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { AnimatedHeader } from "@/components/animated-header";
import { RecentPosts } from "@/components/recent-posts";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      {/* Hero Section */}
      <section className="container px-4 py-24 md:py-32 mx-auto">
        <AnimatedHeader />
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mb-6">
            Harsh Blog
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Discover stories, ideas, and expertise from writers on any topic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
            >
              Start Reading
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/admin">Admin Dashboard</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="container px-4 py-16 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Featured Post</h2>
          <Button variant="ghost" className="gap-2">
            View all <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <FeaturedPost
          title="Getting Started with Next.js and Tailwind CSS"
          excerpt="Learn how to build modern web applications with Next.js and style them beautifully with Tailwind CSS."
          author="John Doe"
          date="May 15, 2023"
          category="Web Development"
          imageUrl="/placeholder.svg?height=600&width=800"
          slug="getting-started-with-nextjs-and-tailwind"
        />
      </section>

      {/* Recent Posts */}
      <section className="container px-4 py-16 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Recent Posts</h2>
          <Button variant="ghost" className="gap-2" asChild>
            <Link href="/blog">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <RecentPosts />
      </section>

      {/* Categories */}
      <section className="container px-4 py-16 mx-auto">
        <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Web Development",
            "Design",
            "Technology",
            "Productivity",
            "Marketing",
            "Business",
            "Lifestyle",
            "Health",
          ].map((category) => (
            <Link
              key={category}
              href={`/category/${category.toLowerCase().replace(" ", "-")}`}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center group"
            >
              <Tag className="h-8 w-8 mx-auto mb-3 text-purple-500 group-hover:text-pink-500 transition-colors" />
              <p className="font-medium">{category}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container px-4 py-16 mx-auto">
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Subscribe to our newsletter
            </h2>
            <p className="text-gray-700 mb-6">
              Get the latest posts delivered right to your inbox.
            </p>
            <NewsletterSignup />
          </div>
        </div>
      </section>
    </div>
  );
}
