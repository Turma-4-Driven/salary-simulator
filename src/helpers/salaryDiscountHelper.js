import { currencyRound } from './currencyHelper';
// const currencyRound = (value) => Math.round(value * 100) / 100;

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
// Multiplicadores de métricas CLT atualizados com valores de 2022
const fgtsMultiplier = (8 / 100);
const vacationSalaryMultiplier = (1 + 1/3);
// Multiplicadores de métricas PJ atualizados com valores de 2022
const federalTaxMultiplier = (6 / 100);
const proLaborMultiplier = (28 / 100);
const pjInssTaxMultiplier = (11 / 100);
// Estipulação de custo para abertura de um CNPJ, valores atualizados de 2022
const cnpjOpenCosts = [
  {
    name: 'Abertura',
    value: 1300,
  },
  {
    name: 'Alvará',
    value: 300.00,
  },
  {
    name: 'Certificados Digitais',
    value: 235.00,
  },
  {
    name: 'Valor Total',
    value: 1835.00,
  },
];
const totalCnpjOpenCost = cnpjOpenCosts.reduce((acc, cur) => acc + cur.value, 0);
const monthlyCnpjOpenCost = currencyRound(totalCnpjOpenCost / 12);
// Estipulação do custo mensal com contabilidade de um CNPJ
const cnpjMonthlyCostDefault = 250;

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


// Cálculos para CLT
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
  const monthlyDiscounts = (inss + ir) * (13 / 12) + ((vacationInss + vacationIr) / 12);
  const monthlyNetSalary = monthlySalary - monthlyDiscounts;

  return {
    monthlySalary: currencyRound(monthlySalary),
    monthlyDiscounts: currencyRound(monthlyDiscounts),
    monthlyNetSalary: currencyRound(monthlyNetSalary),
  };
};

const calcAnualSalary = ({ monthlySalary, monthlyNetSalary }) => {
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

  const { annualSalary, annualNetSalary } = calcAnualSalary({
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

// Cálculos para PJ
const calcPjIr = (salary) => {
  return currencyRound(salary * federalTaxMultiplier);
};

const calcProLabor = (salary) => {
  return currencyRound(salary * proLaborMultiplier);
};

const calcPjInss = (proLabor) => {
  return currencyRound(proLabor * pjInssTaxMultiplier);
};

const calcPjMonthlySalary = ({
  salary,
  ir,
  inss,
  salary13,
  vacationSalary,
  totalBenefits,
  accountingValue,
}) => {
  // Considerei que tanto o 13º quanto as férias são valores dados a parte, não precisando ser os comuns calculados no CLT
  const monthlySalary13 = salary13 / 12 || 0;
  const monthlyVacationSalary = vacationSalary / 12 || 0;
  const monthlyAccountingValue = accountingValue || cnpjMonthlyCostDefault;

  const monthlySalary = salary + monthlySalary13 + monthlyVacationSalary + totalBenefits;
  const monthlyDiscounts = ir + inss + monthlyCnpjOpenCost + monthlyAccountingValue;
  const monthlyNetSalary = monthlySalary - monthlyDiscounts;

  return {
    monthlySalary: currencyRound(monthlySalary),
    monthlyDiscounts: currencyRound(monthlyDiscounts),
    monthlyNetSalary: currencyRound(monthlyNetSalary),
  };
};

const calcPjSalaryInfo = ({
  salary,
  foodVoucher,
  healthPlan,
  otherBenefits,
  salary13,
  vacationSalary,
  accountingValue,
}) => {
  const ir = calcPjIr(salary);

  const proLabor = calcProLabor(salary);

  const inss = calcPjInss(proLabor);

  const totalBenefits = foodVoucher + healthPlan + otherBenefits;

  const {
    monthlySalary,
    monthlyDiscounts,
    monthlyNetSalary,
  } = calcPjMonthlySalary({
    salary,
    ir,
    inss,
    salary13,
    vacationSalary,
    totalBenefits,
    accountingValue,
  });

  const { annualSalary, annualNetSalary } = calcAnualSalary({
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
    salary13: salary13 || 0,
    vacationSalary: vacationSalary || 0,
    monthlySalary,
    monthlyDiscounts,
    monthlyNetSalary,
    annualSalary,
    annualNetSalary,
  };
};


export {
  calcCltSalaryInfo,
  calcPjSalaryInfo,
};



/* Tests
const value = 5000;

const discountInss = calcRangeTableDiscount(value, cltInssTaxes);
const discountIr = calcRangeTableDiscount(value - discountInss, cltIrTaxes);
console.log({ 
  discountInss,
  discountIr,
});

console.log('CLT:');
console.log(calcCltSalaryInfo({
  salary: 7000,
  foodVoucher: 700,
  healthPlan: 300,
  otherBenefits: 500,
  dependentsQuant: 0,
  otherDeductions: 0,
}));

console.log('PJ:');
console.log(calcPjSalaryInfo({
  salary: 9100,
  foodVoucher: 700,
  healthPlan: 300,
  otherBenefits: 500,
  // salary13: 0,
  // vacationSalary: 0,
  // accountingValue,
}));
*/
