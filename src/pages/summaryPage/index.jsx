import PageContainer from '../../components/pageContainer';

import TableCLT from '../../components/tables/tableCLT';
import TablePJ from '../../components/tables/tablePJ';

import { Container, ContainerTables } from './style';

const SummaryPage = () => {
  return(
    <PageContainer>
      <Container>
        <ContainerTables>
          <TableCLT/>
          <TablePJ />
        </ContainerTables>
      </Container>
    </PageContainer>
  );
};

export default SummaryPage;
