import PageContainer from '../../components/pageContainer';

import TableCLT from '../../components/tables/tableCLT';
import TablePJ from '../../components/tables/tablePJ';
import { Container } from './style';

const SummaryPage = () => {
  return(
    <PageContainer>
      <Container>
        <TableCLT/>
        <TablePJ />
      </Container>
    </PageContainer>
  );
};

export default SummaryPage;
