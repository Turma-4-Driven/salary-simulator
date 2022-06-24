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
		height: 100%;
	}
`;

export {
  Container,
};
