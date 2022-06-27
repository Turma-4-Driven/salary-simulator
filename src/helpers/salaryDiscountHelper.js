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
// Dados de deduções por dependente atualizados com valores de 2022
const dependentDeduction = 189.59;
const fgtsMultiplier = (8 / 100);
const vacationSalaryMultiplier = (1 + 1/3);

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
const calcRangeTableDiscount = (value, taxList) => {
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

const calcDependentsDeduction = (dependentsQuantity) => {
  return currencyRound(dependentsQuantity * dependentDeduction);
};

const calcCltInssAndIr = ({ salary, dependentsQuant, otherDeductions }) => {
  const inss = calcRangeTableDiscount(salary, cltInssTaxes);
  const dependentDeduction = calcDependentsDeduction(dependentsQuant);
  const totalDeductions = inss + dependentDeduction + otherDeductions;

  const baseSalaryForIr = salary - totalDeductions;
  const ir = calcRangeTableDiscount(baseSalaryForIr, cltIrTaxes);

  return {
    inss,
    ir,
  };
};

const calcCltFgts = (salary) => {
  return currencyRound(salary * fgtsMultiplier);
};

const calcVacationSalary = (salary) => {
  return currencyRound(salary * vacationSalaryMultiplier);
};

const calcCltMonthlySalary = ({
  salary,
  inss,
  ir,
  vacationSalary,
  vacationInss,
  vacationIr,
  totalBenefits,
}) => {
  const salaryWithBenefits = salary + totalBenefits;
  const vacationWithFgts = vacationSalary + calcCltFgts(vacationSalary);
  const monthlySalary = salaryWithBenefits * (13 / 12) + (vacationWithFgts / 12);  // salário, décimo terceiro e férias; não considero que as férias terão benefícios (VA/VR, ...)
  const monthlyDiscounts = (inss + ir) + ((inss + ir) / 12) + ((vacationInss + vacationIr) / 12);
  const monthlyNetSalary = monthlySalary - monthlyDiscounts;

  return {
    monthlySalary: currencyRound(monthlySalary),
    monthlyDiscounts: currencyRound(monthlyDiscounts),
    monthlyNetSalary: currencyRound(monthlyNetSalary),
  };
};

const calcCltAnualSalary = ({ monthlySalary, monthlyNetSalary }) => {
  return {
    annualSalary: currencyRound(monthlySalary * 12),
    annualNetSalary: currencyRound(monthlyNetSalary * 12),
  };
};

const calcCltSalaryInfo = ({
  salary,
  foodVoucher,
  healthPlan,
  otherBenefits,
  dependentsQuant,
  otherDeductions,
}) => {
  const { inss, ir } = calcCltInssAndIr({
    salary,
    dependentsQuant,
    otherDeductions,
  });

  const fgts = calcCltFgts(salary);

  const vacationSalary = calcVacationSalary(salary);
  const { inss: vacationInss, ir: vacationIr } = calcCltInssAndIr({
    salary: vacationSalary,
    dependentsQuant,
    otherDeductions,
  });

  const totalBenefits = fgts + foodVoucher + healthPlan + otherBenefits;

  const {
    monthlySalary,
    monthlyDiscounts,
    monthlyNetSalary,
  } = calcCltMonthlySalary({
    salary,
    inss,
    ir,
    vacationSalary,
    vacationInss,
    vacationIr,
    totalBenefits,
  });

  const { annualSalary, annualNetSalary } = calcCltAnualSalary({
    monthlySalary,
    monthlyNetSalary,
  });

  return {
    salary,
    inss,
    ir,
    foodVoucher,
    healthPlan,
    otherBenefits,
    salary13: salary,
    fgts,
    vacationSalary,
    monthlySalary,
    monthlyDiscounts,
    monthlyNetSalary,
    annualSalary,
    annualNetSalary,
  };
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

console.log(calcCltSalaryInfo({
  salary: 10000,
  foodVoucher: 700,
  healthPlan: 300,
  otherBenefits: 500,
  dependentsQuant: 0,
  otherDeductions: 0,
}));
*/
