import { tableInfosPJ } from '../../utils';

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

const TablePJ = () => {

  return (
    <Container>
      {
        tableInfosPJ.map((tableInfosPJ)=> (
          <>
            <Title>{`${tableInfosPJ.type}:`}</Title>
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
                tableInfosPJ.columnData.map((columnData, i) => (
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
                  <span>{tableInfosPJ.total}</span>
                </ValueFooter>
              </Footer>

            </ContainerTable>
          </>
        ))
      } 
    </Container>
  );
};

export default TablePJ;