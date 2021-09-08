const Intern = require("../lib/Intern");

describe("InternTests", () => {
    describe("getId", () => {
        it("should return an Intern's Id", () => {
            const emp = new Intern(1, "Mary", "someemail@gmail.com");
            const id = emp.getId();

            expect(id).toEqual(1);
        });
    });
   
    describe("getEmail", () => {
        it("should return an Intern's email", () => {
            const emp = new Intern(1, "Mary", "someemail@gmail.com");
            const email = emp.getEmail();

            expect(email).toEqual("someemail@gmail.com");

        });
    });

    describe("getName", () => {
        it("should return an Intern's Name", () => {
            const emp = new Intern(1, "Mary", "someemail@gmail.com");
            const name = emp.getName();

            expect(name).toEqual("Mary");

        });
    });
    describe("getRole", () => {
        it("should return an Intern's role", () => {
            const emp = new Intern(1, "Mary", "someemail@gmail.com");
            const role = emp.getRole();

            expect(role).toEqual("Intern");

        });
    });

    describe("getSchool", () => {
        it("should return an Intern's school", () => {
            const emp = new Intern(1, "Mary", "someemail@gmail.com", "someschool");
            const school = emp.getSchool();

            expect(school).toEqual("someschool");

        });
    });
});




