import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import MissionVision from '../components/MissionVision';
import Achievements from '../components/Achievements'; // Import it here
import Team from '../components/Team';
import Carols from '../components/Carols';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <MissionVision />
      <Achievements /> {/* Added here */}
      <Team />
      <Carols />
    </>
  );
};

export default Home;