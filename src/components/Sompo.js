import React from 'react';
import AppAppBar from './modules/AppAppBar';
import AppFooter from './modules/AppFooter';
import SompoContent from './modules/SompoContent';
import SompoHero from './modules/SompoHero';
import SompoCard from './modules/Tools/SompoCard'


function Sompo() {
    return (
        <React.Fragment>
        <AppAppBar />
        <SompoHero />
        <SompoContent />
        <SompoCard />
        <AppFooter />
        </React.Fragment>
    );
}
  
export default Sompo;