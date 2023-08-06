import styled from 'styled-components';

const DigitalSketchLayout = styled.section`
  display: grid;
  padding: 1rem;


  > h2 {
    text-align: left;
    letter-spacing: 1rem;
  }

  @media (min-width: 980px) {
    padding: 10rem;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  gap: 1rem;

  > img {
    width: 100%;
  }

  @media (min-width: 980px) {
    grid-template-columns: repeat(6, 1fr);

    > img {
      filter: grayscale(100);
      transition: 0.3s;

      &:hover {
        filter: grayscale(0);
        transform: scale(1.1);
      }
    }
  }
`;

export { DigitalSketchLayout, ImageGrid };