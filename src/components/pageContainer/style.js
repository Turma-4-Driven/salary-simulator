import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: calc((100vh - 600px) / 2) auto;

  @media (max-width: 840px) {
    margin: calc((100vh - 650px) / 2) auto;
  }

   @media (max-width: 600px) {
    margin: calc((100vh - 700px) / 2) auto;
  }

  @media (max-width: 400px) {
    margin: calc((100vh - 650px) / 2) auto;
  }

  @media (min-width: 840px) {
    margin: calc((100vh - 600px) / 2) auto;
  } 
`;

export {
  Container
};
