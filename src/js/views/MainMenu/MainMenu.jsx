import DigitalSketch from '../DigitalSketch';
import FurnitureDesign from '../FurnitureDesign';
import Renovation from '../Renovation';
import TitlePage from '../TitlePage';

import { MainMenuContent } from './MainMenu.style';

const MainMenu = () => {
  return (
    <MainMenuContent>
      <TitlePage />
      <Renovation />
      <FurnitureDesign />
      <DigitalSketch />
    </MainMenuContent>
  );
};

export default MainMenu;
