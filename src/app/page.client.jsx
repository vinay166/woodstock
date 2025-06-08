'use client';

import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

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
      staggerChildren: 0.2
    }
  }
};

export default function HomeClient() {
  // State for hero slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClient, setIsClient] = useState(false);
  
  // Set isClient to true when component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Hero slider data
  const heroSlides = [
    {
      id: 1,
      title: "LUXURY INTERIORS",
      subtitle: "Crafting Exceptional Spaces",
      description: "Transform your space with our premium interior design and material solutions",
      image: "/images/hero/slide1.svg",
      cta: "Explore Our Services",
      link: "/services"
    },
    {
      id: 2,
      title: "PREMIUM MATERIALS",
      subtitle: "Quality That Speaks",
      description: "Experience the finest wooden flooring and modular furniture solutions",
      image: "/images/hero/slide2.svg",
      cta: "View Our Portfolio",
      link: "/portfolio"
    },
    {
      id: 3,
      title: "TURNKEY SOLUTIONS",
      subtitle: "From Concept to Creation",
      description: "End-to-end interior design services tailored to your unique vision",
      image: "/images/hero/slide3.svg",
      cta: "Start Your Project",
      link: "/contact"
    }
  ];

  // Auto-advance slider
  useEffect(() => {
    if (!isClient) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length, isClient]);

  // Property type categories
  const propertyTypes = [
    { name: "1BHK", image: "/images/properties/residential.svg", link: "/services#1bhk" },
    { name: "2BHK", image: "/images/properties/residential.svg", link: "/services#2bhk" },
    { name: "3BHK", image: "/images/properties/residential.svg", link: "/services#3bhk" },
    { name: "4BHK", image: "/images/properties/residential.svg", link: "/services#4bhk" },
    { name: "Villas", image: "/images/properties/commercial.svg", link: "/services#villas" },
    { name: "Penthouses", image: "/images/properties/industrial.svg", link: "/services#penthouses" }
  ];

  // Services data
  const services = [
    {
      id: 1,
      title: 'Interior Design',
      description: 'Premium interior design solutions for your home or office with the finest materials.',
      icon: '/images/icons/flooring.svg',
      slug: 'interior-design',
      image: '/images/services/interior-design.svg'
    },
    {
      id: 2,
      title: 'Renovation',
      description: 'High-quality renovation services for residential and commercial spaces.',
      icon: '/images/icons/carpet.svg',
      slug: 'renovation',
      image: '/images/services/renovation.svg'
    },
    {
      id: 3,
      title: 'Consultation',
      description: 'Expert consultation services to help you plan your perfect space.',
      icon: '/images/icons/furniture.svg',
      slug: 'consultation',
      image: '/images/services/consultation.svg'
    }
  ];

  // Design styles
  const designStyles = [
    { name: "Modern", image: "/images/styles/modern.jpg", link: "/portfolio?style=modern" },
    { name: "Traditional", image: "/images/styles/traditional.jpg", link: "/portfolio?style=traditional" },
    { name: "Contemporary", image: "/images/styles/contemporary.jpg", link: "/portfolio?style=contemporary" },
    { name: "Minimalist", image: "/images/styles/minimalist.jpg", link: "/portfolio?style=minimalist" }
  ];

  // Process steps
  const processSteps = [
    { number: "01", title: "Consultation", description: "We begin with a detailed consultation to understand your vision, requirements, and budget." },
    { number: "02", title: "Design", description: "Our expert designers create custom plans and 3D visualizations tailored to your space." },
    { number: "03", title: "Material Selection", description: "Choose from our premium selection of materials, finishes, and accessories." },
    { number: "04", title: "Execution", description: "Our skilled craftsmen bring the designs to life with precision and attention to detail." },
    { number: "05", title: "Quality Check", description: "Rigorous quality checks ensure every aspect meets our high standards." },
    { number: "06", title: "Handover", description: "We deliver your perfectly finished space with comprehensive warranty support." }
  ];

  // Portfolio items
  const portfolioItems = [
    {
      id: 1,
      title: 'Luxury Apartment',
      category: 'Residential',
      image: '/images/portfolio/project1.svg',
      slug: 'luxury-apartment'
    },
    {
      id: 2,
      title: 'Modern Office',
      category: 'Commercial',
      image: '/images/portfolio/project2.svg',
      slug: 'modern-office'
    },
    {
      id: 3,
      title: 'Villa Renovation',
      category: 'Residential',
      image: '/images/portfolio/project3.svg',
      slug: 'villa-renovation'
    }
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      company: 'Tech Solutions',
      quote: 'Woodstock transformed our office space into a modern, functional environment that our employees love. The attention to detail and quality of work was exceptional.',
      image: '/images/testimonials/client1.svg',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      company: 'Interior Designer',
      quote: 'We couldn\'t be happier with our home renovation. The team at Woodstock understood our vision and delivered beyond our expectations.',
      image: '/images/testimonials/client2.svg',
      rating: 5
    },
    {
      id: 3,
      name: 'Michael Brown',
      company: 'Property Developer',
      quote: 'The custom furniture and interior design for our properties has received countless compliments from our clients. Woodstock\'s work has definitely contributed to our success.',
      image: '/images/testimonials/client3.svg',
      rating: 5
    }
  ];

  // Partner brands
  const partners = [
    { name: "Brand 1", logo: "/images/partners/brand1.svg" },
    { name: "Brand 2", logo: "/images/partners/brand2.svg" },
    { name: "Brand 3", logo: "/images/partners/brand3.svg" },
    { name: "Brand 4", logo: "/images/partners/brand4.svg" }
  ];

  // Don't render anything on the server
  if (!isClient) {
    return <div className="min-h-screen bg-gray-50"></div>;
  }

  return (
    <Layout>
      {/* Hero Slider Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
          </motion.div>
        </AnimatePresence>
        
        <div className="relative container h-full flex flex-col justify-center items-start px-6 md:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl text-white"
            >
              <span className="inline-block px-4 py-1 border border-accent text-accent text-sm font-medium mb-4 tracking-wider">
                {heroSlides[currentSlide].subtitle}
              </span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                {heroSlides[currentSlide].description}
              </p>
              <Link 
                href={heroSlides[currentSlide].link} 
                className="btn-primary text-lg px-8 py-4"
              >
                {heroSlides[currentSlide].cta}
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Slider Controls */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3 z-10">
          {heroSlides.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-accent w-6' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Property Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <span className="text-accent font-medium tracking-wider uppercase">Find Your Space</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">Property Types</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
            <p className="text-lg max-w-3xl mx-auto mt-6 text-gray-600">
              Explore our range of property types and find the perfect match for your needs and lifestyle.
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {propertyTypes.map((type, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="group"
              >
                <Link href={type.link} className="block">
                  <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={type.image}
                      alt={type.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                      <h3 className="text-xl font-bold text-white">{type.name}</h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Teaser Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="order-2 lg:order-1"
            >
              <span className="text-accent font-medium tracking-wider uppercase">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-6">Crafting Exceptional Spaces Since 2018</h2>
              <div className="w-24 h-1 bg-accent mb-8"></div>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                Woodstock specializes in providing end-to-end interior solutions for homes & offices. 
                With over 5 years of experience, we have built up a strong design expertise backed by 
                state-of-the-art manufacturing facilities and a team of skilled craftsmen.
              </p>
              <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                We reach directly to the end customer, cutting out all middlemen to provide the best value 
                for money without compromising on quality or design excellence.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Link href="/about" className="btn-primary px-8 py-3 text-lg">
                  Our Story
                </Link>
                <Link href="/contact" className="text-accent hover:text-accent/80 font-medium flex items-center gap-2 group">
                  Contact Us
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/images/about-bg.svg"
                    alt="About Woodstock"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-accent text-white p-6 rounded-lg shadow-xl hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold">5+</div>
                    <div className="text-sm">Years of<br />Excellence</div>
                  </div>
                </div>
                <div className="absolute -top-8 -right-8 bg-white p-6 rounded-lg shadow-xl hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold text-accent">500+</div>
                    <div className="text-sm">Projects<br />Completed</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rest of the sections... */}
      {/* Featured Services, Portfolio, Testimonials, etc. */}
    </Layout>
  );
}
