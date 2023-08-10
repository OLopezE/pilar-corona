import DigitalSketch from '../DigitalSketch';
import FurnitureDesign from '../FurnitureDesign';
import Renovation from '../Renovation';

import { MainMenuContent } from './MainMenu.style';

const MainMenu = () => {
  return (
    <MainMenuContent>
      <Renovation />
      <FurnitureDesign />
      <DigitalSketch />
    </MainMenuContent>
  );
};

export default MainMenu;
