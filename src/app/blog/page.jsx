'use client';

import Layout from '../../components/Layout';
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Blog() {
  // Mock blog posts data (in a real implementation, this would come from Markdown files)
  const blogPosts = [
    {
      id: 1,
      title: 'Top Interior Design Trends for 2023',
      excerpt: 'Discover the latest interior design trends that are shaping homes and offices in 2023, from sustainable materials to bold color choices.',
      date: 'June 1, 2023',
      author: 'Priya Sharma',
      category: 'Design Trends',
      coverImage: '/images/slider.jpg',
      slug: 'interior-design-trends-2023'
    },
    {
      id: 2,
      title: 'How to Choose the Perfect Wood Flooring',
      excerpt: 'A comprehensive guide to selecting the right wood flooring for your space, considering durability, aesthetics, and maintenance requirements.',
      date: 'May 15, 2023',
      author: 'Rahul Verma',
      category: 'Guides',
      coverImage: '/images/slider3.jpg',
      slug: 'choose-perfect-wood-flooring'
    },
    {
      id: 3,
      title: 'Maximizing Small Spaces: Design Tips',
      excerpt: 'Creative solutions and design strategies to make the most of small living spaces without compromising on style or functionality.',
      date: 'April 28, 2023',
      author: 'Neha Gupta',
      category: 'Tips & Tricks',
      coverImage: '/images/bedroom (1).jpg',
      slug: 'maximizing-small-spaces'
    },
    {
      id: 4,
      title: 'The Psychology of Color in Interior Design',
      excerpt: 'Understanding how different colors affect mood and perception, and how to use this knowledge to create harmonious interior spaces.',
      date: 'April 10, 2023',
      author: 'Vikram Mehta',
      category: 'Design Theory',
      coverImage: '/images/living.jpg',
      slug: 'psychology-color-interior-design'
    },
    {
      id: 5,
      title: 'Sustainable Materials in Modern Interiors',
      excerpt: 'Exploring eco-friendly and sustainable materials that are both beautiful and responsible choices for contemporary interior design.',
      date: 'March 22, 2023',
      author: 'Priya Sharma',
      category: 'Sustainability',
      coverImage: '/images/office (5).jpg',
      slug: 'sustainable-materials-modern-interiors'
    },
    {
      id: 6,
      title: 'Creating the Perfect Home Office',
      excerpt: 'Essential tips for designing a productive and comfortable home office space that enhances focus and creativity.',
      date: 'March 5, 2023',
      author: 'Rahul Verma',
      category: 'Workspace Design',
      coverImage: '/images/office (1).jpg',
      slug: 'creating-perfect-home-office'
    }
  ];

  // Featured post is the first one
  const featuredPost = blogPosts[0];
  // Recent posts are all except the featured one
  const recentPosts = blogPosts.slice(1);

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/slider4.jpg"
            alt="Our Blog"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative container h-full flex flex-col justify-center items-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">Our Blog</h1>
          <p className="text-xl text-white max-w-2xl text-center">
            Insights, tips, and inspiration for your interior design journey
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="heading">Featured Article</h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8"
          >
            <div className="relative h-80 lg:h-full rounded-lg overflow-hidden">
              <Image
                src={featuredPost.coverImage}
                alt={featuredPost.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <span className="text-accent">{featuredPost.category}</span>
                <span className="mx-2">•</span>
                <span className="text-gray-600">{featuredPost.date}</span>
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4">{featuredPost.title}</h3>
              <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                <span>By {featuredPost.author}</span>
              </div>
              <Link 
                href={`/blog/${featuredPost.slug}`} 
                className="btn self-start"
              >
                Read More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="heading">Recent Articles</h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
          >
            {recentPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={fadeIn}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-60">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-accent text-sm">{post.category}</span>
                      <span className="mx-2 text-sm">•</span>
                      <span className="text-gray-600 text-sm">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-300 mr-2"></div>
                      <span className="text-sm">By {post.author}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="heading">Categories</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {['Design Trends', 'Guides', 'Tips & Tricks', 'Design Theory', 'Sustainability', 'Workspace Design'].map((category) => (
              <Link 
                key={category} 
                href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-6 py-3 bg-gray-100 hover:bg-accent hover:text-white rounded-full transition-colors duration-300"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg mb-8">
              Stay updated with our latest articles, design tips, and exclusive offers.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none text-gray-800"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-accent font-medium rounded-md hover:bg-gray-100 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
