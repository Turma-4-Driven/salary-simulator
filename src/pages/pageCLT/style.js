import styled from 'styled-components';

const Container = styled.div`
	width: 70%;
	height: 600px;

	border-radius: 10px;

	display: flex;
	justify-content: center;
	//flex-direction: column;
	align-items: center;

	background-color: #121212;
	box-shadow: 0 3px 15px rgba(245, 40, 145, 0.8);

	@media (max-width: 840px) {
			width: 80%;
	}
`;

const FormInfos = styled.form`
  width: 90%;

	display: flex;
	flex-direction: column;
`;

const Title = styled.strong`
	color: white;
	margin: 10px 0 10px 0;

	font-weight: 400;
	font-size: 18px;
	letter-spacing: 3px;
`;

const Name = styled.span`
	color: white;
	margin: 8px 0 5px 0;

	font-weight: 300;
	font-size: 16px;
	letter-spacing: 2px;
`;

const GrossSalary = styled.input`
	width: 250px;
	height: 35px;

	background-color: #121212;
	border-radius: 3px;
	border: 1px solid #ff4791;

	outline: none;

	padding-left: 10px;
	margin: 5px 0 15px 0;

	::placeholder{
		color: white;
		opacity: 0.5;
	}
`; 

const Calculator = styled.button`
	width: 150px;
	height: 40px;

	background-color: #ff4791;
	color: white;

	margin-top: 10px;

	cursor: pointer;

	font-weight: 500;
	font-size: 16px;
	letter-spacing: 0.5px;
	text-transform: uppercase;
`;

export {
	Container,
	FormInfos,
	Title,
	Name,
	GrossSalary,
	Calculator,
}
