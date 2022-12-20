const ManagerTest = require("../lib/Manager");

describe("manager", () => {
  describe("return congruent values", () => {
    it("should return object",
      () => {
        const manager = new ManagerTest(
          "Justin",
          1,
          "thisjustin@gmail.com",
          24,
          "Purple Rain"
        );
        expect(manager.getName()).toEqual('Justin');
        expect(manager.getId()).toEqual(1);
        expect(manager.getEmail()).toEqual('thisjustin@gmail.com');
        expect(manager.getOffNum()).toEqual(24);
        expect(manager.getTeamName()).toEqual('Purple Rain');
      });
  });
});
