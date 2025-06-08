'use client';

import { useParams } from 'next/navigation';
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

// Mock portfolio projects data (in a real implementation, this would come from a CMS or database)
const portfolioProjects = [
  {
    id: 1,
    slug: 'luxury-villa-design',
    title: 'Luxury Villa Design',
    category: 'Interior Design',
    description: 'A complete interior design project for a luxury villa in Gurgaon, featuring custom furniture, premium materials, and smart home integration.',
    client: 'Private Residence',
    location: 'Gurgaon, Haryana',
    year: '2023',
    services: ['Interior Design', 'Custom Furniture', 'Lighting Design', 'Smart Home Integration'],
    challenge: 'The client wanted a luxurious yet comfortable living space that incorporated modern technology while maintaining a warm, inviting atmosphere.',
    solution: 'We created a design that balanced luxury materials with comfortable furnishings, integrating smart home features seamlessly into the aesthetic.',
    testimonial: {
      quote: 'Woodstub transformed our house into a dream home. Their attention to detail and understanding of our needs was exceptional.',
      author: 'Raj Mehta',
      position: 'Homeowner'
    },
    coverImage: '/images/portfolio/luxury-villa-1.jpg',
    gallery: [
      '/images/portfolio/luxury-villa-2.jpg',
      '/images/portfolio/luxury-villa-3.jpg',
      '/images/portfolio/luxury-villa-4.jpg',
      '/images/portfolio/luxury-villa-5.jpg',
    ],
    nextProject: 'corporate-office-design',
    prevProject: 'boutique-hotel-renovation'
  },
  {
    id: 2,
    slug: 'corporate-office-design',
    title: 'Corporate Office Design',
    category: 'Commercial',
    description: 'A modern office space designed for a tech company in Bangalore, focusing on collaborative workspaces, employee comfort, and brand identity.',
    client: 'TechSphere Solutions',
    location: 'Bangalore, Karnataka',
    year: '2022',
    services: ['Space Planning', 'Interior Design', 'Furniture Selection', 'Branding Integration'],
    challenge: 'Creating a workspace that promotes collaboration while providing quiet areas for focused work, all while reflecting the company\'s innovative brand identity.',
    solution: 'We designed an open floor plan with strategic acoustic treatments, flexible meeting spaces, and quiet pods, incorporating brand colors and values throughout.',
    testimonial: {
      quote: 'Our team productivity has increased significantly since moving into our new office. Woodstub understood exactly what we needed.',
      author: 'Priya Sharma',
      position: 'CEO, TechSphere Solutions'
    },
    coverImage: '/images/portfolio/office-1.jpg',
    gallery: [
      '/images/portfolio/office-2.jpg',
      '/images/portfolio/office-3.jpg',
      '/images/portfolio/office-4.jpg',
      '/images/portfolio/office-5.jpg',
    ],
    nextProject: 'boutique-hotel-renovation',
    prevProject: 'luxury-villa-design'
  },
  {
    id: 3,
    slug: 'boutique-hotel-renovation',
    title: 'Boutique Hotel Renovation',
    category: 'Hospitality',
    description: 'Complete renovation of a heritage property into a luxury boutique hotel in Jaipur, preserving historical elements while adding modern comforts.',
    client: 'Heritage Stays Ltd.',
    location: 'Jaipur, Rajasthan',
    year: '2022',
    services: ['Renovation', 'Interior Design', 'Custom Furniture', 'Lighting Design'],
    challenge: 'Balancing the preservation of historical architectural elements with the need for modern amenities and comfort expected in a luxury hotel.',
    solution: 'We carefully restored original features while integrating modern systems behind the scenes, creating a seamless blend of heritage charm and contemporary luxury.',
    testimonial: {
      quote: 'Woodstub managed to preserve the soul of our heritage property while transforming it into a world-class hotel. Our guests are consistently amazed.',
      author: 'Vikram Singh',
      position: 'Director, Heritage Stays Ltd.'
    },
    coverImage: '/images/portfolio/hotel-1.jpg',
    gallery: [
      '/images/portfolio/hotel-2.jpg',
      '/images/portfolio/hotel-3.jpg',
      '/images/portfolio/hotel-4.jpg',
      '/images/portfolio/hotel-5.jpg',
    ],
    nextProject: 'luxury-villa-design',
    prevProject: 'corporate-office-design'
  }
];

