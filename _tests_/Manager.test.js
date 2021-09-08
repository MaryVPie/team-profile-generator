const Manager = require("../lib/Manager");

describe("ManagerTests", () => {
    describe("getId", () => {
        it("should return an Manager's Id", () => {
            const emp = new Manager(1, "Mary", "someemail@gmail.com");
            const id = emp.getId();

            expect(id).toEqual(1);
        });
    });
   
    describe("getEmail", () => {
        it("should return an Manager's email", () => {
            const emp = new Manager(1, "Mary", "someemail@gmail.com");
            const email = emp.getEmail();

            expect(email).toEqual("someemail@gmail.com");

        });
    });

    describe("getName", () => {
        it("should return an Manager's Name", () => {
            const emp = new Manager(1, "Mary", "someemail@gmail.com");
            const name = emp.getName();

            expect(name).toEqual("Mary");

        });
    });
    describe("getRole", () => {
        it("should return an Manager's role", () => {
            const emp = new Manager(1, "Mary", "someemail@gmail.com");
            const role = emp.getRole();

            expect(role).toEqual("Manager");

        });
    });

    describe("getOfficeNumber", () => {
        it("should return an Manager's Office Number", () => {
            const emp = new Manager(1, "Mary", "someemail@gmail.com", 7);
            const officeNumber = emp.getOfficeNumber();

            expect(officeNumber).toEqual(7);

        });
    });
});




