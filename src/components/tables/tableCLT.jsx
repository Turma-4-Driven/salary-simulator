import { toBrazilianCurrency } from '../../helpers/currencyHelper';
import { TABLE_INFOS_CLT } from './utils/tableInfos';

import ProjectionsCLt from './projections/projectionsCLt';

import { 
  Body, 
  Column, 
  Container, 
  ContainerTable, 
  Footer, 
  Header, 
  NameFooter, 
  TitleCLT, 
  TitleHeader, 
  ValueFooter, 
  ValueHeader 
} from './style';

const TableCLT = () => {

  return (
    <Container>
      {
        TABLE_INFOS_CLT.map((tableInfosCLT) => (
          <>
            <TitleCLT>{`${tableInfosCLT.type}:`}</TitleCLT>
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
                      <strong>{columnData.name}</strong>
                    </Column>
                    <Column>
                      <span>{toBrazilianCurrency(columnData.value)}</span>
                    </Column>
                  </Body>
                ))
              }
              <Footer>
                <NameFooter>
                  <strong>Líquido</strong>
                </NameFooter>

                <ValueFooter>
                  <span>{toBrazilianCurrency(tableInfosCLT.netSalary)}</span>
                </ValueFooter>
              </Footer>

            </ContainerTable>
          </>
        ))
      } 
      <ProjectionsCLt />

    </Container>
  );
};

export default TableCLT;
