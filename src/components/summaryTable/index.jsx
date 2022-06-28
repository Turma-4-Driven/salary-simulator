import { toBrazilianCurrency } from '../../helpers/currencyHelper';
import { TABLE_INFOS_CLT, TABLE_INFOS_PJ } from './utils/tableInfos';

import Projections from './projections';

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

const SummaryTable = ({ type }) => {
  const tableInfos = Boolean(type === 'clt')
    ? TABLE_INFOS_CLT
    : TABLE_INFOS_PJ;

  return (
    <Container>
      <TitlePJ>{`${tableInfos.type}:`}</TitlePJ>
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
          tableInfos.columnData.map((columnData, i) => (
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
            <span>{toBrazilianCurrency(tableInfos.monthlyNetSalary)}</span>
          </ValueFooter>
        </Footer>
      </ContainerTable>
      
      <Projections projections={tableInfos} />

    </Container>
  );
};

export default SummaryTable;
