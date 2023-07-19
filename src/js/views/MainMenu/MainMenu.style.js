import styled from "styled-components";

const MainMenuContent = styled.section`
  display: grid;
  gap: 1rem;
  place-items: center;
  height: 100vh;
  width: 100vw;
  height: 100svh;
  width: 100svw;

  a {
    transition: 0.4s;
    color: white;
    text-shadow: 0px 0px 30px white;

    &:hover {
      transform: scale(1.05);
    }
  }

  >h3 {
    font-size: 2rem;
    text-shadow: 0px 0px 30px white;
  }

  > img {
    width: 100%;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const RedSquareContainer = styled.div`
  min-height: 100%;
  width: 80%;
  background-color: red;
  box-shadow: 0px 0px 90px 25px rgba(255,0,0,1);
  display: grid;
  place-items: center;

  > h1 {
    color: black;
    transition: 0.5s;

    &:hover {
      color: white;
      text-shadow: 0px 0px 30px white;
      transform: scale(1.05);
    }
  }

`;

export { LinkContainer, MainMenuContent, RedSquareContainer };
