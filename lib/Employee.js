class Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    getId(){
        console.log(`id: ${this.id}`);
        return this.id;
    }

    getName(){
        console.log(`Name: ${this.name}`);
        return this.name;
    }

    getEmail(){
        console.log(`Email: ${this.email}`);
        return this.email;
    }

    getRole(){
        console.log('Employee');
        return "Employee";
    }

}

// const employee = new Employee();

// employee.getId();
// employee.getName();
// employee.getEmail();
// employee.getRole();

module.exports = Employee;