import { currencyRound } from '../../../helpers/currencyHelper';
import { calculateAnualSalary } from './commonSalaryHelper';

import {
  CNPJ_MONTHLY_COST_DEFAULT,
  FEDERAL_TAX_MULTIPLIER,
  MONTHLY_CNPJ_OPEN_COST,
  PJ_INSS_TAX_MULTIPLIER,
  PRO_LABOR_MULTIPLIER,
} from '../utils/CltAndPjSalaryInfo';

const calculatePjIr = (salary) => {
  return currencyRound(salary * FEDERAL_TAX_MULTIPLIER);
};

const calculateProLabor = (salary) => {
  return currencyRound(salary * PRO_LABOR_MULTIPLIER);
};

const calculatePjInss = (proLabor) => {
  return currencyRound(proLabor * PJ_INSS_TAX_MULTIPLIER);
};

const calculatePjMonthlySalary = ({
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
  const monthlyAccountingValue = accountingValue || CNPJ_MONTHLY_COST_DEFAULT;

  const monthlySalary = salary + monthlySalary13 + monthlyVacationSalary + totalBenefits;
  const monthlyDiscounts = ir + inss + MONTHLY_CNPJ_OPEN_COST + monthlyAccountingValue;
  const monthlyNetSalary = monthlySalary - monthlyDiscounts;

  return {
    monthlySalary: currencyRound(monthlySalary),
    monthlyDiscounts: currencyRound(monthlyDiscounts),
    monthlyNetSalary: currencyRound(monthlyNetSalary),
  };
};

const calculatePjSalaryInfo = ({
  salary,
  foodVoucher,
  healthPlan,
  otherBenefits,
  salary13,
  vacationSalary,
  accountingValue,
}) => {
  const ir = calculatePjIr(salary);

  const proLabor = calculateProLabor(salary);

  const inss = calculatePjInss(proLabor);

  const totalBenefits = foodVoucher + healthPlan + otherBenefits;

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
    accountingValue,
  });

  const { annualSalary, annualNetSalary } = calculateAnualSalary({
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
  calculatePjSalaryInfo,
};
