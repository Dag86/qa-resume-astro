import { describe, it, expect } from "vitest";
import { formatK } from "../../src/utils/format";

describe("formatK", () => {
  it("formats thousands", () => {
    expect(formatK(999)).toBe("999");
    expect(formatK(1000)).toBe("1k");
    expect(formatK(1250)).toBe("1.3k");
    expect(formatK(2000)).toBe("2k");
  });
});
