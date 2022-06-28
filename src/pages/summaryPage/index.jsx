import PageContainer from '../../components/pageContainer';

import { Container, ContainerTables } from './style';

import NewSimulation from '../../components/newSimulation';
import Header from '../../components/header';
import SummaryTable from '../../components/summaryTable';

const SummaryPage = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <Container>
          <ContainerTables>
            <SummaryTable type='clt' />
            <SummaryTable type='pj' />
          </ContainerTables>
          <NewSimulation />
        </Container>
      </PageContainer>
    </>
  );
};

export default SummaryPage;
