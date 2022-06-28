const TYPES_SALARY = [
  {
    modality: 'CLT',
    id: 'salary',
    title: 'Salário bruto',
    titleInput: 'Benefícios',
    placeholder: 4000,
    benefits: [
      {
        id: 'foodVoucher',
        name: 'Vale Refeição/Alimentação',
        value: 500,
      },
      {
        id: 'healthPlan',
        name: 'Plano de Saúde',
        value: 800,
      },
      {
        id: 'otherBenefits',
        name: 'Outros Benefícios',
        value: 900,
      },
      {
        id: 'dependentsQuant',
        name: 'Dependentes (quantidade)',
        value: 0,
      },
      {
        id: 'otherDeductions',
        name: 'Outras Deduções',
        value: 0,
      },
      {
        id: 'accountingValue',
        name: 'Contabilidade',
        value: 0,
      },
    ]
  },
  {
    modality: 'PJ',
    id: 'salary',
    title: 'Salário bruto',
    titleInput: 'Benefícios',
    placeholder: 5000,
    benefits: [
      {
        id: 'foodVoucher',
        name: 'Vale Refeição/Alimentação',
        value: 600,
      },
      {
        id: 'healthPlan',
        name: 'Plano de Saúde',
        value: 700,
      },
      {
        id: 'otherBenefits',
        name: 'Outros Benefícios',
        value: 800,
      },
      {
        id: 'salary13',
        name: '13º Salário',
        value: 5000,
      },
      {
        id: 'vacationSalary',
        name: 'Férias',
        value: 5000,
      },
      {
        id: 'accountingValue',
        name: 'Contabilidade',
        value: 250,
      },
    ]
  }
];

export {
  TYPES_SALARY,
};
