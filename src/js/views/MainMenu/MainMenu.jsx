import React from 'react';

import portfolio from '/assets/images/PORTFOLIO.png'

import { MainMenuContent } from './MainMenu.style';
import { Link } from 'react-router-dom';

const MainMenu = () => {
  return (
    <MainMenuContent>
      <h3>ARCHITECTURE</h3>
      <img src={portfolio} alt='portfolio main image' />
      <h3>PILAR CORONA</h3>
      <Link to='/'>ABOUT ME</Link>
      <Link to='/'>CURRICULUM VITAE</Link>
      <Link to='/'>ARCHITECTURE</Link>
      <Link to='/'>FURNITURE</Link>
      <Link to='/'>EXTRA</Link>
    </MainMenuContent>
  );
};

export default MainMenu;
