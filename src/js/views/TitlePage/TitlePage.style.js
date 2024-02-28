import styled from "styled-components";

const TitlePageSection = styled.section`
  background-image: url('/assets/images/uuundulate.svg');
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100svh;
  display: grid;
  place-items: center;
  background-size: 200%;
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
  }

  @media (min-width: 980px) {
    background-size: 100%;

    > img {
      width: 60%;
    }

    > div {
      gap: 10rem;
    }
  }
`;

export { TitlePageSection };
