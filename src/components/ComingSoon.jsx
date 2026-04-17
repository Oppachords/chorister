import React from 'react';
import { motion } from 'framer-motion';

const ComingSoon = ({ title }) => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Animated Background Elements (Musical Vibes) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-primary rounded-full filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-600 rounded-full filter blur-[100px] animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-brand-primary/20 text-brand-primary text-sm font-bold tracking-widest uppercase mb-6 border border-brand-primary/30">
            Under Construction
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-poppins">
            {title} <span className="text-brand-primary">Coming Soon</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            We are currently harmonizing our digital library. Very soon, you will be able to stream and download high-quality recordings from the Choristers Association of Uganda.
          </p>

          {/* Animated Music Bars */}
          <div className="flex justify-center items-end gap-1 h-12">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ height: [10, 40, 15, 35, 10] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
                className="w-1.5 bg-brand-primary rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComingSoon;