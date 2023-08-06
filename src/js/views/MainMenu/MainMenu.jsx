import DigitalSketch from '../DigitalSketch/DigitalSketch';

import { MainMenuContent } from './MainMenu.style';

const MainMenu = () => {
  return (
    <MainMenuContent>
      <DigitalSketch />
      {/* <LinkContainer>
        <Link to='/'>About me</Link>
        <Link to='/curriculum-vitae'>Curriculum Vitae</Link>
        <Link to='/'>Architecture</Link>
        <Link to='/'>Furniture</Link>
        <Link to='/'>Poster sketch digital</Link>
        <Link to='/'>Extra</Link>
      </LinkContainer> */}
    </MainMenuContent>
  );
};

export default MainMenu;
