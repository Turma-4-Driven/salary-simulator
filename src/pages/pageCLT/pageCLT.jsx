import PageContainer from '../../components/pageContainer/pageContainer';
import { 
	Calculator, 
	Container, 
	FormInfos, 
	GrossSalary, 
	Name, 
	Title 
} from './style';

//import TableCLT from '../../components/tableCLT';

const PageCLT = () => {
	const benefits = [
		{
			name: 'Vale Refeição/Alimentação',
			value: 500
		},
		{
			name: 'Plano de Saúde',
			value: 800
		},
		{
			name: 'Outros Benefícios',
			value: 900
		},
	]	
	
	return(
		<PageContainer>
			<Container>
				<FormInfos>
					<Title>Salário bruto:</Title>
					<GrossSalary
						placeholder='R$ 4000' 
					/>
					<Title>Benefícios:</Title>
					{
						benefits.map((benefit) => (
							<>
								<Name>{benefit.name}:</Name>
								<GrossSalary placeholder={`R$ ${benefit.value}`}/>
							</>
						))
					}
					<Calculator>Calcular</Calculator>
				</FormInfos>

			</Container>
		</PageContainer>
	);
}

export default PageCLT;
