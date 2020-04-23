import React from 'react';
import AppAppBar from './modules/AppAppBar';
import AppFooter from './modules/AppFooter';
import ProductHero from './modules/HomeHero';
import ProductIntroduction from './modules/HomeIntroduction';
import ProductContent from './modules/HomeContent';



function Homepage() {
    return (
      <React.Fragment>
        <AppAppBar />
        <ProductHero />
        <ProductIntroduction />
        <ProductContent />
        <AppFooter />
      </React.Fragment>
    );
  }
  
  export default Homepage;