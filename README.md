# isotropy-lib-rpc
RPC Library for the Isotropy Project

```javascript
import * as rpcLib from "isotropy-lib-rpc";

async function post() {
  const response = await rpcLib.post("http://www.example.com", { data: "values" })
  return response
}
```
