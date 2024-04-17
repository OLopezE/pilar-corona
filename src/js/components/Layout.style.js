import { Link } from "react-router-dom";
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
    padding: 0.5rem 1rem;
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.08);
    gap: 1rem;
    border-radius: 12px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.8px);
    -webkit-backdrop-filter: blur(9.8px);
    width: fit-content;
    align-items: center;
    justify-content: center;
  }
`;

const NavLink = styled(Link)`
  font-size: 0.75rem;
  mix-blend-mode: exclusion;
  border-radius: 8px;
  padding: 8px 12px;
  transition: all 0.5s ease;
  background-color: ${({ active }) => active ? '#FFFFFF10' : 'none'};
  color: ${({ active }) => active ? '#ea9cf4' : 'none'};
  ${({ active }) => active ? 'filter: drop-shadow(0 0 0.75rem #ea9cf4)' : 'none'};

  &:hover {
    color: #ea9cf4;
    filter: drop-shadow(0 0 0.75rem #ea9cf4);
    background-color: #FFFFFF10;
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
  BrandName,
  NavLink
};
