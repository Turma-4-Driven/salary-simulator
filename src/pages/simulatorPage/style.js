import styled from 'styled-components';

const Container = styled.div`
	width: 70%;
	height: 600px;
  padding-top: 20px;

	border-radius: 10px;

	display: flex;
	justify-content: center;
	//flex-direction: column;
	align-items: start;

	background-color: #202020;
	box-shadow: 0 3px 15px rgba(245, 40, 145, 0.8);

  overflow: auto;
  ::-webkit-scrollbar {
    width: 2px;
    height: 0;
  }
  ::-webkit-scrollbar-thumb {
    background: #ff4791;
  }

	@media (max-width: 840px) {
		width: 80%;
		height: 100%;
	}
`;

export {
  Container,
};
