import { toBrazilianCurrency } from '../../helpers/currencyHelper';
import { TABLE_INFOS_PJ } from './utils/tableInfos';

import ProjectionsPJ from './projections/projectionsPJ';

import { 
  Body, 
  Column, 
  Container, 
  ContainerTable, 
  Footer, 
  Header, 
  NameFooter, 
  TitlePJ, 
  TitleHeader, 
  ValueFooter, 
  ValueHeader 
} from './style';

const TablePJ = () => {

  return (
    <Container>
      {
        TABLE_INFOS_PJ.map((tableInfosPJ)=> (
          <>
            <TitlePJ>{`${tableInfosPJ.type}:`}</TitlePJ>
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
                  <span>{toBrazilianCurrency(tableInfosPJ.total)}</span>
                </ValueFooter>
              </Footer>

            </ContainerTable>
          </>
        ))
      } 
      <ProjectionsPJ />

    </Container>
  );
};

export default TablePJ;
