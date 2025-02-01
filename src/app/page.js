import React from 'react';
import Navbar from './shared/Navbar/page';
import Hero from './(section)/Hero/page';
import FutureOfFinance from './(section)/FutureOfFinance/page';
import Philosophy from './(section)/Philosophy/page';
import Finance from './(section)/Finance/page';
import StateSection from './(section)/StateSection/page';
import Partner from './(section)/Partner/page';
import Footer from './shared/Footer/page';
import Legacy from './(section)/Legacy/page';

const home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FutureOfFinance/>
      <Philosophy/>
      <Finance/>
      <StateSection/>
      <Partner/>
      <Legacy/>
      <Footer/>
    </div>
  );
};

export default home;