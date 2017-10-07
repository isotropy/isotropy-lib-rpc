# isotropy-lib-webservices
RPC Library for the Isotropy Project

```javascript
import * as rpcLib from "isotropy-lib-webservices";

async function post() {
  const response = await rpcLib.post("http://www.example.com", { data: "values" })
  return response
}
```
