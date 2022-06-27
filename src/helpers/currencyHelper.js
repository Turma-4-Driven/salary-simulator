const currencyRound = (value) => Math.round(value * 100) / 100;

const toBrazilianCurrency = (value) => {
  const currencyOptions = { style: 'currency', currency: 'BRL' };
  return value.toLocaleString('pt-br', currencyOptions);
};

const fromCurrencyToNumber = (currencyValue='0') => {
  if (typeof currencyValue === 'number') return currencyValue;
  
  const numberStr = currencyValue.replace(/[R$ .]+/g, '').replace(',', '.');
  return Number(numberStr);
};

export {
  currencyRound,
  toBrazilianCurrency,
  fromCurrencyToNumber,
};
