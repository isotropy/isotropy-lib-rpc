const should = require("should");
import * as rpcLib from "../rpc";

describe("lib-rpc", function() {
  it("post", async () => {
    const response = await rpcLib.post(
      "http://echo.jsontest.com/key/value/one/two"
    );
    response.should.deepEqual({ one: "two", key: "value" });
  });
});
