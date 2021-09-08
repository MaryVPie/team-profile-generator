const Employee = require("./Employee");

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        super(id, name, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        console.log(`Office Number: ${this.officeNumber}`);
        return this.officeNumber;
    }

    getRole(){
        console.log('Manager');
        return "Manager";
    }

}

// const manager = new Manager();

// manager.getId();
// manager.getName();
// manager.getEmail();
// manager.getRole();

module.exports = Manager;
