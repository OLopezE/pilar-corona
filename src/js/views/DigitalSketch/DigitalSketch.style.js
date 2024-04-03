import styled from 'styled-components';

const DigitalSketchLayout = styled.section`
  min-height: 100svh;
  display: grid;
  place-items: center;
  overflow: hidden;

  > div {
    padding: 1rem;

    > h2 {
      text-align: left;
      letter-spacing: 1rem;
    }
  }
`;

const ImageGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);

  > img {
    width: 100%;
  }

  @media (min-width: 980px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export { DigitalSketchLayout, ImageGrid };