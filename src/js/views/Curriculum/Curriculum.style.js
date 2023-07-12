import styled from 'styled-components';

const CurriculumWrapper = styled.section`
  background: rgb(0,0,0);
  background: radial-gradient(circle, rgba(0,0,0,1) 34%, rgba(69,124,66,1) 100%);
  background-size: 400% 400%;
	animation: gradient 2s ease;
  background-position: 75% 75%;
  height: 100svh;
  width: 100svw;

  @keyframes gradient {
    0% {
    background-position: 50% 50%;
    }
    100% {
      background-position: 75% 75%;
    }
  }
`;

const CurriculumGrid = styled.div`
  display: grid;
  height: 100%;
  width: 100%;

  > div {
    margin: 2rem;
    background-color: red;
  }
  /* border: 1px solid white; */
`;

export {
  CurriculumGrid,
  CurriculumWrapper
}