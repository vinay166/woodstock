'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState(null);
  const [currentYear, setCurrentYear] = useState('');
  
  useEffect(() => {
    // Set the current year on the client side to avoid hydration errors
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubscribeStatus('success');
        setEmail('');
      } else {
        setSubscribeStatus('error');
      }
    } catch (error) {
      setSubscribeStatus('error');
    }
  };

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

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white pt-24 pb-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/50 to-accent"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-accent blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-accent blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Top section with logo and tagline */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Link href="/" className="inline-block mb-6">
            <Image 
              src="/images/logo.png" 
              alt="Woodstub Logo" 
              width={200} 
              height={80}
              className="h-16 w-auto"
            />
          </Link>
          <h2 className="text-2xl md:text-3xl font-serif font-light mb-4 max-w-2xl mx-auto">
            Crafting <span className="text-accent font-medium">Exceptional</span> Interior Experiences
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </motion.div>
        
        {/* Main footer content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16"
        >
          {/* Column 1: About Us */}
          <motion.div variants={fadeIn}>
            <h3 className="text-xl font-serif font-bold mb-6 flex items-center">
              <span className="w-6 h-0.5 bg-accent mr-3"></span>
              About Us
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Woodstub specializes in providing end-to-end interior solutions for homes & offices with state-of-the-art manufacturing and premium materials.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-black/30 backdrop-blur-sm px-4 py-3 rounded-lg border border-gray-700">
                <span className="block text-lg font-bold text-accent">15+</span>
                <span className="text-sm text-gray-400">Years Experience</span>
              </div>
              <div className="bg-black/30 backdrop-blur-sm px-4 py-3 rounded-lg border border-gray-700">
                <span className="block text-lg font-bold text-accent">500+</span>
                <span className="text-sm text-gray-400">Projects Completed</span>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={fadeIn}>
            <h3 className="text-xl font-serif font-bold mb-6 flex items-center">
              <span className="w-6 h-0.5 bg-accent mr-3"></span>
              Quick Links
            </h3>
            <ul className="grid grid-cols-1 gap-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.path} 
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-3 h-0.5 bg-accent mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact Info */}
          <motion.div variants={fadeIn}>
            <h3 className="text-xl font-serif font-bold mb-6 flex items-center">
              <span className="w-6 h-0.5 bg-accent mr-3"></span>
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-gray-700 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Phone Number</p>
                  <p className="text-white">+91 8090881036</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-gray-700 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email Address</p>
                  <p className="text-white">woodstub41@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-gray-700 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Office Address</p>
                  <p className="text-white">322 D Shantipuram, Prayagraj, UP 211013</p>
                </div>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="mt-8">
              <p className="text-sm text-gray-400 mb-3">Follow Us</p>
              <div className="flex space-x-3">
                {[
                  { icon: 'M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z', href: 'https://www.facebook.com/groups/woodstub.in/?ref=share' },
                  { icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z', href: 'https://instagram.com/woodstub.in' },
                  { icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z', href: 'https://twitter.com/Woodstub14' },
                  { icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z', href: 'https://youtube.com/channel/UCR_MLHyg-ke37AyQkdaFKUQ' }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-gray-700 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 group"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-400 group-hover:text-white">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Column 4: Newsletter Signup */}
          <motion.div variants={fadeIn}>
            <h3 className="text-xl font-serif font-bold mb-6 flex items-center">
              <span className="w-6 h-0.5 bg-accent mr-3"></span>
              Newsletter
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Subscribe to our newsletter to receive updates on our latest projects, design tips, and exclusive offers.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <div className="relative mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full px-5 py-4 bg-black/30 backdrop-blur-sm border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-white pr-12"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-accent hover:bg-accent/90 flex items-center justify-center transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
              {subscribeStatus === 'success' && (
                <div className="bg-green-900/30 border border-green-700 text-green-400 px-4 py-2 rounded-lg mt-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Thank you for subscribing!</p>
                </div>
              )}
              {subscribeStatus === 'error' && (
                <div className="bg-red-900/30 border border-red-700 text-red-400 px-4 py-2 rounded-lg mt-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p>Something went wrong. Please try again.</p>
                </div>
              )}
            </form>
            
            {/* Working Hours */}
            <div className="mt-8 bg-black/30 backdrop-blur-sm border border-gray-700 rounded-lg p-5">
              <h4 className="font-medium mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Working Hours
              </h4>
              <ul className="space-y-2">
                <li className="flex justify-between text-sm">
                  <span className="text-gray-400">Monday - Friday:</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-gray-400">Saturday:</span>
                  <span className="text-white">10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-gray-400">Sunday:</span>
                  <span className="text-white">Closed</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Recent Projects Gallery */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-16"
        >
          <h3 className="text-xl font-serif font-bold mb-6 text-center">Recent Projects</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              '/images/properties/1bhk.jpg',
              '/images/properties/2bhk.jpg',
              '/images/properties/3bhk.jpg',
              '/images/properties/4bhk.jpg',
              '/images/properties/villa.jpg',
              '/images/properties/penthouse.jpg'
            ].map((img, index) => (
              <div key={index} className="relative h-24 overflow-hidden rounded-lg group">
                <Image
                  src={img}
                  alt="Recent Project"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link href="/portfolio" className="text-white text-sm">View Project</Link>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Divider */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center bg-gray-900">
            <div className="w-6 h-6 rounded-full bg-accent"></div>
          </div>
        </div>
        
        {/* Bottom section with copyright and links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            © {currentYear} Woodstub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-300">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors duration-300">Sitemap</Link>
          </div>
        </div>
        
        {/* Back to top button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-accent hover:bg-accent/90 flex items-center justify-center transition-all duration-300 shadow-lg z-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
