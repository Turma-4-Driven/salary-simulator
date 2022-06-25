const typeSalary = [
  {
    modality: 'CLT',
    title: 'Salário bruto',
    titleInput: 'Benefícios',
    placeholder: 4000,
    benefits: [
      {
        name: 'Vale Refeição/Alimentação',
        value: 500
      },
      {
        name: 'Plano de Saúde',
        value: 800
      },
      {
        name: 'Outros Benefícios',
        value: 900
      },
    ]
  },
  {
    modality: 'PJ',
    title: 'Salário bruto',
    titleInput: 'Benefícios',
    placeholder: 5000,
    benefits: [
      {
        name: 'Vale Refeição/Alimentação',
        value: 600
      },
      {
        name: 'Plano de Saúde',
        value: 700
      },
      {
        name: 'Outros Benefícios',
        value: 800
      },
    ]
  }
];

const tableInfosCLT = [
  {
    type: 'CLT',
    columnData: [
      {
        name: 'Salário',
        value: 2000,
      },
      {
        name: 'INSS',
        value: 2000,
      },
      {
        name: 'IRPF',
        value: 2000,
      },
      {
        name: 'FGTS',
        value: 2000,
      },
      {
        name: '13 salário',
        value: 2000,
      },
      {
        name: 'Férias',
        value: 2000,
      },
      {
        name: 'Benefícios',
        value: 2000,
      },
      {
        name: 'Outros benefícios',
        value: 2000,
      },
    ],
    total: '2000',
  }
];

const tableInfosPJ = [
  {
    type: 'PJ',
    columnData: [
      {
        name: 'Salário',
        value: 2000,
      },
      {
        name: 'INSS',
        value: 2000,
      },
      {
        name: 'IRPF',
        value: 2000,
      },
      {
        name: 'FGTS',
        value: 2000,
      },
      {
        name: '13 salário',
        value: 2000,
      },
      {
        name: 'Férias',
        value: 2000,
      },
      {
        name: 'Benefícios',
        value: 2000,
      },
      {
        name: 'Outros benefícios',
        value: 2000,
      },
    ],
    total: '2000',
  }
];

export {
  typeSalary,
  tableInfosCLT,
  tableInfosPJ
};