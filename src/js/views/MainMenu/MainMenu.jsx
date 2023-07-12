import React from 'react';

// import Portfolio from '../../three/Portfolio';

import portfolio from '/assets/images/PORTFOLIO.png'

import { MainMenuContent } from './MainMenu.style';
import { Link } from 'react-router-dom';

const MainMenu = () => {
  return (
    <MainMenuContent>
      {/* <Portfolio /> */}
      <img src={portfolio} alt='portfolio main image' />
      <Link to='/'>ABOUT ME</Link>
      <Link to='/curriculum-vitae'>CURRICULUM VITAE</Link>
      <Link to='/'>ARCHITECTURE</Link>
      <Link to='/'>FURNITURE</Link>
      <Link to='/'>EXTRA</Link>
    </MainMenuContent>
  );
};

export default MainMenu;
