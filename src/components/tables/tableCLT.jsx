import { tableInfosCLT } from '../../utils';

import { 
  Body, 
  Column, 
  Container, 
  ContainerTable, 
  Footer, 
  Header, 
  NameFooter, 
  Title, 
  TitleHeader, 
  ValueFooter, 
  ValueHeader 
} from './style';

const TableCLT = () => {

  return (
    <Container>
      {
        tableInfosCLT.map((tableInfosCLT)=> (
          <>
            <Title>{`${tableInfosCLT.type}:`}</Title>
            <ContainerTable>
              <Header>
                <TitleHeader>
                  <span>Dados</span>
                </TitleHeader>
                <ValueHeader>
                  <span>Valor</span>
                </ValueHeader>
              </Header>
              {
                tableInfosCLT.columnData.map((columnData, i) => (
                  <Body key={i}>
                    <Column>
                      <span>{columnData.name}</span>
                    </Column>
                    <Column>
                      <span>{columnData.value}</span>
                    </Column>
                  </Body>
                ))
              }
              <Footer>
                <NameFooter>
                  <span>Líquido</span>
                </NameFooter>

                <ValueFooter>
                  <span>{tableInfosCLT.total}</span>
                </ValueFooter>
              </Footer>

            </ContainerTable>
          </>
        ))
      } 
    </Container>
  );
};

export default TableCLT;
