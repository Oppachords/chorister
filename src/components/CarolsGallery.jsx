import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { carolsAlbums } from '../data/carolsData';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CarolsGallery = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">Albums</h2>
        <p className="text-gray-600 mb-12">Explore our Christmas Carols albums from 2014 to 2024.</p>

        {carolsAlbums.map((album, index) => (
          <div key={index} className="mb-20">
            <h3 className="text-2xl font-bold text-brand-primary mb-2">Christmas Fest {album.year}</h3>
            <p className="text-gray-500 mb-6">{album.description}</p>
            
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              className="rounded-xl overflow-hidden"
            >
              {/* Render PDFs first if they exist */}
              {album.files?.map((file, fIdx) => (
                <SwiperSlide key={`file-${fIdx}`}>
                  <a href={file.path} target="_blank" rel="noreferrer" className="block group relative aspect-square bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
                    <img src="/assets/images/pdf-placeholder.png" alt="PDF" className="w-full h-full object-contain p-10" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <span className="text-white font-bold">Open Magazine</span>
                    </div>
                  </a>
                </SwiperSlide>
              ))}

              {/* Render Images */}
              {album.images?.map((src, imgIdx) => (
                <SwiperSlide key={`img-${imgIdx}`}>
                  <div className="aspect-square rounded-xl overflow-hidden shadow-md group">
                    <img 
                      src={src} 
                      alt={`Fest ${album.year}`} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarolsGallery;