// Imports the filesystem module, inquirer package and declares an array of licenses
const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

let employees = [];
let roles = ["Manager", "Engineer", "Intern"];
let officeNumber = [1, 2, 3, 4, 5, 6];


function initialQuestions() {

    inquirer
.prompt([
// User's feedback
    {
        type: "input",
        message: "What employee's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What employee's email?",
        name: "email",
    },
    {
        type: "list",
        message: "What employee's role?",
        name: "role",
        choices: roles
    },
      
])

.then(answers=>{
    console.log(answers);

    switch (answers.role) {
        case "Manager":
            questionsManager(answers);
            return;
        case "Engineer":
            questionsEngineer(answers);
            return;
        case "Intern":
            questionsIntern(answers);
            return;
      }

    // fs.writeFile('README.md', 'content goes here', (err) =>
  
    // err ? console.error(err) : console.log('Commit logged!'));

});
}

function questionsEngineer(answers) {
    inquirer
    .prompt([
        {
            type: "input",
            message: "What employee's Github username?",
            name: "github"
        },
        {
            type: "confirm",
            message: "Do you want to add another employee?",
            name: "anotherEmployee"

        }
    ])
    .then(answersEngineer => {
        let engineer = new Engineer(generateId(), answers.name, answers.email, answersEngineer.github);
        employees.push(engineer);
        console.log(employees);
        if (answersEngineer.anotherEmployee) {
            initialQuestions();
        }
        else{
            // TODO render
        }
    })
    
}

function questionsManager(answers) {
    inquirer
    .prompt([
        {
            type: "list",
            message: "What employee's office number?",
            name: "OfficeNumber",
            choices: officeNumber
        },
        {
            type: "confirm",
            message: "Do you want to add another employee?",
            name: "anotherEmployee"

        }
    ])
    .then(answersManager => {
        let manager = new Manager(generateId(), answers.name, answers.email, answersManager.OfficeNumber);
        employees.push(manager);
        console.log(employees);
        if (answersManager.anotherEmployee) {
            initialQuestions();
        }
        else{
            // TODO render
        }
    })
    
}


function questionsIntern(answers) {
    inquirer
    .prompt([
        {
            type: "input",
            message: "What employee's school?",
            name: "School"
        },
        {
            type: "confirm",
            message: "Do you want to add another employee?",
            name: "anotherEmployee"

        }
    ])
    .then(answersIntern => {
        let intern = new Intern(generateId(), answers.name, answers.email, answersIntern.School);
        employees.push(intern);
        console.log(employees);
        if (answersIntern.anotherEmployee) {
            initialQuestions();
        }
        else{
            // TODO render
        }
    })
    
}

function generateId() {
   let employeesId = employees.length + 1;
    return employeesId;
}

initialQuestions();
