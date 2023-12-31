import styled from "styled-components";

const FurnitureDesignContainer = styled.section`
  display: grid;
  place-items: center;

  background-image: linear-gradient(#888 .1rem, transparent .1rem), linear-gradient(90deg, #888 .1rem, transparent .1rem);
  background-size: calc(99vw / 4) calc(99vw / 4);
  border-bottom: .2rem solid #888;

  @media (min-width: 980px) {
    padding: 8rem;
    background-size: calc(99vw / 10) calc(99vw / 10);
  }

  h2 {
    text-align: left;
    letter-spacing: 1.2rem;
  }

  > div {
    padding: 2rem 1rem;
  }

  p {
    font-size: 1.2rem;
  }
`;


const ImageGrid = styled.div`
  display: grid;
  gap: 1rem;
  align-items: center;

  > p {
    text-align: justify;
    font-family: open-sans;
    font-weight: 500;
  }

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

export { FurnitureDesignContainer, ImageGrid };