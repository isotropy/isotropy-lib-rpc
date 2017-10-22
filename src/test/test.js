const should = require("should");
import wsLib from "../ws";

describe("lib-rpc", function() {
  it("post", async () => {
    const response = await wsLib.post(
      "http://echo.jsontest.com/key/value/one/two"
    );
    response.should.deepEqual({ one: "two", key: "value" });
  });

  it("get", async () => {
    const response = await wsLib.get(
      "http://echo.jsontest.com/key/value/one/two"
    );
    response.should.deepEqual({ one: "two", key: "value" });
  });

  it("put", async () => {
    const response = await wsLib.put(
      "http://jsonplaceholder.typicode.com/posts/1",
      {
        name: "John Cena",
        occupation: "Invisibility"
      }
    );
    response.should.deepEqual({ id: 1 });
  });

  it("delete", async () => {
    const response = await wsLib.delete(
      "http://jsonplaceholder.typicode.com/posts/1"
    );
    response.should.deepEqual({});
  });
});
