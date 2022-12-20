const InternTest = require("../lib/Intern");

describe("intern", () => {
  describe("return congruent values", () => {
    it("should return object",
      () => {
        const intern = new InternTest(
          "Zach",
          3,
          "zachattack@gmail.com",
          "Cornell University"
        );
        expect(intern.getName()).toEqual('Zach');
        expect(intern.getId()).toEqual(3);
        expect(intern.getEmail()).toEqual('zachattack@gmail.com');
        expect(intern.getSchool()).toEqual('Cornell University');
      });
  });
});
