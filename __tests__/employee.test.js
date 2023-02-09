const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return an object containing a name, id, and email property when called with 'new' keyword", () => {
      const nameArg = "Jason";
      const idArg = "1";
      const emailArg = "jason@example.com";

      const obj = new Employee(nameArg, idArg, emailArg);
      expect(obj).toEqual({name: nameArg, id: idArg, email: emailArg});
    });
  });

  describe("getName", () => {
    it("should return the name of the employee", () => {
      const obj = new Employee("Jason", "1", "jason@example.com");
      const name = obj.getRole();
      expect(name).toEqual("Employee");
    })
  });

  describe("getId", () => {
    it("should return the id of the employee", () => {
      const idArg = "1";
      const obj = new Employee("Jason", idArg, "jason@example.com");
      const id = obj.getRole();
      expect(id).toEqual("Employee");
    })
  });

  describe("getEmail", () => {
    it("should return the email of the employee", () => {
      const emailArg = "jason@example.com"
      const obj = new Employee("Jason", "1", emailArg);
      const email = obj.getEmail();
      expect(email).toEqual(emailArg);
    })
  });

  describe("getRole", () => {
    it("should return the string 'Employee'", () => {
      const obj = new Employee("Jason", "1", "jason@example.com");
      const role = obj.getRole();
      expect(role).toEqual("Employee");
    })
  });
});