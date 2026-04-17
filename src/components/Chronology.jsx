import React from 'react';
import { motion } from 'framer-motion';

const festivalsData = [
  {
    title: "The 1st Annual Festival",
    date: "November 6th, 2013",
    description: "Successfully organized at Sheraton Hotel Kampala. Choirs were drawn from 6 provinces of the Catholic Church in Uganda.",
  },
  {
    title: "The 2nd Annual Christmas Carols",
    date: "November 29th, 2015",
    description: "Successfully organized at Sheraton Hotel Kampala. The Chief Guest was the late Deputy Chief Justice Laetitia Mukasa Kikonyogo.",
  },
  {
    title: "The 3rd Annual Christmas Carols Festival",
    date: "December 4th, 2016",
    description: "Held at Imperial Royale Hotel. The Guest of Honor was the Katikkiro of Buganda, Owek. Charles Peter Mayiga.",
  },
  {
    title: "The 4th Annual Christmas Carols Festival",
    date: "December 2nd, 2017",
    description: "Held at Imperial Royale Hotel. 14 Choirs participated including a visiting Choir from Tanzania. The Guest of Honor was the MD of SWICO, Mr. Kiwanuka Joseph William.",
  },
  {
    title: "The 5th Annual Christmas Carol Festival",
    date: "December 3rd, 2018",
    description: "Held at Imperial Royale Hotel. 16 Choirs participated. The Guest of Honor was the MD of Centenary Bank, Mr. Fabian Kasi.",
  },
  {
    title: "The 6th Annual Christmas Carols Festival",
    date: "December 1st, 2019",
    description: "Held at Imperial Royale Hotel. 20 Choirs participated. The Guest of Honor was the Vice President of the Republic of Uganda, H.E. Edward Kiwanuka Ssekandi.",
  }
];

const Chronology = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins"
          >
            Festival Chronology
          </motion.h2>
          <div className="h-1.5 w-24 bg-brand-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {festivalsData.map((fest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl border border-gray-100 bg-gray-50 transition-all duration-500 hover:bg-brand-primary hover:-translate-y-2 overflow-hidden shadow-sm hover:shadow-2xl"
            >
              {/* Decorative Circle Background on Hover */}
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10">
                <span className="inline-block text-xs font-bold tracking-widest text-gray-400 group-hover:text-white/70 uppercase mb-3 transition-colors">
                  {fest.date}
                </span>
                
                {/* Title styled with original Green */}
                <h3 className="text-xl font-bold text-[#1f9b2e] group-hover:text-white mb-4 leading-tight transition-colors">
                  {fest.title}
                </h3>
                
                <p className="text-gray-600 group-hover:text-white/90 leading-relaxed font-roboto transition-colors">
                  {fest.description}
                </p>
                
                <div className="mt-6 flex items-center text-brand-primary group-hover:text-white font-semibold text-sm transition-colors">
                  <span>View Details</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chronology;