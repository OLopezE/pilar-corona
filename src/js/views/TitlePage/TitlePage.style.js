import styled from "styled-components";

const TitlePageSection = styled.section`
  min-height: 100svh;
  display: grid;
  place-items: center;
  position: relative;

  > img {
    width: 100%;
  }

  > div {
    display: flex;
    position: absolute;
    bottom: 2rem;
    align-items: center;
    gap: 2rem;
  }

  p {
    margin: 0;
  }

  button {
    background-color: #17FC2A;
    color: #111111;
    font-size: 1.5rem;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.02);
      filter: opacity(0.5);
    }
  }

  @media (min-width: 980px) {
    background-size: 100%;

    > img {
      width: 100%;
    }

    > div {
      gap: 10rem;
    }
  }
`;

export { TitlePageSection };
