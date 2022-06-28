import {
  TABLE_INFOS_CLT,
  TABLE_INFOS_PJ
} from '../../summaryTable/utils/tableInfos';

import { formatCurrencyInputs } from './commonSalaryHelper';
import { calculateCltSalaryInfo } from './cltSalaryHelper';
import { calculatePjSalaryInfo } from './pjSalaryHelper';

const changeTableInfo = (objInfo, tableType) => {
  const tableInfo = Boolean(tableType === 'clt')
    ? TABLE_INFOS_CLT
    : TABLE_INFOS_PJ;

  const updateArrayValues = (arr) => {
    const output = arr.map((obj) => {
      return {
        ...obj,
        value: objInfo[obj.id]
      };
    });

    return output;
  };

  for (const [key, value] of Object.entries(tableInfo)) {
    const isTableTitle = Boolean(typeof tableInfo[key] === 'string');
    if (isTableTitle) continue;

    const isTotalSalary = Boolean(typeof tableInfo[key] === 'number');
    if (isTotalSalary) {
      tableInfo[key] = objInfo[key];
      continue;
    }

    tableInfo[key] = updateArrayValues(value);
  }
};

const changeCltAndPjTable = ({ clt, pj }) => {
  const cltFormattedData = formatCurrencyInputs(clt);
  const pjFormattedData = formatCurrencyInputs(pj);
  
  const cltSalaryInfo = calculateCltSalaryInfo(cltFormattedData);
  const pjSalaryInfo = calculatePjSalaryInfo(pjFormattedData);

  changeTableInfo(cltSalaryInfo, 'clt');
  changeTableInfo(pjSalaryInfo, 'pj');

  return {
    clt: cltSalaryInfo,
    pj: pjSalaryInfo, 
  };
};

export {
  changeCltAndPjTable,
};
