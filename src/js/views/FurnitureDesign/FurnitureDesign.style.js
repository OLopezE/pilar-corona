import styled from "styled-components";

const FurnitureDesignContainer = styled.section`
  display: grid;
  min-height: 100svh;
  place-content: center;

  background-image: linear-gradient(#888 .1rem, transparent .1rem), linear-gradient(90deg, #888 .1rem, transparent .1rem);
  background-size: calc(99vw / 4) calc(99vw / 4);
  border-bottom: .2rem solid #888;

  @media (min-width: 980px) {
    background-size: calc(99vw / 10) calc(99vw / 10);
  }

  h2 {
    text-align: left;
    letter-spacing: 1.2rem;
  }

  > div {
    max-width: 1200px;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
  }

  p {
    font-size: 1.2rem;
  }

  button {
    width: fit-content;
    align-self: flex-end;
    border: 1px solid #6243a1;
    transition: all 0.4s;
    color: #6243a1;

    &:hover {
      color: #ea9cf4;
      border: 1px solid #ea9cf4;
      cursor: pointer;
      filter: drop-shadow(0 0 0.75rem #ea9cf4);
    }
  }
`;


const ImageGrid = styled.div`
  display: grid;
  gap: 1rem;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);

  > p {
    text-align: justify;
    font-family: open-sans;
    font-weight: 500;
  }

  > img {
    width: 100%;
  }

  @media (min-width: 980px) {
    grid-template-columns: repeat(4, 1fr);

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

const Content = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 980px) {
    flex-direction: row;
  }
`;

const Description = styled.div`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.8px);
  -webkit-backdrop-filter: blur(9.8px);
  height: fit-content;
`;

export {
  FurnitureDesignContainer,
  Content,
  Description,
  ImageGrid
};