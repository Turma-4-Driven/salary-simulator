import PageContainer from '../../components/pageContainer';
import Form from '../../components/form';
import Header from '../../components/header';

import { Container } from './style';

const SimulatorPage = () => {

  return(
    <>
      <Header />
      <PageContainer>
        <Container>
          <Form />
        </Container>
      </PageContainer>
    </>
  );
};

export default SimulatorPage;
