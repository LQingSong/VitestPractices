import { test, expect, describe, assert } from "vitest";

describe("vitest setup test", () => {
  test("case 1", () => {
    setTimeout(() => {
      expect(1).toBe(1);
    }, 5000);
  }, 1000);

  test.todo("skipped test", () => {
    assert.equal(Math.sqrt(4), 3);
  });
});
