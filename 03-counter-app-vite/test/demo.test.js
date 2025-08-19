import { describe, test, expect } from "@jest/globals";


describe("prueba piloto", () => {
  test("this test canot faild ", () => {
    const a = 2;
    expect(a).not.toBe(1);
  });
});
