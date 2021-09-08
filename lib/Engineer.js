const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(id, name, email, github) {
        super(id, name, email);
        this.github = github;
    }

    getGithub(){
        console.log(`Github: ${this.github}`);
        return this.github;
    }

    getRole(){
        console.log('Engineer');
        return "Engineer";
    }

}

// const engineer = new Engineer();

// engineer.getId();
// engineer.getName();
// engineer.getEmail();
// engineer.getRole();

module.exports = Engineer;