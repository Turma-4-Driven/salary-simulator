import styled from 'styled-components';

const Container = styled.div`
  margin: 30px 0;
  padding: 0 40px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 840px) {
    margin: 30px 0 0 0;
  }
`;

const ContainerProjectionsMensal = styled.div`
  display: flex;
  flex-direction: column;

  h1{
    color: white;

    margin-bottom: 20px;

    font-weight: 700;
    font-size: 18px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;

const ContainerProjectionsAnual = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  h1{
    color: white;

    margin-bottom: 20px;

    font-weight: 700;
    font-size: 18px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;

const ProjectionsMensal = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  margin-bottom: 25px;
`;

const ProjectionsAnual = styled.div`
  display: flex;
  justify-content: space-around;

  strong{
    color: white;

    font-weight: 500;
    font-size: 18px;
    letter-spacing: 1px;
  }

  span{
    color: white;

    margin-top: 5px;

    font-weight: 500;
    font-size: 15px;
    letter-spacing: 1px;
  }

`;

const ProjectionMensal = styled.div`
  width: 40%;

  display: flex;
  flex-direction: column;

  margin-bottom: 10px;

  strong{
    color: ${p => p.focus ? '#ff4791' : '#ffffff'};

    font-weight: 500;
    font-size: 18px;
    letter-spacing: 1px;
  }

  span{
    color: ${p => p.focus ? '#ff4791' : '#ffffff'};

    margin-top: 6px;

    font-weight: 500;
    font-size: 15px;
    letter-spacing: 1px;
  }
`;

const ProjectionAnual = styled.div`
  width: 40%;

  display: flex;
  flex-direction: column;

  margin-bottom: 30px;
`;

export {
  Container,
  ContainerProjectionsMensal,
  ContainerProjectionsAnual,
  ProjectionsMensal,
  ProjectionsAnual,
  ProjectionMensal,
  ProjectionAnual
};
