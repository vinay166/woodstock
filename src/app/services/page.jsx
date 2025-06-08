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
      staggerChildren: 0.2
    }
  }
};

export default function Services() {
  // Mock services data (in a real implementation, this would come from JSON files)
  const services = [
    {
      id: 1,
      title: 'Wooden Flooring',
      description: 'Premium wooden flooring solutions for your home or office with the finest materials. Our wooden flooring options include hardwood, engineered wood, and laminate, each offering unique benefits in terms of durability, appearance, and maintenance requirements. We source our materials from sustainable forests and ensure professional installation for a flawless finish.',
      icon: '/images/icons/flooring.svg',
      image: '/images/slider3.jpg',
      slug: 'wooden-flooring'
    },
    {
      id: 2,
      title: 'Commercial Carpet Tiles',
      description: 'High-quality carpet tiles perfect for commercial spaces and offices. Our carpet tiles are designed for heavy foot traffic areas, offering excellent durability and easy maintenance. Available in a wide range of colors, patterns, and textures, they provide flexibility in design and simple replacement if damaged. They also offer sound absorption properties, making them ideal for open office environments.',
      icon: '/images/icons/carpet.svg',
      image: '/images/slider.jpg',
      slug: 'commercial-carpet-tiles'
    },
    {
      id: 3,
      title: 'Modular Furniture',
      description: 'Custom modular furniture designed to fit your space and requirements. Our modular furniture solutions are perfect for optimizing space utilization while maintaining aesthetic appeal. From workstations and storage units to modular kitchens and wardrobes, we design and manufacture furniture that can be reconfigured as your needs change, providing long-term value and flexibility.',
      icon: '/images/icons/furniture.svg',
      image: '/images/slider2.jpg',
      slug: 'modular-furniture'
    },
    {
      id: 4,
      title: 'Acoustics Panel',
      description: 'Sound-absorbing panels for optimal acoustics in any space. Our acoustic panels are designed to reduce noise levels and echo in various environments, from offices and conference rooms to home theaters and recording studios. Available in different sizes, shapes, and finishes, they can be customized to complement your interior design while providing effective sound management.',
      icon: '/images/icons/acoustics.svg',
      image: '/images/acoustics-panel.jpg',
      slug: 'acoustics-panel'
    },
    {
      id: 5,
      title: 'Cafe Furniture',
      description: 'Stylish and durable furniture solutions for cafes, restaurants, and hospitality spaces. Our cafe furniture combines aesthetic appeal with practical durability, designed to withstand the demands of high-traffic commercial environments. From tables and chairs to booths and bar stools, we offer a wide range of options that can be customized to match your brand identity.',
      icon: '/images/icons/cafe.svg',
      image: '/images/slider4.jpg',
      slug: 'cafe-furniture'
    },
    {
      id: 6,
      title: 'Interior Design Consultation',
      description: 'Professional interior design services to transform your space. Our experienced designers work closely with you to understand your vision, requirements, and budget, creating comprehensive design solutions that optimize functionality while reflecting your personal or brand style. From concept development to material selection and implementation oversight, we guide you through the entire process.',
      icon: '/images/icons/design.svg',
      image: '/images/bg.jpg',
      slug: 'interior-design'
    }
  ];

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/slider2.jpg"
            alt="Our Services"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative container h-full flex flex-col justify-center items-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-white max-w-2xl text-center">
            Comprehensive interior solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeIn}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={24}
                        height={24}
                      />
                    </div>
                    <h3 className="text-xl font-serif font-bold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link 
                    href={`/services/${service.slug}`} 
                    className="text-accent hover:text-accent/80 font-medium flex items-center"
                  >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading">Our Process</h2>
            <p className="text-lg max-w-3xl mx-auto">
              We follow a structured approach to ensure your project is completed efficiently and to your satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="text-center"
            >
              <div className="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-serif font-bold mb-3">Consultation</h3>
              <p className="text-gray-600">
                We begin by understanding your requirements, preferences, and budget constraints.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="text-center"
            >
              <div className="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-serif font-bold mb-3">Design</h3>
              <p className="text-gray-600">
                Our designers create detailed plans and visualizations based on your input.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="text-center"
            >
              <div className="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-serif font-bold mb-3">Implementation</h3>
              <p className="text-gray-600">
                Our skilled craftsmen bring the designs to life with precision and attention to detail.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="text-center"
            >
              <div className="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-serif font-bold mb-3">Delivery</h3>
              <p className="text-gray-600">
                We ensure timely completion and handover, with follow-up support as needed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">Ready to Transform Your Space?</h2>
            <p className="text-lg mb-8">
              Contact us today for a free consultation and quote. Let's bring your vision to life.
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
