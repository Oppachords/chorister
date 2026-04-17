import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage'; // 1. Import the new page
import ChristmasCarolsPage from './pages/ChristmassCarolsPage';
import Music from './pages/Music';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            {/* 2. Route for the Homepage */}
            <Route path="/" element={<Home />} />
            
            {/* 3. Route for the About page - matches the Link in your Navbar */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/carols" element={<ChristmasCarolsPage />} />
            <Route path="/music" element={<Music />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;