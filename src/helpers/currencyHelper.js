const currencyRound = (value) => Math.round(value * 100) / 100;

const toBrazilianCurrency = (value) => {
	const currencyOptions = { style: 'currency', currency: 'BRL' };
	return value.toLocaleString('pt-br', currencyOptions);
};

export {
	currencyRound,
	toBrazilianCurrency,
};
