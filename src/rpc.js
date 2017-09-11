import "isomorphic-fetch"

export async function post(url, parameters) {
  const data = {
    method: "POST",
    body: parameters,
    headers: new Headers()
  };
  const response = await fetch(url, data);
  return response;
}

post("https://www.google.co.in/", { q: "something" })
.then(response => console.log(response));
