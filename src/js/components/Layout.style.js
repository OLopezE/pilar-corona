import styled from "styled-components";

const MyLayout = styled.div`
  position: relative;
`;

const LogoButton = styled.button`
  position: fixed;
  top: 1rem;
  left: 1rem;
  width: 120px;
  background-color: transparent;
  transition: 0.2s;
  z-index: 10;
  mix-blend-mode: exclusion;

  &:hover {
    border: unset;
    filter: drop-shadow(0 0 0.75rem #17FC2A);
  }

  &:focus  {
    outline: unset;
    filter: drop-shadow(0 0 0.75rem #ea9cf4);
  }

  &:focus-visible  {
    outline: unset;
    filter: drop-shadow(0 0 0.75rem #ea9cf4);
  }

  > img {
    width: 100%;
  }
`;

const NavigationBar = styled.div`
  display: ${({ visibility }) => visibility ? 'flex' : 'none'};
  position: fixed;
  top: 6rem;
  right: 1.2rem;
  width: 100%;
  flex-direction: column;
  text-align: right;
  gap: 2rem;
  justify-content: center;
  z-index: 10;
  background-color: #17FC2A;
  padding: 1rem;
  width: fit-content;

  @media (min-width: 980px) {
    display: flex;
    top: 2.6rem;
    flex-direction: row;
    padding: 1rem 2rem;
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.8px);
    -webkit-backdrop-filter: blur(9.8px);
    width: fit-content;
    align-items: center;
    justify-content: center;
  }

  a {
    font-size: 0.75rem;
    mix-blend-mode: exclusion;

    &:hover {
      filter: drop-shadow(0 0 0.75rem #ea9cf4);
      color: #ea9cf4;
    }
  }
`;

const BurgerButton = styled.button`
  position: fixed;
  right: 1rem;
  top: 2rem;
  width: 2rem;
  background-color: transparent;
  display: grid;
  place-content: center;
  z-index: 10;
  mix-blend-mode: exclusion;

  > img {
    width: 2rem;
  }

  @media (min-width: 980px) {
    display: none;
  }
`;

const BrandName = styled.p`
  text-align: right;
  padding-right: 2rem;
`;

export {
  MyLayout,
  LogoButton,
  NavigationBar,
  BurgerButton,
  BrandName
};
