import React from 'react';
import AppAppBar from './modules/AppAppBar';
import RafflesHero from './modules/RafflesHero';
import RafflesContent from './modules/RafflesContent';
import RafflesFeatures from './modules/RafflesFeatures';
import AppFooter from './modules/AppFooter';
import RafflesCard from './modules/Tools/RafflesCard'



function Raffles() {
    return (
        <React.Fragment>
        <AppAppBar />
        <RafflesHero />
        <RafflesContent />
        <RafflesFeatures />
        <RafflesCard />
        <AppFooter />
        </React.Fragment>
    );
}
  
export default Raffles;