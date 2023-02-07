const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should return an object containing a name, id, email, and github property when called with 'new' keyword", () => {
      const nameArg = "Jason";
      const idArg = "1";
      const emailArg = "jason@example.com";
      const githubArg = "someuser";

      const obj = new Engineer(nameArg, idArg, emailArg, githubArg);
      expect(obj).toEqual({name: nameArg, id: idArg, email: emailArg, github: githubArg});
    });
  });

  describe("getGithub", () => {
    it("should return the Github username of the engineer", () => {
      const githubArg = "someuser"
      const obj = new Engineer("Jason", "1", "jason@example.com", githubArg);
      const github = obj.getGithub();
      expect(github).toEqual(githubArg);
    })
  });

  describe("getRole", () => {
    it("should return the string 'Engineer'", () => {
      const obj = new Engineer("Jason", "1", "jason@example.com", "someuser");
      const role = obj.getRole();
      expect(role).toEqual("Engineer");
    })
  });
});