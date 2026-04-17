import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins"
            >
              About Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-gray-600 text-lg leading-relaxed mb-6 font-roboto"
            >
              Choristers Association of Uganda (CAU) was started by choir members from all Catholic Dioceses of Uganda in 2013 as an umbrella organization that unites all choirs to have a collective voice, improve on the quality of singing while evangelizing to bring people closer to God and learning from each other through organizing quality annual christmas music festivals. Its registered as an NGO that is non-profit making but relies on contributions from generous people to run its activities.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg leading-relaxed font-roboto"
            >
              Archbishop Dr Cyprian Kizito Lwanga has been a key advisor of the association since its inception and with his guidance and blessings, five annual Xmas festivals have so far been successfully organized. Choristers Association extends its appreciation for his continued guidance.
            </motion.p>
          </div>
          
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="rounded-3xl overflow-hidden shadow-2xl h-[400px]"
            >
              <img 
                src="/assets/images/hm3.JPG" 
                alt="About CAU" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;