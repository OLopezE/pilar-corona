import styled from "styled-components";

const MyLayout = styled.div`
  /* padding-top: 5rem; */
  position: relative;

  > button {
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 120px;
    background-color: transparent;
    transition: 0.2s;
    z-index: 10;

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
  }

  > div {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    gap: 1rem;
    justify-content: center;
    padding-top: 2rem;
    z-index: 10;
  }

  a {
    font-size: smaller;
    display: none;

    @media (min-width: 980px) {
      display: block;
    }

    &:hover {
      filter: drop-shadow(0 0 0.75rem #ea9cf4);
      color: #ea9cf4;
    }
  }
`;

const ContactMeButton = styled.button`
  background-color: transparent;
  border: 1px solid #17FC2A;
  color: #17FC2A;
  transition: 0.2s;
  position: fixed;
  right: 1rem;
  top: 2rem;

  &:hover {
    filter: drop-shadow(0 0 0.75rem #ea9cf4);
    color: #ea9cf4;
    border-color: #ea9cf4;
  }
`;

export { MyLayout, ContactMeButton };
