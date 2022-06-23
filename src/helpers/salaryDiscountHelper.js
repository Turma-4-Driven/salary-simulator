import { currencyRound } from './currencyHelper';

// Dados de IR atualizados com valores de 2022
const cltIrTaxes = [
	{
		startRangeValue: 0.00,
		tax: 0.0,
	},
	{
		startRangeValue: 1903.98,
		tax: 7.5,
	},
	{
		startRangeValue: 2826.65,
		tax: 15.0,
	},
	{
		startRangeValue: 3751.05,
		tax: 22.5,
	},
	{
		startRangeValue: 4664.68,
		tax: 27.5,
	},
];
// Dados de INSS atualizados com valores de 2022
const cltInssTaxes = [
	{
		startRangeValue: 0.00,
		tax: 7.5,
	},
	{
		startRangeValue: 1212.01,
		tax: 9.0,
	},
	{
		startRangeValue: 2427.36,
		tax: 12.0,
	},
	{
		startRangeValue: 3641.04,
		endRangeValue: 7087.22,
		tax: 14.0,
	},
];

/**
 * Função que calcula um desconto através de uma tabela de faixas com taxas progressivas
 * @param {number} value Valor a ser calculado o desconto
 * @param {array} taxList Lista com as faixas de desconto, será algo da forma:
 * [
 * 	{
 * 		startRangeValue: 3641.04,
			endRangeValue?: 7087.22,
			tax: 14.0,
 * 	}
 * ]
 * @returns valor do desconto a partir das faixas
 */
const calcRangeTableDiscount = (value, taxList) => {
	const completeTaxList = makeRangeTaxesWithEnd(taxList);
	const discount = completeTaxList.reduce((totalDiscount, taxInfo) => {
		const { startRangeValue, endRangeValue, tax } = taxInfo;

		const isValueInTaxRange = Boolean(startRangeValue <= value);
		if (!isValueInTaxRange) return totalDiscount;

		const discountBase = Boolean(value >= endRangeValue)
			? endRangeValue - startRangeValue
			: value - startRangeValue;

		return totalDiscount + discountBase * (tax / 100);
	}, 0);

	return currencyRound(discount);
};

const makeRangeTaxesWithEnd = (taxList) => {
	const output = taxList.map((taxInfo, index) => {
		const endRangeValue = Boolean(taxList[index+1] !== undefined)
			? taxList[index+1].startRangeValue
			: taxInfo.endRangeValue || +Infinity;

		return {
			...taxInfo,
			endRangeValue,
		};
	});

	return output;
};


/* Tests
const currencyRound = (value) => Math.round(value * 100) / 100;
const value = 5000;

const discountInss = calcRangeTableDiscount(value, cltInssTaxes);
const discountIr = calcRangeTableDiscount(value - discountInss, cltIrTaxes);
console.log({ 
	discountInss,
	discountIr,
});
*/
