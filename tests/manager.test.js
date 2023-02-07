const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should return an object containing a name, id, email, and school property when called with 'new' keyword", () => {
      const nameArg = "Jason";
      const idArg = "1";
      const emailArg = "jason@example.com";
      const officeNumberArg = "100";

      const obj = new Manager(nameArg, idArg, emailArg, officeNumberArg);
      expect(obj).toEqual({name: nameArg, id: idArg, email: emailArg, officeNumber: officeNumberArg});
    });
  });

  describe("getOfficeNumber", () => {
    it("should return the office number of the manager", () => {
      const officeNumberArg = "100"
      const obj = new Manager("Jason", "1", "jason@example.com", officeNumberArg);
      const officeNumber = obj.getOfficeNumber();
      expect(officeNumber).toEqual(officeNumberArg);
    })
  });

  describe("getRole", () => {
    it("should return the string 'Manager'", () => {
      const obj = new Manager("Jason", "1", "jason@example.com", "100");
      const role = obj.getRole();
      expect(role).toEqual("Manager");
    })
  });
});