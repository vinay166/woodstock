'use client';

import Layout from '../../components/Layout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

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

// Counter component with animation
const AnimatedCounter = ({ value, label }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    
    // Don't run if value is invalid
    if (start === end) return;
    
    // Animate counter
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, 20);
    
    // Cleanup
    return () => {
      clearInterval(timer);
    };
  }, [value]);
  
  return (
    <div className="text-center">
      <h3 className="text-4xl md:text-5xl font-serif font-bold text-accent">{count}+</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default function About() {
  // Mock team data (in a real implementation, this would come from JSON files)
  const team = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      bio: 'With over 15 years of experience in interior design and furniture manufacturing, Rajesh leads the vision and direction of Woodstub.',
      photo: '/images/team/ceo.jpg'
    },
    {
      id: 2,
      name: 'Priya Singh',
      role: 'Design Director',
      bio: 'Priya brings creativity and innovation to every project, ensuring that each design is both beautiful and functional.',
      photo: '/images/team/designer.jpg'
    },
    {
      id: 3,
      name: 'Vikram Patel',
      role: 'Production Manager',
      bio: 'Vikram oversees the manufacturing process, ensuring that every piece meets our high-quality standards.',
      photo: '/images/team/manager.jpg'
    },
    {
      id: 4,
      name: 'Ananya Sharma',
      role: 'Client Relations',
      bio: 'Ananya works closely with clients to understand their needs and ensure their vision is brought to life.',
      photo: '/images/team/relations.jpg'
    }
  ];

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/bg.jpg"
            alt="About Us"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative container h-full flex flex-col justify-center items-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">About Us</h1>
        </div>
      </section>

      {/* Mission/Vision Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <h2 className="heading">Our Mission</h2>
              <p className="text-lg mb-6">
                At Woodstub, our mission is to transform spaces into beautiful, functional environments 
                that reflect our clients' unique style and needs. We believe that great design should be 
                accessible to everyone, which is why we work directly with our clients, eliminating 
                middlemen to provide premium quality at competitive prices.
              </p>
              <p className="text-lg">
                We are committed to sustainable practices, using eco-friendly materials whenever possible 
                and minimizing waste in our manufacturing process. Our team of skilled craftsmen and 
                designers work together to create custom solutions that stand the test of time.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/images/office (5).jpg"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Animated Counters */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter value="5" label="Years of Experience" />
            <AnimatedCounter value="110" label="Projects Completed" />
            <AnimatedCounter value="70" label="Satisfied Clients" />
            <AnimatedCounter value="150" label="Active Workers" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading">Meet Our Team</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Our talented team of professionals is dedicated to bringing your vision to life.
            </p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member) => (
              <motion.div
                key={member.id}
                variants={fadeIn}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold">{member.name}</h3>
                  <p className="text-accent mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading">Why Choose Woodstub</h2>
            <p className="text-lg max-w-3xl mx-auto">
              We stand apart from the competition with our commitment to quality, innovation, and customer satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Quality Craftsmanship</h3>
              <p className="text-gray-600">
                We take pride in our attention to detail and use only the finest materials to create pieces that last.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Timely Delivery</h3>
              <p className="text-gray-600">
                We understand the importance of deadlines and work efficiently to complete your project on time.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Customized Solutions</h3>
              <p className="text-gray-600">
                We tailor our designs to meet your specific needs and preferences, ensuring a perfect fit for your space.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
