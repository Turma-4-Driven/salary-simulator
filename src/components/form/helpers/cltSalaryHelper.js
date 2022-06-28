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
} from '../utils/cltAndPjSalaryInfo';

const calculateDependentsDeduction = (dependentsQuantity) => {
  return currencyRound(dependentsQuantity * DEPENDENT_DEDUCTION);
};

const calculateTotalDeductions = ({ dependentsQuant, otherDeductions }) => {
  const dependentDeduction = calculateDependentsDeduction(dependentsQuant);

  return currencyRound(dependentDeduction + otherDeductions);
};

const calculateCltInssAndIr = ({ salary, totalDeductions }) => {
  const inss = calculateRangeTableDiscount(salary, CLT_INSS_TAXES);
  const deductions = inss + totalDeductions;

  const baseSalaryForIr = salary - deductions;
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
  accountingValue,
}) => {
  const salaryWithBenefits = salary + totalBenefits;
  const vacationWithFgts = vacationSalary + calculateCltFgts(vacationSalary);

  const monthlySalary = salaryWithBenefits * (13 / 12) + (vacationWithFgts / 12);  // salário, décimo terceiro e férias; não considero que as férias terão benefícios (VA/VR, ...)
  const monthlyDiscounts = (inss + ir) * (13 / 12) + ((vacationInss + vacationIr) / 12) + accountingValue;
  const monthlyNetSalary = monthlySalary - monthlyDiscounts;

  return {
    monthlySalary: currencyRound(monthlySalary),
    monthlyDiscounts: currencyRound(monthlyDiscounts),
    monthlyNetSalary: currencyRound(monthlyNetSalary),
  };
};

const calculateCltSalaryInfo = ({
  salary=0,
  foodVoucher=0,
  healthPlan=0,
  otherBenefits=0,
  dependentsQuant=0,
  otherDeductions=0,
  accountingValue=0,
}) => {
  const totalDeductions = calculateTotalDeductions({
    dependentsQuant,
    otherDeductions
  });
  
  const { inss, ir } = calculateCltInssAndIr({ salary, totalDeductions });

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
    totalBenefits,
    totalDeductions,
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
