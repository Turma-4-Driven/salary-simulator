
import { Box, DataTable, Grommet } from 'grommet';
import styled from 'styled-components';

const TableCLT = () => {
  return(
		<Grommet theme={theme}>
			<Box align="center" pad="large">
				<DataTable 
					data={Data} 
					step={10} 
					columns= {[
						{
							property: 'name',
							header: 'Dados',
							primary: true,
							footer: true,
							render: (data) => data.name
						},
						{
							property: 'paid',
							header: 'Valor',
							render: (data) => data.value,
						},
					]}
					color={'ffffff'}
				/>
				<Box direction='row' gap='40px'>
					<span>Total</span>
					{
						valueTotal.map((value) => (
							<span>{value}</span>
						))
					}
				</Box>
			</Box>
		</Grommet>
  );
}

const Data = [
	{ name: 'Alan', value: 50 },
	{ name: 'Bryan', value: 60 },
	{ name: 'Chris', value: 70},
	{ name: 'Eric', value: 80},
]

console.table(Data);

const valueTotal = [260]

const theme = {
	global: {
		colors: {
			border: '#FF69B4',
		},
		font: {
			family: 'Roboto',
			size: '18px',
			height: '20px',
		},
	}
};

export default TableCLT;

const Text = styled.span`
justify-content: space-between;
`