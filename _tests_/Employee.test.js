const Employee = require("../lib/Employee");

describe("EmployeeTests", () => {
    describe("getId", () => {
        it("should return an Employee's Id", () => {
            const emp = new Employee(1, "Mary", "someemail@gmail.com");
            const id = emp.getId();

            expect(id).toEqual(1);

        });
    });

    describe("getName", () => {
        it("should return an Employee's Name", () => {
            const emp = new Employee(1, "Mary", "someemail@gmail.com");
            const name = emp.getName();

            expect(name).toEqual("Mary");
        });
    });

    describe("getEmail", () => {
        it("should return an Employee's email", () => {
            const emp = new Employee(1, "Mary", "someemail@gmail.com");
            const email = emp.getEmail();

            expect(email).toEqual("someemail@gmail.com");
        });
    });

    describe("getRole", () => {
        it("should return an Employee's role", () => {
            const emp = new Employee(1, "Mary", "someemail@gmail.com", "Employee");
            const role = emp.getRole();

            expect(role).toEqual("Employee");
        });
    });
});




