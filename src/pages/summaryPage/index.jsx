import PageContainer from '../../components/pageContainer';

import TableCLT from '../../components/tables/tableCLT';
import TablePJ from '../../components/tables/tablePJ';

import { Container, ContainerTables } from './style';

import NewSimulation from '../../components/newSimulation';
import Header from '../../components/header';

const SummaryPage = () => {
  return(
    <>
      <Header />
      <PageContainer>
        <Container>
          <ContainerTables>
            <TableCLT/>
            <TablePJ />
          </ContainerTables>
          <NewSimulation />
        </Container>
      </PageContainer>
    </>
  );
};

export default SummaryPage;
