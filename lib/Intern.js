const Employee = require("./Employee");

class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email);
        this.school = school;
    }

    getSchool(){
        console.log(`School: ${this.school}`);
        return this.school;
    }

    getRole(){
        console.log('Intern');
        return "Intern";
    }

}

// const intern = new Intern();

// intern.getId();
// intern.getName();
// intern.getEmail();
// intern.getRole();

module.exports = Intern;

