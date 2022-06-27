import styled from 'styled-components';

const Simulation = styled.button`
  width: 40%;
  min-height: 40px;

  color: white;
  background-color: #ff4791;

  margin-bottom: 30px;

  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.4px;
  text-transform: uppercase;

  cursor: pointer;

  @media (max-width: 1800px) {
    width: 80%;
  }
`;

export {
  Simulation,
};