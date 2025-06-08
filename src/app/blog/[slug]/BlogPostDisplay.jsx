'use client';

import Layout from '../../../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function BlogPostDisplay({ post }) {
  if (!post) {
    // This case should ideally be handled by the parent server component returning notFound()
    // but as a fallback for direct client-side navigation issues (less likely with this structure):
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="mb-8">The blog post you are looking for does not exist.</p>
          <Link href="/blog" className="text-accent hover:underline">
            Back to Blog
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <motion.article 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="container mx-auto px-4 py-12 max-w-4xl"
      >
        {/* Cover Image */}
        {post.coverImage && (
          <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image 
              src={post.coverImage} 
              alt={post.title} 
              fill 
              priority
              className="object-cover"
            />
          </div>
        )}

        {/* Post Header */}
        <header className="mb-8 text-center">
          <div className="mb-4">
            <Link href={`/blog/category/${post.category.toLowerCase()}`} className="text-accent text-sm font-medium uppercase tracking-wider hover:underline">
              {post.category}
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-800">{post.title}</h1>
          <div className="text-gray-500 text-sm">
            <span>By {post.author}</span> | <span>{post.date}</span>
          </div>
        </header>

        {/* Post Content */}
        <div 
          className="prose prose-lg max-w-none prose-accent"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <Link 
                  key={tag} 
                  href={`/blog/tag/${tag.toLowerCase()}`} 
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-accent hover:text-white transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Author Bio */}
        {post.authorBio && (
          <div className="mt-12 p-6 bg-gray-50 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">About the Author</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{post.authorBio}</p>
            {/* You could add a link to an author page here if available */}
          </div>
        )}

        {/* Navigation Links */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center">
          <Link href="/blog" className="text-accent hover:underline">
            &larr; Back to Blog
          </Link>
          {/* Add next/previous post links if available */}
        </div>
      </motion.article>
    </Layout>
  );
}
