import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="w-32">
          <Link to="/"><img src="/assets/images/logo.png" alt="Choristers Logo" /></Link>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 font-poppins font-semibold text-gray-700">
          <Link to="/" className="hover:text-brand-primary transition-colors">Home</Link>
          <Link to="/music" className="hover:text-brand-primary transition-colors">Music</Link>
          <Link to="/carols" className="hover:text-brand-primary transition-colors">Christmas Carols</Link>
          <Link to="/about" className="hover:text-brand-primary transition-colors">About</Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-brand-primary">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-50 px-4 pb-4 flex flex-col space-y-4"
          >
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/music" onClick={() => setIsOpen(false)}>Music</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;