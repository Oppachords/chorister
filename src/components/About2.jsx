import React from 'react';
import { motion } from 'framer-motion';

const About2 = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl font-bold text-brand-primary mb-6">
              Our Patrons and Advisors
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed italic border-l-4 border-brand-primary pl-6">
              Initially the Choristers Association of Uganda (CAU) was blessed to have patrons of good repute conduct including Fr. Dr. Joseph Ssebunnya former Chancellor Kampala Archdiocese, Mr. Kiwanuka Joseph Managing Director SWICO, the Late Council Gerald Kakuba, Late Letitia Mukasa Kikonyogo former Deputy Chief Justice, & Mrs. Margaret Kakande Ministry of Finance with Archbishop Cyprian Kizito Lwanga as our key advisor.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-6">
              On the Obituary we lost Counsel Gerald Kakuba in 2018 and former deputy Chief Justice Leticia Mukasa Kikonyogo in 2017. May God Rest their Souls in Peace and grant them eternal life. Other Patrons mentioned are still serving choristers accordingly.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img src="/assets/images/about2.JPG" alt="Patrons" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;