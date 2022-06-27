import PageContainer from '../../components/pageContainer';
import Form from '../../components/form';
import Header from '../../components/header';

import { Container } from './style';

const CalculatorPage = () => {

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

export default CalculatorPage;
