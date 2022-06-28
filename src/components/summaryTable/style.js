import styled from 'styled-components';

const columnWidth = '150px';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TableTitle = styled.h1`
  color: white;

  font-weight: 700;
  font-size: 25px;
  letter-spacing: 3px;

  margin: 40px 40px;

  @media (max-width: 840px) {
    margin: ${p => p.isClt ? '40px 40px 20px 40px' : '20px 40px'};
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

  span {
    color: white;
    align-items: flex-start;

    font-weight: 700;
    font-size: 25px;
    letter-spacing: 3px;

    margin-bottom: 10px;
  }
`;

const TitleHeader = styled.div`
  width: ${columnWidth};

  display: flex;
  flex-direction: column;

  span {
    color: white;

    font-weight: 500;
    font-size: 22px;
    letter-spacing: 1px;

    margin-bottom: 10px;
  }
`;

const ValueHeader = styled.div`
  width: ${columnWidth};

  display: flex;
  flex-direction: column;

  span {
    color: white;

    font-weight: 500;
    font-size: 22px;
    letter-spacing: 1px;

    margin-bottom: 10px;
  }

  @media (max-width: 840px) {
    margin-left: 50px;
  }
`;

const Body = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-around;

  margin-bottom: 10px;  

  word-break: break-word;

  span {
    color: white;

    font-weight: 500;
    font-size: 15px;
    letter-spacing: 1px;

    margin-bottom: 10px;
  }
`;

const Column = styled.div`
  width: ${columnWidth};

  display: flex;
  flex-direction: column;

  span {
    color: white;

    font-weight: 500;
    font-size: 15px;
    letter-spacing: 1px;

    margin-bottom: 10px;
    margin: 0 0 10px 5px;
  }

  strong {
    color: white;

    font-weight: 500;
    font-size: 15px;
    letter-spacing: 1px;

    margin: 0 0 10px 5px;
  }

  @media (max-width: 840px) {
    span {
      margin-left: 20px;
    }
  } 
`;

const Footer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-around;

  border-top: 1px solid #ff4791;

  span {
    color: white;

    font-weight: 500;
    font-size: 18px;
    letter-spacing: 1px;

    margin-bottom: 10px;
  }
`;

const NameFooter = styled.div`
  width: ${columnWidth};

  display: flex;
  flex-direction: column;

  strong {
    color: white;

    font-weight: 500;
    font-size: 18px;
    letter-spacing: 1px;

    margin-top: 10px;
  }
`;

const ValueFooter = styled.div`
  width: ${columnWidth};

  display: flex;
  flex-direction: column;

  span {
    color: white;

    font-weight: 500;
    font-size: 18px;
    letter-spacing: 1px;

    margin-top: 10px;
    margin-left: 5px;
  }

  @media (max-width: 840px) {
    span {
      margin-left: 20px;
    }
  } 
`;

export {
  Container,
  ContainerTable,
  TableTitle,
  TitleHeader,
  Header,
  ValueHeader,
  Body,
  Column,
  Footer,
  NameFooter,
  ValueFooter
};
