import images from './images';

import { RenovationContainer, ContentGrid } from './Renovation.style';

const Renovation = () => {
  const [bathroom, view] = images;

  return (
    <RenovationContainer>
      <div>
        <h2>REMODELACIONES</h2>
        <ContentGrid>
          <img src={bathroom.url} />
          <p>
          My experience in the remodeling of interior spaces in how it is in the commercial premises (right) and bathroom (left) has been enriching. Collaboration in the design and implementation of solutions has made it possible to generate more attractive, functional and welcoming spaces for users. These projects have demonstrated the importance of intelligent design and attention to detail in achieving successful results, contributing to improving the user experience and the success of businesses or spaces in general.
          </p>
          <img src={view.url} />
        </ContentGrid>
      </div>
    </RenovationContainer>
  )
}

export default Renovation