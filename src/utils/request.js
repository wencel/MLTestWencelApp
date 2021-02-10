async function request(url = '', options = {}, data = {}) {
  const requestOptions = { ...options };
  if (!requestOptions.headers) {
    requestOptions.headers = { 'Content-Type': 'application/json' };
  } else if (!requestOptions.headers['Content-Type']) {
    requestOptions.headers['Content-Type'] = 'application/json';
  }
  if (
    requestOptions?.method &&
    !['GET', 'HEAD'].includes(requestOptions?.method)
  ) {
    requestOptions.body = JSON.stringify(data);
  }
  const response = await fetch(url, requestOptions);
  const jsonresponse = await response.json();
  // parses JSON response into native JavaScript objects
  return jsonresponse;
}

export default request;
