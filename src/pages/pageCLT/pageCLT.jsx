import PageContainer from '../../components/pageContainer/pageContainer';
import { 
	Calculate, 
	Container, 
	ContainerInputsInfo, 
	InputForm, 
	Name, 
	Title,
	Modality,
	FormInfos,
	ContainerFormInfos
} from './style';

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

	function teste(){
		console.log('ue')
	}
	
	return(
		<PageContainer>
			<Container>
				<ContainerFormInfos>

					<FormInfos>
						<ContainerInputsInfo>
							<Modality>CLT</Modality>
							<Title>Salário bruto:</Title>
							<InputForm
								placeholder='R$ 4000' 
							/>
							<Title>Benefícios:</Title>
							{
								benefits.map((benefit, index) => (
									<>
										<Name>{benefit.name}:</Name>
										<InputForm key={index}
											placeholder={`R$ ${benefit.value}`}
										/>
									</>
								))
							}
						</ContainerInputsInfo>

						<ContainerInputsInfo>
							<Modality>PJ</Modality>
							<Title>Salário bruto:</Title>
							<InputForm
								placeholder='R$ 4000' 
							/>
							<Title>Benefícios:</Title>
							{
								benefits.map((benefit, index) => (
									<>
										<Name>{benefit.name}:</Name>
										<InputForm key={index}
											placeholder={`R$ ${benefit.value}`}
										/>
									</>
								))
							}
						</ContainerInputsInfo>
					</FormInfos>
					<Calculate onClick={teste}>Calcular</Calculate>
				</ContainerFormInfos>

			</Container>
		</PageContainer>
	);
}

export default PageCLT;
