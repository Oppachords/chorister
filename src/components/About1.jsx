import React from 'react';
import { motion } from 'framer-motion';

const About1 = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl font-bold text-brand-primary mb-6">
              Core business of Choristers Association of Uganda
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              The Association organizes competitive Christmas Carol festivals on annual basis through inviting choirs allover Catholic Dioceses Uganda to participate. On acceptance to participate in the festivals, the Choristers organizing committee collaborates with Parish priests, choir music directors to prepare their respective choirs for competitive festival presentations hosted by renown hotels in Kampala such as Sheraton.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              To appreciate and promote competitiveness the 1st three winning Choirs are given awards while others are given certificates of appreciation and trophies to recognize their participation and to encourage them do better on subsequent charismas festivals. Choristers Association has also finalized arrangements to equip members to life and entrepreneurship skills to embrace government programmes of wealth creating and prosperity and has resolved to open up a car washing bay to sustain its activities.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="rounded-3xl overflow-hidden shadow-xl border-8 border-white">
              <img src="/assets/images/about_img.JPG" alt="Core Business" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About1;