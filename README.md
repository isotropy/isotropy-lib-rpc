# isotropy-lib-webservices
Web Services Library for the Isotropy Project

GET, PUT, POST and DELETE are supported.

POST:
```javascript
import wsLib from "isotropy-lib-webservices";

async function post() {
  const response = await wsLib.post("http://www.example.com", { data: "values" })
  return response
}
```
