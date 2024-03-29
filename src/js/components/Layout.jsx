import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PurpleHeart from '/assets/images/BW_heart_uwu.png';
import burger from '/assets/icons/burger-menu.svg';

import {
  NavigationBar,
  MyLayout,
  BurgerButton,
  LogoButton,
  BrandName
} from './Layout.style';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const [displayNav, toggleNav] = useState(false)

  return (
    <MyLayout>
      <LogoButton
        onClick={() => navigate("/")}
      >
        <img src={PurpleHeart} />
      </LogoButton>

      <BurgerButton
        onClick={() => toggleNav(prev => !prev)}
      >
        <img src={burger} />
      </BurgerButton>
      <NavigationBar visibility={displayNav}>
        <Link to="/curriculum">Curriculum</Link>
        <Link to="/projects">Architecture projects</Link>
        <Link to="/extra">Extra</Link>
        <Link to="/contact">Contact me</Link>
      </NavigationBar>

      <BrandName>
        Pilar Corona
      </BrandName>
      {children}
    </MyLayout>
  )
};

export default Layout