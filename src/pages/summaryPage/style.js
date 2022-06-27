import styled from 'styled-components';

const Container = styled.div`
  width: 70%;
  height: 600px;

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #121212;
  box-shadow: 0 3px 15px rgba(245, 40, 145, 0.8);

  overflow: auto;
  ::-webkit-scrollbar {
    width: 2px;
    height: 0;
  }
  ::-webkit-scrollbar-thumb {
    background: #ff4791;
  }

  @media (max-width: 840px) {
   width: 80%;
    height: 100%; 

    flex-direction: column;
  }
`;

const ContainerTables = styled.div`
  width: 100%;
  max-height: 900px;

  display: flex;
  justify-content: center;

  @media (max-width: 840px) {
    max-height: 100%;

    flex-direction: column;

    margin: 0;
  }
`;

export {
  Container,
  ContainerTables,
};
