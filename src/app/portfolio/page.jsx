'use client';

import { useState } from 'react';
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

// Client component for filtering functionality
function PortfolioGrid() {
  // Mock portfolio data (in a real implementation, this would come from JSON files)
  const portfolioItems = [
    {
      id: 1,
      title: 'Modern Office Space',
      category: 'Commercial',
      excerpt: 'A contemporary office design focusing on productivity and employee well-being.',
      coverImage: '/images/office (1).jpg',
      slug: 'modern-office-space'
    },
    {
      id: 2,
      title: 'Luxury Home Interior',
      category: 'Residential',
      excerpt: 'Elegant interior design for a premium residential property.',
      coverImage: '/images/bedroom (1).jpg',
      slug: 'luxury-home-interior'
    },
    {
      id: 3,
      title: 'Restaurant Renovation',
      category: 'Commercial',
      excerpt: 'Complete renovation of a fine dining restaurant with custom furniture.',
      coverImage: '/images/dining (1).jpg',
      slug: 'restaurant-renovation'
    },
    {
      id: 4,
      title: 'Corporate Headquarters',
      category: 'Commercial',
      excerpt: 'Design and implementation of a corporate headquarters with modular workspaces.',
      coverImage: '/images/office (5).jpg',
      slug: 'corporate-headquarters'
    },
    {
      id: 5,
      title: 'Luxury Apartment',
      category: 'Residential',
      excerpt: 'Interior design for a high-end apartment with custom wooden elements.',
      coverImage: '/images/slider3.jpg',
      slug: 'luxury-apartment'
    },
    {
      id: 6,
      title: 'Boutique Hotel Lobby',
      category: 'Hospitality',
      excerpt: 'Elegant and welcoming lobby design for a boutique hotel.',
      coverImage: '/images/slider.jpg',
      slug: 'boutique-hotel-lobby'
    },
    {
      id: 7,
      title: 'Modern Kitchen Design',
      category: 'Residential',
      excerpt: 'Contemporary kitchen with custom cabinetry and premium finishes.',
      coverImage: '/images/kitchen.jpg',
      slug: 'modern-kitchen-design'
    },
    {
      id: 8,
      title: 'Tech Startup Office',
      category: 'Commercial',
      excerpt: 'Creative and collaborative workspace for a growing tech company.',
      coverImage: '/images/office (6).jpg',
      slug: 'tech-startup-office'
    },
    {
      id: 9,
      title: 'Cafe Interior',
      category: 'Hospitality',
      excerpt: 'Cozy and stylish cafe design with custom wooden furniture.',
      coverImage: '/images/slider4.jpg',
      slug: 'cafe-interior'
    }
  ];

  // Extract unique categories
  const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];
  
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Filter items based on active category
  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <>
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeCategory === category
                ? 'bg-accent text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            variants={fadeIn}
            className="group"
          >
            <Link href={`/portfolio/${item.slug}`}>
              <div className="relative h-80 rounded-lg overflow-hidden mb-4">
                <Image
                  src={item.coverImage}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>
              <h3 className="text-xl font-serif font-bold mb-1">{item.title}</h3>
              <p className="text-accent mb-2">{item.category}</p>
              <p className="text-gray-600">{item.excerpt}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

// Server component
export default function Portfolio() {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/slider2.jpg"
            alt="Our Portfolio"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative container h-full flex flex-col justify-center items-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">Our Portfolio</h1>
          <p className="text-xl text-white max-w-2xl text-center">
            Explore our latest projects and see how we transform spaces
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <PortfolioGrid />
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading">Client Testimonials</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our work.
            </p>
          </div>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image
                  src="/images/testimonials/client1.jpg"
                  alt="Client"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold">Rahul Sharma</h4>
                <p className="text-accent">Tech Innovations</p>
              </div>
            </div>
            <p className="text-lg italic text-gray-700">
              "Working with Woodstub was an exceptional experience from start to finish. Their team understood our vision perfectly and delivered a workspace that not only looks stunning but has significantly improved our team's productivity and morale. The attention to detail and quality of craftsmanship is evident in every aspect of the project."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg mb-8">
              Contact us today to discuss how we can transform your space.
            </p>
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-accent font-medium rounded-md hover:bg-gray-100 transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
