import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const Hero = () => {
  const slides = [
    { 
      title: "Choristers Association Uganda Limited", 
      text: "An umbrella organization that unites all choirs to have a collective voice",
      image: "/assets/images/about_img.JPG"
    },
    { 
      title: "Choristers Association Uganda Limited", 
      text: "Nurturing musical talents and fostering unity among choristers across all dioceses.",
      image: "/assets/images/about_img.JPG" 
    }
  ];

  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="relative flex items-center justify-center">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
              <img 
                src={slide.image} 
                alt="Background" 
                className="w-full h-full object-cover"
              />
              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
            </div>

            {/* Text Content */}
            <div className="container mx-auto px-6 relative z-10 text-left">
              <div className="max-w-3xl">
                <motion.h1 
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight font-poppins"
                >
                  {slide.title}
                </motion.h1>
                
                <motion.p 
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="text-lg md:text-2xl text-gray-200 mb-10 leading-relaxed font-roboto"
                >
                  {slide.text}
                </motion.p>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {/* Changed to anchor tag for scrolling functionality */}
                  <a 
                    href="#about" 
                    className="group relative inline-flex items-center px-8 py-4 bg-[#0e7096] text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:pr-12 active:scale-95 shadow-lg"
                  >
                    <span className="relative z-10">Read More</span>
                    <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      →
                    </span>
                  </a>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom styles for Swiper pagination bullets */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5;
          width: 12px;
          height: 12px;
        }
        .swiper-pagination-bullet-active {
          background: #0e7096 !important;
          opacity: 1;
          width: 30px;
          border-radius: 6px;
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default Hero;