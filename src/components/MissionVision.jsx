import { motion } from 'framer-motion';

const MissionVision = () => {
  const cards = [
    {
      title: "Our Mission",
      text: "To act as an instrument of unity, quality singing and development through Music for both Catholic and non-Catholic Choirs in Uganda.",
      img: "/assets/images/hm1.JPG",
      delay: 0.2
    },
    {
      title: "Our Vision",
      text: "To build a strong foundation for the future of choral music, fostering talent and creating a collective voice for all Ugandan choristers.",
      img: "/assets/images/hm2.JPG", 
      delay: 0.4
    }
  ];

  return (
    /* Changed to a subtle Slate-50 background with a top-to-bottom gradient */
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 space-y-24">
        {cards.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: item.delay }}
            className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}
          >
            {/* Text Content with a soft glass-morphism feel on hover */}
            <div className="flex-1 lg:pr-10">
              <motion.span 
                className="text-brand-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                Core Values
              </motion.span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-poppins">
                {item.title}
              </h2>
              <div className="relative p-1">
                 <p className="text-gray-600 text-xl leading-relaxed font-roboto relative z-10">
                  {item.text}
                </p>
                {/* Decorative accent element */}
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-brand-primary/20 rounded-full"></div>
              </div>
              <div className="mt-8 h-1.5 w-24 bg-brand-primary rounded-full shadow-sm"></div>
            </div>

            {/* Image Container with a clean border and shadow */}
            <div className="flex-1 w-full">
              <div className="relative group">
                {/* Background Decorative Blob for Premium Feel */}
                <div className="absolute -inset-4 bg-brand-primary/5 rounded-[2.5rem] scale-95 group-hover:scale-100 transition-transform duration-500"></div>
                
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform transition-all duration-700 group-hover:shadow-brand-primary/20">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-[350px] md:h-[450px] object-cover transform transition-transform duration-1000 group-hover:scale-110" 
                  />
                  {/* Subtle Dark Overlay on Image */}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MissionVision;