import { checkIfDateIsOverTheWeekend } from "../utils/date-helper";

describe("date-helper", () => {
  it("should check if 2021-03-20 is over the weekend", () => {
    expect(checkIfDateIsOverTheWeekend("2021-03-20")).toBe(true);
  });
  it("should check if 2021-03-19 is over the weekend", () => {
    expect(checkIfDateIsOverTheWeekend("2021-03-19")).toBe(false);
  });
  it("should throw an error when don't pass string", () => {
    expect.assertions(2);

    try {
      checkIfDateIsOverTheWeekend(2);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toHaveProperty(
        "message",
        "Date should be a string like a YYYY-MM-DD"
      );
    }
  });
  it("should throw an error when pass invalid string", () => {
    expect.assertions(2);

    try {
      checkIfDateIsOverTheWeekend("");
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toHaveProperty("message", "Incorrect date type");
    }
  });
});
