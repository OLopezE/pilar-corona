import styled from "styled-components";

const MainMenuContent = styled.section`
  display: grid;
  gap: 1rem;

  > a {
    transition: 0.4s;

    &:hover {
      /* transform: scale(1.1); */
      color: #d971f1;
    }
  }

  >h3 {
    font-size: 2rem;
  }

  > img {
    width: 100%;
  }
`;

export { MainMenuContent };
