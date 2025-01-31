import React from 'react';
import Navbar from './shared/Navbar/page';
import Hero from './(section)/Hero/page';
import FutureOfFinance from './(section)/FutureOfFinance/page';
import Philosophy from './(section)/Philosophy/page';

const home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FutureOfFinance/>
      <Philosophy/>
    </div>
  );
};

export default home;