import styled from 'styled-components';

const CurriculumWrapper = styled.section`
  position: relative;
  overflow: hidden;
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
  position: absolute;
  overflow-y: auto;
  display: grid;
  height: 100%;
  width: 100%;

  > div {
    border-bottom: 10px dashed white;
    padding: 0 1rem;
  }

  li {
    text-align: left;
  }
`;

export {
  CurriculumGrid,
  CurriculumWrapper
}