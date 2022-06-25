import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h1`
  color: white;

  font-weight: 700;
  font-size: 25px;
  letter-spacing: 3px;

  margin: 40px 40px;
`;

const ContainerTable = styled.div`
  width: 40%;

  display: flex;
  flex-direction: column;

  margin: 0 30px;
`;

const Header = styled.div`
  width: 500px;

  display: flex;
  justify-content: space-around;

  border-bottom: 1px solid #ff4791;

  margin-bottom: 20px;

  span{
    color: white;
    align-items: flex-start;

    margin-bottom: 10px;
  }
`;

const TitleHeader = styled.div`
  width: 100px;

  display: flex;
  flex-direction: column;

  span{
    color: white;

    margin-bottom: 10px;
  }
`;

const ValueHeader = styled.div`
  width: 100px;

  display: flex;
  flex-direction: column;

  span{
    color: white;

    margin-bottom: 10px;
  }
`;

const Body = styled.div`
  width: 500px;

  display: flex;
  justify-content: space-around;

  margin-bottom: 10px;  

  word-break: break-word;

  span{
    color: white;

    margin-bottom: 10px;
  }
`;

const Column = styled.div`
  width: 100px;

  display: flex;
  flex-direction: column;

  span{
    color: white;

    margin-bottom: 10px auto;
  }
`;

const Footer = styled.div`
  width: 500px;

  display: flex;
  justify-content: space-around;

  border-top: 1px solid #ff4791;

  span{
    color: white;

    margin-bottom: 10px;
  }
`;

const NameFooter = styled.div`
  width: 100px;

  display: flex;
  flex-direction: column;

  span{
    color: white;

    margin-top: 10px;
  }
`;

const ValueFooter = styled.div`
  width: 100px;

  display: flex;
  flex-direction: column;

  span{
    color: white;

    margin-top: 10px;
  }
`;

export {
  Container,
  ContainerTable,
  Title,
  TitleHeader,
  Header,
  ValueHeader,
  Body,
  Column,
  Footer,
  NameFooter,
  ValueFooter
};
