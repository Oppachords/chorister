import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Carols = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-poppins"
        >
          Flip through photos of our previous Christmas Carols
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative max-w-5xl mx-auto h-[350px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl bg-gray-100 group mb-10"
        >
          <img 
            src="/assets/images/colista/Xmas Fest 2015/DSC_3783.JPG" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
            alt="Previous Christmas Carols Highlight"
          />
          {/* Subtle Overlay on Hover */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
        </motion.div>

        {/* Navigation Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Link 
            to="/carols" 
            className="inline-block bg-brand-primary hover:bg-brand-dark text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform transition-all active:scale-95"
          >
            See More Photos
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Carols;