export default function PortfolioDetail() {
  const params = useParams();
  const { slug } = params;
  
  // Find the current project based on the slug
  const project = portfolioProjects.find(p => p.slug === slug) || portfolioProjects[0];
  
  // Find related projects (excluding current)
  const relatedProjects = portfolioProjects
    .filter(p => p.id !== project.id)
    .slice(0, 2);
  
  // Find next and previous projects
  const nextProject = portfolioProjects.find(p => p.slug === project.nextProject);
  const prevProject = portfolioProjects.find(p => p.slug === project.prevProject);
  
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative h-[50vh] md:h-[70vh]">
        <div className="absolute inset-0">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative container h-full flex flex-col justify-center items-center text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">{project.title}</h1>
            <p className="text-xl text-white max-w-2xl">{project.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div 
              className="lg:col-span-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="heading">Project Overview</h2>
              <p className="text-lg mb-8">
                {project.description}
              </p>
              
              <div className="mb-12">
                <h3 className="text-2xl font-serif font-bold mb-4">The Challenge</h3>
                <p className="text-lg mb-6">{project.challenge}</p>
                
                <h3 className="text-2xl font-serif font-bold mb-4">Our Solution</h3>
                <p className="text-lg">{project.solution}</p>
              </div>
              
              {/* Testimonial */}
              <div className="bg-gray-50 p-8 rounded-lg mb-12">
                <div className="flex flex-col items-center text-center">
                  <svg className="w-12 h-12 text-accent mb-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                  </svg>
                  <blockquote className="text-xl italic mb-4">{project.testimonial.quote}</blockquote>
                  <cite className="not-italic">
                    <span className="font-bold block">{project.testimonial.author}</span>
                    <span className="text-gray-600">{project.testimonial.position}</span>
                  </cite>
                </div>
              </div>
            </motion.div>
            
            {/* Project Details Sidebar */}
            <motion.div 
              className="lg:col-span-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="bg-gray-50 p-8 rounded-lg sticky top-24">
                <h3 className="text-2xl font-serif font-bold mb-6">Project Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-700">Client</h4>
                    <p>{project.client}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-700">Location</h4>
                    <p>{project.location}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-700">Year</h4>
                    <p>{project.year}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-700">Category</h4>
                    <p>{project.category}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-700">Services</h4>
                    <ul className="list-disc pl-5">
                      {project.services.map((service, index) => (
                        <li key={index}>{service}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link href="/contact" className="btn w-full text-center">
                    Start Your Project
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Project Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12 text-center"
          >
            <h2 className="heading">Project Gallery</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="relative h-80 overflow-hidden rounded-lg"
              >
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Project Navigation */}
      <section className="py-12 border-t border-gray-200">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {prevProject && (
              <Link href={`/portfolio/${prevProject.slug}`} className="flex items-center mb-4 md:mb-0 group">
                <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Previous Project</span>
              </Link>
            )}
            
            <Link href="/portfolio" className="flex items-center mb-4 md:mb-0">
              <span>All Projects</span>
            </Link>
            
            {nextProject && (
              <Link href={`/portfolio/${nextProject.slug}`} className="flex items-center group">
                <span>Next Project</span>
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </section>
      
      {/* Related Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12 text-center"
          >
            <h2 className="heading">Related Projects</h2>
            <p className="text-lg max-w-2xl mx-auto">Explore more of our work in similar categories</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((relatedProject) => (
              <motion.div
                key={relatedProject.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="group"
              >
                <Link href={`/portfolio/${relatedProject.slug}`}>
                  <div className="relative h-80 overflow-hidden rounded-lg mb-4">
                    <Image
                      src={relatedProject.coverImage}
                      alt={relatedProject.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-2">{relatedProject.title}</h3>
                  <p className="text-gray-600">{relatedProject.category}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Let's create something exceptional together. Our team is ready to bring your vision to life.
            </p>
            <Link href="/contact" className="inline-block px-8 py-4 bg-white text-accent font-bold rounded-lg hover:bg-gray-100 transition-colors">
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
