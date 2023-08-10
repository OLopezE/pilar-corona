import styled from "styled-components";

const RenovationContainer = styled.section`
  min-height: 100svh;
  width: 100%;
  display: grid;
  place-items: center;

  @media (min-width: 980px) {
    padding: 2rem 8rem;
  }

  img {
    width: 100%;
  }

  h2 {
    text-align: left;
    letter-spacing: 0.7rem;
  }

  > div {
    padding: 2rem 1rem;
  }
`;

const ContentGrid = styled.div`
    @media (min-width: 980px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      align-items: center;
    }
`;

export { RenovationContainer, ContentGrid };