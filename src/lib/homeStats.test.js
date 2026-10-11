import { test, expect } from "bun:test";
import { homeStats, formatStat } from "./homeStats";

test("uptime commitment is 99.9 percent", () => {
  expect(homeStats[0].value).toBe(99.9);
  expect(formatStat(homeStats[0])).toBe("99.9%");
});
test("priority response is less than one hour", () => {
  expect(homeStats[1].value).toBe(1);
  expect(formatStat(homeStats[1])).toBe("< 1hr");
});
test("enterprise engagements are 150 plus", () => {
  expect(homeStats[2].value).toBe(150);
  expect(formatStat(homeStats[2])).toBe("150+");
});