import React from 'react';

// import Portfolio from '../../three/Portfolio';

import portfolio from '/assets/images/PORTFOLIO.png'

import { MainMenuContent, RedSquareContainer, LinkContainer } from './MainMenu.style';
import { Link } from 'react-router-dom';

const MainMenu = () => {
  return (
    <MainMenuContent>
      {/* <Portfolio /> */}
      {/* <img src={portfolio} alt='portfolio main image' /> */}
      <h3>Pilar Corona's</h3>
      <RedSquareContainer>
        <h1>Portfolio</h1>
      </RedSquareContainer>
      <LinkContainer>
        <Link to='/'>About me</Link>
        <Link to='/curriculum-vitae'>Curriculum Vitae</Link>
        <Link to='/'>Architecture</Link>
        <Link to='/'>Furniture</Link>
        <Link to='/'>Extra</Link>
      </LinkContainer>
    </MainMenuContent>
  );
};

export default MainMenu;
