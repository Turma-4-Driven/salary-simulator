import { 
	Calculate, 
	FormInfos, 
	ContainerInputsInfo, 
	ContainerInfos, 
	InputForm, 
	Modality, 
	Name, 
	Title 
} from "./style"

import typeSalary from "../../utils";

const Form = () => {

	const calculate = (e) => {
		e.preventDefault();
		console.log('ue')
	}

	const handleChange = (e) => {
		console.log({ [e.target.name]: e.target.value });
	}

	return(
		<FormInfos onSubmit={calculate}>
			<ContainerInfos>
				{
					typeSalary.map(( typeSalary, index ) => (
						<ContainerInputsInfo>
							<Modality>{typeSalary.modality}</Modality>

							<Title>{typeSalary.title}:</Title>
							<InputForm key={index}
								name={`${typeSalary.title}`}
								placeholder={`R$ ${typeSalary.placeholder}`}
								onChange={handleChange}
							/>

							<Title>{typeSalary.titleInput}:</Title>
							{
								typeSalary.benefits.map((benefits, index) => (
									<>
										<Name>{benefits.name}:</Name>
										<InputForm key={index}
											name={`${benefits.name}`}
											placeholder={`R$ ${benefits.value}`}
											onChange={handleChange}
										/>
									</>
								))
							}
						</ContainerInputsInfo>
					))
				}
			</ContainerInfos>
			<Calculate type='submit'>Calcular</Calculate>
		</FormInfos>
	);
}

export default Form;
