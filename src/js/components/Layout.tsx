import React from 'react'

import PurpleHeart from '/assets/images/BW_heart_uwu.png';

import { MyLayout, ContactMeButton } from './Layout.style';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <MyLayout>
      <button>
        <img src={PurpleHeart} />
      </button>
      <div>
        <Link to="/curriculum">Curriculum</Link>
        <Link to="/curriculum">Architecture projects</Link>
        <Link to="/curriculum">Extra</Link>
        <ContactMeButton>
          Contact me
        </ContactMeButton>
      </div>
      {children}
    </MyLayout>
  )
};

export default Layout