import {checkHealthStatus} from "../index.js";


test("checkHealthStatus_1", () => {
const list = {name: "Маг", health: 80};
const result = checkHealthStatus(list);
expect(result).toBe("healthy");

}  );

test("checkHealthStatus_2", () => {
const list = {name: "Маг", health: 40};
const result = checkHealthStatus(list);
expect(result).toBe("wounded");

}  );

test("checkHealthStatus_3", () => {
const list = {name: "Маг", health: 4};
const result = checkHealthStatus(list);
expect(result).toBe("critical");

}  );





