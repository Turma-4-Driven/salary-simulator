import Container from '../components/Page';
import styled from 'styled-components';

export default function Dashboard({ children }) {
	return (
		<Container>
			<StyledTitle>Salary Calculator</StyledTitle>
			<DashboardComponent>{children}</DashboardComponent>
		</Container>
	);
}

const DashboardComponent = styled.div`
  background: #fff;
  margin: auto;
  min-height: 600px;
  border-radius: 10px;
`;

const StyledTitle = styled.h1`
  color: #fff;
  text-align: center;
  margin: 30px 0 50px 0;
`;
