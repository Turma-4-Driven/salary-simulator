import { currencyRound } from '../../../helpers/currencyHelper';
import {
  calculateAnualSalary,
  calculateRangeTableDiscount
} from './commonSalaryHelper';

import {
  CLT_INSS_TAXES,
  CLT_IR_TAXES,
  DEPENDENT_DEDUCTION,
  FGTS_MULTIPLIER,
  VACATION_SALARY_MULTIPLIER,
} from '../utils/CltAndPjSalaryInfo';

const calculateDependentsDeduction = (dependentsQuantity) => {
  return currencyRound(dependentsQuantity * DEPENDENT_DEDUCTION);
};

const calculateCltInssAndIr = ({ salary, dependentsQuant, otherDeductions }) => {
  const inss = calculateRangeTableDiscount(salary, CLT_INSS_TAXES);
  const DEPENDENT_DEDUCTION = calculateDependentsDeduction(dependentsQuant);
  const totalDeductions = inss + DEPENDENT_DEDUCTION + otherDeductions;

  const baseSalaryForIr = salary - totalDeductions;
  const ir = calculateRangeTableDiscount(baseSalaryForIr, CLT_IR_TAXES);

  return {
    inss,
    ir,
  };
};

const calculateCltFgts = (salary) => {
  return currencyRound(salary * FGTS_MULTIPLIER);
};

const calculateVacationSalary = (salary) => {
  return currencyRound(salary * VACATION_SALARY_MULTIPLIER);
};

const calculateCltMonthlySalary = ({
  salary,
  inss,
  ir,
  vacationSalary,
  vacationInss,
  vacationIr,
  totalBenefits,
}) => {
  const salaryWithBenefits = salary + totalBenefits;
  const vacationWithFgts = vacationSalary + calculateCltFgts(vacationSalary);

  const monthlySalary = salaryWithBenefits * (13 / 12) + (vacationWithFgts / 12);  // salário, décimo terceiro e férias; não considero que as férias terão benefícios (VA/VR, ...)
  const monthlyDiscounts = (inss + ir) * (13 / 12) + ((vacationInss + vacationIr) / 12);
  const monthlyNetSalary = monthlySalary - monthlyDiscounts;

  return {
    monthlySalary: currencyRound(monthlySalary),
    monthlyDiscounts: currencyRound(monthlyDiscounts),
    monthlyNetSalary: currencyRound(monthlyNetSalary),
  };
};

const calculateCltSalaryInfo = ({
  salary,
  foodVoucher,
  healthPlan,
  otherBenefits,
  dependentsQuant,
  otherDeductions,
}) => {
  const { inss, ir } = calculateCltInssAndIr({
    salary,
    dependentsQuant,
    otherDeductions,
  });

  const fgts = calculateCltFgts(salary);

  const vacationSalary = calculateVacationSalary(salary);
  const { inss: vacationInss, ir: vacationIr } = calculateCltInssAndIr({
    salary: vacationSalary,
    dependentsQuant,
    otherDeductions,
  });

  const totalBenefits = fgts + foodVoucher + healthPlan + otherBenefits;

  const {
    monthlySalary,
    monthlyDiscounts,
    monthlyNetSalary,
  } = calculateCltMonthlySalary({
    salary,
    inss,
    ir,
    vacationSalary,
    vacationInss,
    vacationIr,
    totalBenefits,
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

export {
  calculateCltSalaryInfo,
};
