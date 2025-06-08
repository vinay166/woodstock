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
  // State for client-side rendering check
  const [mounted, setMounted] = useState(false);
  
  // State for hero slider
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Set mounted to true when component mounts
  useEffect(() => {
    setMounted(true);
    // Reset current slide on mount to ensure consistency
    setCurrentSlide(0);
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
    if (!mounted) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length, mounted]);

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
      title: "Interior Design", 
      icon: "/images/services/interior-design.svg",
      description: "Comprehensive interior design solutions tailored to your style and needs." 
    },
    { 
      title: "Modular Furniture", 
      icon: "/images/services/furniture.svg",
      description: "Custom modular furniture designed for functionality and aesthetics." 
    },
    { 
      title: "Wooden Flooring", 
      icon: "/images/services/flooring.svg",
      description: "Premium wooden flooring options for a warm and elegant feel." 
    },
    { 
      title: "Renovation", 
      icon: "/images/services/renovation.svg",
      description: "Complete renovation services to transform your existing space." 
    }
  ];

  // Portfolio projects
  const portfolioProjects = [
    { title: "Modern Apartment", category: "Residential", image: "/images/portfolio/project1.svg" },
    { title: "Corporate Office", category: "Commercial", image: "/images/portfolio/project2.svg" },
    { title: "Luxury Villa", category: "Residential", image: "/images/portfolio/project3.svg" },
    { title: "Restaurant Design", category: "Commercial", image: "/images/portfolio/project4.svg" }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Homeowner",
      image: "/images/testimonials/person1.svg",
      quote: "Woodstock transformed our house into a dream home. Their attention to detail and quality of work exceeded our expectations."
    },
    {
      name: "Michael Chen",
      position: "Business Owner",
      image: "/images/testimonials/person2.svg",
      quote: "The team at Woodstock delivered our office renovation on time and within budget. The space looks incredible and our employees love it."
    },
    {
      name: "Priya Sharma",
      position: "Interior Designer",
      image: "/images/testimonials/person3.svg",
      quote: "As a fellow designer, I appreciate Woodstock's commitment to quality and innovative design solutions. They're my go-to recommendation."
    }
  ];

  // Partners data
  const partners = [
    { name: "Luxury Homes", logo: "/images/partners/partner1.svg" },
    { name: "Modern Spaces", logo: "/images/partners/partner2.svg" },
    { name: "Elite Interiors", logo: "/images/partners/partner3.svg" },
    { name: "Premium Materials", logo: "/images/partners/partner4.svg" },
    { name: "Design Collective", logo: "/images/partners/partner5.svg" }
  ];

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

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <span className="text-accent font-medium tracking-wider uppercase">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
            <p className="text-lg max-w-3xl mx-auto mt-6 text-gray-600">
              Comprehensive interior design and construction services tailored to your needs
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Image src={service.icon} alt={service.title} width={40} height={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <span className="text-accent font-medium tracking-wider uppercase">Our Work</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
            <p className="text-lg max-w-3xl mx-auto mt-6 text-gray-600">
              Explore our portfolio of completed projects showcasing our expertise and design philosophy
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="group"
              >
                <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-accent text-sm font-medium block">{project.category}</span>
                    <h3 className="text-2xl font-bold text-white mt-1">{project.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <Link href="/portfolio" className="btn-secondary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser Section */}
      <section className="py-24 bg-cover bg-center relative" style={{ backgroundImage: 'url(/images/about-bg.svg)' }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 mb-12 lg:mb-0 text-white"
            >
              <span className="text-accent font-medium tracking-wider uppercase">About Us</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-6 leading-tight">
                Crafting Exceptional Spaces Since 2010
              </h2>
              <p className="text-lg mb-8 text-gray-200">
                Woodstock is a premium interior design and construction company dedicated to creating 
                beautiful, functional spaces that reflect our clients' unique personalities and needs. 
                With over a decade of experience, our team of skilled professionals brings creativity, 
                expertise, and attention to detail to every project.
              </p>
              <Link href="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-2/5"
            >
              <div className="bg-white p-8 rounded-lg shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Our Expertise</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="font-bold">Premium Design</h4>
                      <p className="text-gray-600">Innovative designs that blend aesthetics with functionality</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="font-bold">Quality Materials</h4>
                      <p className="text-gray-600">Only the finest materials sourced from trusted suppliers</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="font-bold">Expert Craftsmanship</h4>
                      <p className="text-gray-600">Skilled professionals with years of industry experience</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <span className="text-accent font-medium tracking-wider uppercase">Client Feedback</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">Testimonials</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
            <p className="text-lg max-w-3xl mx-auto mt-6 text-gray-600">
              Hear what our clients have to say about their experience working with Woodstock
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-gray-50 p-8 rounded-lg shadow-lg relative"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="text-center pt-6">
                  <svg className="w-10 h-10 text-accent/20 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-accent text-sm">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <span className="text-accent font-medium tracking-wider uppercase">Our Partners</span>
            <h2 className="text-3xl font-serif font-bold mt-2">Trusted by Industry Leaders</h2>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center items-center gap-12"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Transform Your Space?</h2>
            <p className="text-xl mb-8 text-white/80">
              Contact us today to schedule a consultation and take the first step towards your dream interior
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="btn-white">
                Get in Touch
              </Link>
              <Link href="/portfolio" className="btn-outline-white">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
