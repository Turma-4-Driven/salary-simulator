import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import { TYPES_SALARY } from './utils/salaryInputsInfo';
import { toBrazilianCurrency } from '../../helpers/currencyHelper';
import { changeCltAndPjTable } from './helpers/tableInfoChangeHelper';

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

  const goToSummaryPage = () => {
    navigate('/summary');
    setFormData({});
  };
  
  const currencyMaskOptions = {
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
  const quantityMaskOptions = {
    prefix: '',
    integerLimit: 3,
  };

  const makeMask = (type='') => {
    const mask = Boolean(type.includes('dependentsQuant'))
      ? quantityMaskOptions
      : currencyMaskOptions;

    return createNumberMask({ ...mask });
  };

  const makePlaceholder = (value, type='') => {
    const placeholder = Boolean(type.includes('dependentsQuant'))
      ? value
      : toBrazilianCurrency(value);

    return placeholder;
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const isCltProps = inputName.includes('CLT');

    const propName = isCltProps
      ? inputName.replace('CLT-', '')
      : inputName.replace('PJ-', '');
    
    const cltOrPjProp = isCltProps ? 'clt' : 'pj';

    setFormData({
      ...formData,
      [cltOrPjProp]: {
        ...formData[cltOrPjProp],
        [propName]: e.target.value
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    changeCltAndPjTable({
      clt: formData.clt,
      pj: formData.pj,
    });

    goToSummaryPage();
  };

  return (
    <FormInfos onSubmit={handleSubmit}>
      <ContainerInfos>
        {
          TYPES_SALARY.map((typeSalary, index) => (
            <ContainerInputsInfo key={index}>
              <Modality>{typeSalary.modality}</Modality>

              <Title>{typeSalary.title}:</Title>
              <InputForm key={index}
                name={`${typeSalary.modality}-${typeSalary.id}`}
                placeholder={makePlaceholder(typeSalary.placeholder)}
                onChange={handleChange}
                mask={makeMask()}
                required
              />

              <Title>{typeSalary.titleInput}:</Title>
              {
                typeSalary.benefits.map((benefits, index) => (
                  <>
                    <Name>{benefits.name}:</Name>
                    <InputForm key={index}
                      name={`${typeSalary.modality}-${benefits.id}`}
                      placeholder={makePlaceholder(benefits.value, benefits.id)}
                      onChange={handleChange}
                      mask={makeMask(benefits.id)}
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
