import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { NavigationBar, NavLink } from './Layout.style';

const Navbar = ({ display }) => {
  const { pathname } = useLocation();
  const paths = {
    curriculum: '/curriculum',
    projects: '/projects',
    extra: '/extra',
    contact: '/contact',
  };

  useEffect(() => {
    console.log(pathname)
  }, [pathname]);

  return (
    <NavigationBar visibility={display}>
      <NavLink active={pathname === paths.curriculum} to="/curriculum">Curriculum</NavLink>
      <NavLink active={pathname === paths.projects} to="/projects">Architecture projects</NavLink>
      <NavLink active={pathname === paths.extra} to="/extra">Extra</NavLink>
      <NavLink active={pathname === paths.contact} to="/contact">Contact me</NavLink>
    </NavigationBar>
  )
}

export default Navbar