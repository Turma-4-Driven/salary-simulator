import { 
  Container, 
  ContainerProjectionsAnual, 
  ContainerProjectionsMensal, 
  ProjectionAnual, 
  ProjectionMensal, 
  ProjectionsAnual, 
  ProjectionsMensal 
} from './style';

import { tableInfosPJ } from '../../utils';

const ProjectionsPJ = () => {
  return (
    <Container>
      {
        tableInfosPJ.map((projections, index) => (
          <>
            <ContainerProjectionsMensal key={index}>
              <h1>Projeção Mensal:</h1>
              <ProjectionsMensal>
                {
                  projections.monthlyProjection.map((monthlyProjection, i) => (
                    monthlyProjection.name === 'Salário Líquido' ||
                    monthlyProjection.name === 'Benefícios (total)' ?

                      <ProjectionMensal focus key={i}>
                        <strong>{`${monthlyProjection.name}:`}</strong>
                        <span>{`R$ ${monthlyProjection.value}`}</span>
                      </ProjectionMensal>
                      :
                      <ProjectionMensal key={i}>
                        <strong>{`${monthlyProjection.name}:`}</strong>
                        <span>{`R$ ${monthlyProjection.value}`}</span>
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
                      <span>{`R$ ${annualProjection.value}`}</span>
                    </ProjectionAnual>
                  ))
                }
              </ProjectionsAnual>
            </ContainerProjectionsAnual>
          </>
        ))
      }
    </Container>
  );
};

export default ProjectionsPJ;
