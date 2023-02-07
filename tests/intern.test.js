const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should return an object containing a name, id, email, and school property when called with 'new' keyword", () => {
      const nameArg = "Jason";
      const idArg = "1";
      const emailArg = "jason@example.com";
      const schoolArg = "someschool";

      const obj = new Intern(nameArg, idArg, emailArg, schoolArg);
      expect(obj).toEqual({name: nameArg, id: idArg, email: emailArg, school: schoolArg});
    });
  });

  describe("getSchool", () => {
    it("should return the school of the intern", () => {
      const schoolArg = "someschool"
      const obj = new Intern("Jason", "1", "jason@example.com", schoolArg);
      const school = obj.getSchool();
      expect(school).toEqual(schoolArg);
    })
  });

  describe("getRole", () => {
    it("should return the string 'Intern'", () => {
      const obj = new Intern("Jason", "1", "jason@example.com", "someschool");
      const role = obj.getRole();
      expect(role).toEqual("Intern");
    })
  });
});