import { useNavigate } from 'react-router-dom';

import PageContainer from '../../components/pageContainer';

import { 
  Container, 
  ContainerAbout, 
  Salutation, 
  Description, 
  Modalities, 
  Title,
  Options, 
  Option, 
} from './style';

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
          <Title>Bora lá?!</Title>
          <Options>
            <Option onClick={() => navigate('/calculator-page')}>Iniciar</Option>
          </Options>
        </Modalities>
      </Container>
    </PageContainer>
  );
};

export default Home;
