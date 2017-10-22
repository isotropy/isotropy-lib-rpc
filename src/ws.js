import "isomorphic-fetch";

async function httpCall(method, url, parameters) {
  const data = {
    method,
    body: parameters,
    headers: new Headers()
  };
  const response = await fetch(url, data);
  const jsonResponse = await response.json();
  return jsonResponse;
}

export default {
  get: (url, parameters = []) => httpCall("GET", url, parameters),
  post: (url, parameters = []) => httpCall("POST", url, parameters),
  put: (url, parameters = []) => httpCall("PUT", url, parameters),
  delete: (url, parameters = []) => httpCall("DELETE", url, parameters)
};
