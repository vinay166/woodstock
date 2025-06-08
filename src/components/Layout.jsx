'use client';

import Header from './Header';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen pt-20"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default Layout;
