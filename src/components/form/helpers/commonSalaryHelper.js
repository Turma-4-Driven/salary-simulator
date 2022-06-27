import { currencyRound } from '../../../helpers/currencyHelper';

/**
 * Função que calcula um desconto através de uma tabela de faixas com taxas progressivas
 * @param {number} value Valor a ser calculado o desconto
 * @param {taxInfo[]} taxList Lista com as faixas de desconto, será algo da forma:
 * [
 *   {
 *      startRangeValue: 3641.04,
 *      endRangeValue?: 7087.22,
 *      tax: 14.0,
 *   }
 * ]
 * @returns {number} valor do desconto a partir das faixas
 */
const calculateRangeTableDiscount = (value, taxList) => {
  const completeTaxList = makeRangeTaxesWithEnd(taxList);
  const discount = completeTaxList.reduce((totalDiscount, taxInfo) => {
    const { startRangeValue, endRangeValue, tax } = taxInfo;

    const isValueInTaxRange = Boolean(startRangeValue <= value);
    if (!isValueInTaxRange) return totalDiscount;

    const discountBase = value >= endRangeValue
      ? endRangeValue - startRangeValue
      : value - startRangeValue;

    return totalDiscount + discountBase * (tax / 100);
  }, 0);

  return currencyRound(discount);
};

const makeRangeTaxesWithEnd = (taxList) => {
  const output = taxList.map((taxInfo, index) => {
    const endRangeValue = taxList[index+1] !== undefined
      ? taxList[index+1].startRangeValue
      : taxInfo.endRangeValue || +Infinity;

    return {
      ...taxInfo,
      endRangeValue,
    };
  });

  return output;
};

const calculateAnualSalary = ({ monthlySalary, monthlyNetSalary }) => {
  return {
    annualSalary: currencyRound(monthlySalary * 12),
    annualNetSalary: currencyRound(monthlyNetSalary * 12),
  };
};

export {
  calculateRangeTableDiscount,
  calculateAnualSalary,
};
