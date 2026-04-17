import React from 'react';
import ComingSoon from '../components/ComingSoon';

const Music = () => {
  return (
    <div className="pt-20 bg-gray-900">
      {/* You can reuse the ComingSoon component for any page that isn't ready */}
      <ComingSoon title="Music & Audio" />
      
      {/* Optional: Newsletter Signup specifically for music updates */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Want to be notified when we drop new music?</h3>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
            <button className="bg-brand-primary text-white px-8 py-3 rounded-full font-bold hover:bg-brand-dark transition-all">
              Notify Me
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Music;