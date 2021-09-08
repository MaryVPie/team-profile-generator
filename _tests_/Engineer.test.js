const Engineer = require("../lib/Engineer");

describe("EngineerTests", () => {
    describe("getId", () => {
        it("should return an Engineer's Id", () => {
            const emp = new Engineer(1, "Mary", "someemail@gmail.com");
            const id = emp.getId();

            expect(id).toEqual(1);
        });
    });
   
    describe("getEmail", () => {
        it("should return an Engineer's email", () => {
            const emp = new Engineer(1, "Mary", "someemail@gmail.com");
            const email = emp.getEmail();

            expect(email).toEqual("someemail@gmail.com");

        });
    });

    describe("getName", () => {
        it("should return an Engineer's Name", () => {
            const emp = new Engineer(1, "Mary", "someemail@gmail.com");
            const name = emp.getName();

            expect(name).toEqual("Mary");

        });
    });
    describe("getRole", () => {
        it("should return an Engineer's role", () => {
            const emp = new Engineer(1, "Mary", "someemail@gmail.com", "Engineer");
            const role = emp.getRole();

            expect(role).toEqual("Engineer");

        });
    });

    describe("getGithub", () => {
        it("should return an Engineer's git", () => {
            const emp = new Engineer(1, "Mary", "someemail@gmail.com", "marygit");
            const git = emp.getGithub();

            expect(git).toEqual("marygit");

        });
    });
});




