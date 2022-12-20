const EmployeeTest = require("../lib/Employee");

describe("Employee", () => {
  describe("congruent values", () => {
    it("should return an object", () => {
      const employee = new EmployeeTest("Dave", 2, "uncledave@gmail.com");
      expect(employee.getName()).toEqual("Dave");
      expect(employee.getId()).toEqual(2);
      expect(employee.getEmail()).toEqual("uncledave@gmail.com");
      expect(employee.getRole()).toEqual("employee");
    });
  });
});
