import styled from "styled-components";

const CurriculumSection = styled.section`
  min-height: 100svh;
  padding: 1rem;
  padding-top: 4rem;
  display: grid;
  justify-content: center;

  > div {
    max-width: 1200px;
    justify-self: center;
  }

  @media (min-width: 980px) {
    > div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      > div {
      }
    }

  }
`;

const SoftwareList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;

  > svg {
    width: 100%;
    height: 100%;
    color: #ea9cf4;
    transition: all 0.4s;

    &:hover {
      color: #17fc2a;
    }
  }
`;

export {
  CurriculumSection,
  SoftwareList
}