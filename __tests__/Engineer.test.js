const EngineerTest = require("../lib/Engineer");

describe("Engineer", () => {
  describe("congruent values", () => {
    it("should return an object", () => {
      const employee = new EngineerTest("Stan", 3, "doyounderstan@gmail.com","stanUp!");
      expect(employee.getName()).toEqual("Stan");
      expect(employee.getId()).toEqual(3);
      expect(employee.getEmail()).toEqual("doyounderstan@gmail.com");
      expect(employee.getGitHub()).toEqual("stanUp!");
      expect(employee.getRole()).toEqual("Engineer");
    });
  });
});