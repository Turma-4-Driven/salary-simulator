import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TitleCLT = styled.h1`
  color: white;

  font-weight: 700;
  font-size: 25px;
  letter-spacing: 3px;

  margin: 40px 40px;

  @media (max-width: 840px) {
    margin: 40px 40px 20px 40px;
  }
`;

const TitlePJ = styled.h1`
  color: white;

  font-weight: 700;
  font-size: 25px;
  letter-spacing: 3px;

  margin: 40px 40px;

  @media (max-width: 840px) {
    margin: 20px 40px;
  }
`;

const ContainerTable = styled.div`
  width: 90%;

  display: flex;
  flex-direction: column;

  margin: 0 30px;

  @media (max-width: 840px) {
    margin: 0 20px;
  } 
`;

const Header = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-around;

  border-bottom: 1px solid #ff4791;

  margin-bottom: 20px;

  span{
    color: white;
    align-items: flex-start;

    font-weight: 700;
    font-size: 25px;
    letter-spacing: 3px;

    margin-bottom: 10px;
  }
`;

const TitleHeader = styled.div`
  width: 100px;

  display: flex;
  flex-direction: column;

  span{
    color: white;

    font-weight: 500;
    font-size: 22px;
    letter-spacing: 1px;

    margin-bottom: 10px;
  }
`;

const ValueHeader = styled.div`
  width: 30%;

  display: flex;
  flex-direction: column;

  span{
    color: white;

    font-weight: 500;
    font-size: 22px;
    letter-spacing: 1px;

    margin-bottom: 10px;
  }
`;

const Body = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-around;

  margin-bottom: 10px;  

  word-break: break-word;

  span{
    color: white;

    font-weight: 500;
    font-size: 15px;
    letter-spacing: 1px;

    margin-bottom: 10px;
  }
`;

const Column = styled.div`
  width: 100px;

  display: flex;
  flex-direction: column;

  span{
    color: white;

    font-weight: 500;
    font-size: 15px;
    letter-spacing: 1px;

    margin-bottom: 10px;
  }

  strong{
    color: white;

    font-weight: 500;
    font-size: 15px;
    letter-spacing: 1px;

    margin: 0 0 10px 5px;
  }

  @media (max-width: 840px) {
    span{
      margin-left: 20px;
    }
  } 
`;

const Footer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-around;

  border-top: 1px solid #ff4791;

  span{
    color: white;

    font-weight: 500;
    font-size: 18px;
    letter-spacing: 1px;

    margin-bottom: 10px;
  }
`;

const NameFooter = styled.div`
  width: 100px;

  display: flex;
  flex-direction: column;

  span{
    color: white;

    font-weight: 500;
    font-size: 18px;
    letter-spacing: 1px;

    margin-top: 10px;
  }
`;

const ValueFooter = styled.div`
  width: 100px;

  display: flex;
  flex-direction: column;

  span{
    color: white;

    font-weight: 500;
    font-size: 18px;
    letter-spacing: 1px;

    margin-top: 10px;
  }
`;

export {
  Container,
  ContainerTable,
  TitleCLT,
  TitlePJ,
  TitleHeader,
  Header,
  ValueHeader,
  Body,
  Column,
  Footer,
  NameFooter,
  ValueFooter
};
