import styled from 'styled-components';

const HeaderPage = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 50px 0;

  @media (max-width: 840px) {
    margin-top: 30px;
  } 
`;

const Title = styled.h1`
  //color: white;
  color: #ff4791;

  font-weight: 700;
  font-size: 60px;
  letter-spacing: 10px;
  text-transform: uppercase;
  text-align: center;

  text-shadow: 0.1em 0.1em 0.2em rgba(245, 40, 145, 0.8);

  @media (max-width: 840px) {
    font-size: 45px;
    letter-spacing: 8px;
  } 
`;

export {
  HeaderPage,
  Title
};
