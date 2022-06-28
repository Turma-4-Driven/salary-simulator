const changeTableInfo = (tableInfos, objInfo) => {
  const tableInfo = tableInfos[0];
  for (const [key, value] of Object.entries(tableInfo)) {
    const isTableTitle = Boolean(typeof tableInfo[key] === 'string');
    if (isTableTitle) continue;
    
    const isTotalSalary = Boolean(typeof tableInfo[key] === 'number');
    if (isTotalSalary) tableInfo[key] = objInfo[key];
    

  }
};



