import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
  return (
    <section className="py-20 bg-brand-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Achievements & Projects</h2>
          <div className="h-1 w-20 bg-white mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Achievement 1 */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-4">Empowerment & Entrepreneurship</h3>
            <p className="text-blue-50 leading-relaxed">
              Choristers Association has finalized arrangements to equip members with life and entrepreneurship skills to embrace government programmes of wealth creation and prosperity.
            </p>
          </motion.div>

          {/* Achievement 2 */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-4">Sustainability Projects</h3>
            <p className="text-blue-50 leading-relaxed">
              In a bid to sustain our activities and create opportunities for members, the association has resolved to open up a car washing bay as a dedicated income-generating venture.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;