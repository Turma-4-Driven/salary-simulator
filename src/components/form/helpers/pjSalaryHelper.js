import { currencyRound } from '../../../helpers/currencyHelper';
import { calculateAnualSalary } from './commonSalaryHelper';

import {
  CNPJ_MONTHLY_COST_DEFAULT,
  FEDERAL_TAX_MULTIPLIER,
  MONTHLY_CNPJ_OPEN_COST,
  PJ_INSS_TAX_MULTIPLIER,
  PRO_LABOR_MULTIPLIER,
} from '../utils/cltAndPjSalaryInfo';

const calculatePjIr = (salary) => {
  return currencyRound(salary * FEDERAL_TAX_MULTIPLIER);
};

const calculateProLabor = (salary) => {
  return currencyRound(salary * PRO_LABOR_MULTIPLIER);
};

const calculatePjInss = (proLabor) => {
  return currencyRound(proLabor * PJ_INSS_TAX_MULTIPLIER);
};

const calculateCnpjMonthlyCost = (accountingValue) => {
  const monthlyAccountingValue = Boolean(typeof accountingValue === 'number')
    ? accountingValue
    : CNPJ_MONTHLY_COST_DEFAULT;

  return currencyRound(MONTHLY_CNPJ_OPEN_COST + monthlyAccountingValue);
};

const calculatePjMonthlySalary = ({
  salary,
  ir,
  inss,
  salary13,
  vacationSalary,
  totalBenefits,
  cnpjMonthlyCost,
}) => {
  // Considerei que tanto o 13º quanto as férias são valores dados a parte, não precisando ser os comuns calculados no CLT
  const monthlySalary13 = salary13 / 12 || 0;
  const monthlyVacationSalary = vacationSalary / 12 || 0;

  const monthlySalary = salary + monthlySalary13 + monthlyVacationSalary + totalBenefits;
  const monthlyDiscounts = ir + inss + cnpjMonthlyCost;
  const monthlyNetSalary = monthlySalary - monthlyDiscounts;

  return {
    monthlySalary: currencyRound(monthlySalary),
    monthlyDiscounts: currencyRound(monthlyDiscounts),
    monthlyNetSalary: currencyRound(monthlyNetSalary),
  };
};

const calculatePjSalaryInfo = ({
  salary=0,
  foodVoucher=0,
  healthPlan=0,
  otherBenefits=0,
  salary13=0,
  vacationSalary=0,
  accountingValue,
}) => {
  const ir = calculatePjIr(salary);

  const proLabor = calculateProLabor(salary);

  const inss = calculatePjInss(proLabor);

  const totalBenefits = foodVoucher + healthPlan + otherBenefits;

  const cnpjMonthlyCost = calculateCnpjMonthlyCost(accountingValue);

  const {
    monthlySalary,
    monthlyDiscounts,
    monthlyNetSalary,
  } = calculatePjMonthlySalary({
    salary,
    ir,
    inss,
    salary13,
    vacationSalary,
    totalBenefits,
    cnpjMonthlyCost,
  });

  const { annualSalary, annualNetSalary } = calculateAnualSalary({
    monthlySalary,
    monthlyNetSalary,
  });

  return {
    salary,
    inss,
    ir,
    proLabor,
    foodVoucher,
    healthPlan,
    otherBenefits,
    totalBenefits,
    cnpjMonthlyCost,
    salary13,
    vacationSalary,
    monthlySalary,
    monthlyDiscounts,
    monthlyNetSalary,
    annualSalary,
    annualNetSalary,
  };
};

export {
  calculatePjSalaryInfo,
};
