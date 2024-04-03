import React from 'react'

import { TitlePageSection, MyButton } from './TitlePage.style';
import portfolio from '/assets/images/PORTFOLIO-nobg.png';

const TitlePage = () => {
  return (
    <TitlePageSection>
      <img src={portfolio} />
      <div>
        <MyButton>Contact me</MyButton>
      </div>
    </TitlePageSection>
  )
}

export default TitlePage