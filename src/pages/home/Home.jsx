import { useNavigate } from 'react-router-dom';

import PageContainer from '../../components/pageContainer/pageContainer';

import { 
  Container, 
  ContainerAbout, 
  Salutation, 
  Description, 
  Modalities, 
  Title,
  Options, 
  Option, 
} from "./style";

const Home = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <Container>
        <ContainerAbout>
          <Salutation>Bem-Vindo à Salary Simulador</Salutation>
          <Description>
            Ajudamos escolher qual o melhor <br/>
            salário para você!
          </Description>
        </ContainerAbout>

        <Modalities>
          <Title>Modalidades:</Title>
          <Options>
            <Option onClick={() => navigate('/page-clt')}>CLT</Option>
            <Option onClick={() => navigate('/page-pj')}>PJ</Option>
          </Options>
        </Modalities>
      </Container>
    </PageContainer>
  );
}

export default Home;
