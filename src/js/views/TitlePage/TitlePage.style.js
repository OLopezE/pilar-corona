import styled from "styled-components";

const TitlePageSection = styled.section`
  background-image: url('/assets/images/uuundulate.svg');
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100svh;
  display: grid;
  place-items: center;

  > img {
    width: 100%;
  }

  @media (min-width: 980px) {
    > img {
      width: 60%;
    }
  }
`;

export { TitlePageSection };
