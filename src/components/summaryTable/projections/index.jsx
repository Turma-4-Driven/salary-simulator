import { toBrazilianCurrency } from '../../../helpers/currencyHelper';

import { 
  Container, 
  ContainerProjectionsAnual, 
  ContainerProjectionsMensal, 
  ProjectionAnual, 
  ProjectionMensal, 
  ProjectionsAnual, 
  ProjectionsMensal,
} from './style';

const Projections = ({ projections }) => {
  const isFocus = (name) => {
    return Boolean(name === 'Salário Líquido' || name === 'Benefícios (total)');
  };
  
  return (
    <Container>
      <ContainerProjectionsMensal>
        <h1>Projeção Mensal:</h1>
        <ProjectionsMensal>
          {
            projections.monthlyProjection.map((monthlyProjection, i) => (
              <ProjectionMensal focus={isFocus(monthlyProjection.name)} key={i}>
                <strong>{`${monthlyProjection.name}:`}</strong>
                <span>{toBrazilianCurrency(monthlyProjection.value)}</span>
              </ProjectionMensal>
            ))
          }
        </ProjectionsMensal>
      </ContainerProjectionsMensal>

      <ContainerProjectionsAnual>
        <h1>Projeção Anual:</h1>
        <ProjectionsAnual>
          {
            projections.annualProjection.map((annualProjection, i) => (
              <ProjectionAnual key={i}>
                <strong>{`${annualProjection.name}:`}</strong>
                <span>{toBrazilianCurrency(annualProjection.value)}</span>
              </ProjectionAnual>
            ))
          }
        </ProjectionsAnual>
      </ContainerProjectionsAnual>
    </Container>
  );
};

export default Projections;
