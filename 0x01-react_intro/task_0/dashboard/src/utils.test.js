import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test("getFullYear returns the correct year", () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toBe(currentYear);
});

test("getFooterCopy returns the correct string when isIndex is true", () => {
  expect(getFooterCopy(true)).toBe("ALX");
});

test("getLatestNotification returns the correct string", () => {
  expect(getLatestNotification()).toBe(
    "<strong>Urgent requirement</strong> - complete by EOD"
  );
});
