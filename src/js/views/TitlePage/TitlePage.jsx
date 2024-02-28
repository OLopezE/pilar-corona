import React from 'react'

import { TitlePageSection } from './TitlePage.style';
import portfolio from '/assets/images/PORTFOLIO-nobg.png';

const TitlePage = () => {
  return (
    <TitlePageSection>
      <img src={portfolio} />
      <div>
        <p>Pilar corona</p>
        <button>Contact me</button>
      </div>
    </TitlePageSection>
  )
}

export default TitlePage