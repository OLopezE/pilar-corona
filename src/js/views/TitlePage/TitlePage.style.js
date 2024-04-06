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

const MyButton = styled.button`
  background-color: transparent;
  color: #e1e2e2;
  background-size: 400%;
  border: 2px solid #17FC2A;
  font-size: 1.5rem;
  transition: all 0.2s;
  box-shadow: 4px 4px #17FC2A;
  font-weight: 900;

  &:hover {
    background-color: #17FC2A;
    border: 2px solid #ea9cf4;
    box-shadow: 4px 4px #ea9cf4;
    transform: scale(1.02);
    color: #111111;
  }
`;

export { TitlePageSection, MyButton };
