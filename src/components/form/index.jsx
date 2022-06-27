import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import { TYPES_SALARY } from './utils/salaryInputsInfo';
import { toBrazilianCurrency } from '../../helpers/currencyHelper';

import {
  Calculate,
  FormInfos,
  ContainerInputsInfo,
  ContainerInfos,
  InputForm,
  Modality,
  Name,
  Title
} from './style';

const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  
  const defaultMaskOptions = {
    prefix: 'R$ ',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    decimalSymbol: ',',
    decimalLimit: 2,
    integerLimit: 7,
    allowNegative: false,
    allowLeadingZeroes: false,
  };

  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
  });

  const calculate = (e) => {
    e.preventDefault();
    console.log('ue');

    navigate('/summary-page');
  };

  const handleChange = (e) => {
    // console.log({ [e.target.name]: e.target.value });
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    console.log({ newFormData:
      {
        ...formData,
        [e.target.name]: e.target.value
      } });
  };

  return (
    <FormInfos onSubmit={calculate}>
      <ContainerInfos>
        {
          TYPES_SALARY.map((typeSalary, index) => (
            <ContainerInputsInfo key={index}>
              <Modality>{typeSalary.modality}</Modality>

              <Title>{typeSalary.title}:</Title>
              <InputForm key={index}
                name={`${typeSalary.modality}-${typeSalary.title}`}
                placeholder={toBrazilianCurrency(typeSalary.placeholder)}
                onChange={handleChange}
                mask={currencyMask}
                required
              />

              <Title>{typeSalary.titleInput}:</Title>
              {
                typeSalary.benefits.map((benefits, index) => (
                  <>
                    <Name>{benefits.name}:</Name>
                    <InputForm key={index}
                      name={`${typeSalary.modality}-${benefits.id}`}
                      placeholder={toBrazilianCurrency(benefits.value)}
                      onChange={handleChange}
                      mask={currencyMask}
                    />
                  </>
                ))
              }
            </ContainerInputsInfo>
          ))
        }
      </ContainerInfos>
      <Calculate type='submit'>Calcular</Calculate>
    </FormInfos>
  );
};

export default Form;
