import React from 'react';
import AppAppBar from './modules/AppAppBar';
import AppFooter from './modules/AppFooter';
import NowContent from './modules/NowContent';
import NowHero from './modules/NowHero';
import NowCard from './modules/Tools/NowCard'
import NowCardTwo from './modules/Tools/NowCardTwo'


function Now() {
    return (
        <React.Fragment>
        <AppAppBar />
        <NowHero />
        <NowContent />
        <NowCard />
        <NowCardTwo />
        <AppFooter />
        </React.Fragment>
    );
}
  
export default Now;