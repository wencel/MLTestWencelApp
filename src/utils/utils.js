export const getQueryTextParams = text => {
  const paramsObj = {};
  text
    .replace('?', '')
    .split('&')
    .forEach(q => {
      const qObj = q.split('=');
      paramsObj[qObj[0]] = qObj[1];
    });
  return paramsObj;
};
