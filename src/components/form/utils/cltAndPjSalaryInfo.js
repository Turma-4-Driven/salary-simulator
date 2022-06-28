import { currencyRound } from '../../../helpers/currencyHelper';

// Dados de IR atualizados com valores de 2022
const CLT_IR_TAXES = [
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
const CLT_INSS_TAXES = [
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
const DEPENDENT_DEDUCTION = 189.59;
// Multiplicadores de métricas CLT atualizados com valores de 2022
const FGTS_MULTIPLIER = (8 / 100);
const VACATION_SALARY_MULTIPLIER = (1 + 1/3);
// Multiplicadores de métricas PJ atualizados com valores de 2022
const FEDERAL_TAX_MULTIPLIER = (6 / 100);
const PRO_LABOR_MULTIPLIER = (28 / 100);
const PJ_INSS_TAX_MULTIPLIER = (11 / 100);
// Estipulação de custo para abertura de um CNPJ, valores atualizados de 2022
const CNPJ_OPEN_COSTS = [
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
];
const TOTAL_CNPJ_OPEN_COST = CNPJ_OPEN_COSTS.reduce((acc, cur) => acc + cur.value, 0);
const MONTHLY_CNPJ_OPEN_COST = currencyRound(TOTAL_CNPJ_OPEN_COST / 12);

export {
  CLT_IR_TAXES,
  CLT_INSS_TAXES,
  DEPENDENT_DEDUCTION,
  FGTS_MULTIPLIER,
  VACATION_SALARY_MULTIPLIER,
  FEDERAL_TAX_MULTIPLIER,
  PRO_LABOR_MULTIPLIER,
  PJ_INSS_TAX_MULTIPLIER,
  MONTHLY_CNPJ_OPEN_COST,
};
