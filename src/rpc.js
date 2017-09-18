import "isomorphic-fetch";

export async function post(url, parameters) {
  const data = {
    method: "POST",
    body: parameters,
    headers: new Headers()
  };
  const response = await fetch(url, data);
  const jsonResponse = await response.json();
  return jsonResponse;
}
