const {checkHealthStatus} = require("../index.js");

test("checkHealthStatus", () => {
const list = {name: "Маг", health: 80};
const result = checkHealthStatus(list);
console.log(result);
expect(result).toBe("healthy");

}  );

