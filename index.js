// Imports the filesystem module, inquirer package and declares an array of licenses
const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
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

        .then(answers => {
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
            else {
                writeIndexHtml();
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
            else {
                writeIndexHtml();
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
            else {
                writeIndexHtml();
            }
        })

}

function generateId() {
    let employeesId = employees.length + 1;
    return employeesId;
}

function writeIndexHtml() {
    let cardsContent = '';

    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];
        
        let type = typeof employee;
        switch (type) {
            case typeof Engineer:
                fs.readFile('card_template_engineer.html', (err, data) => {
                    let filledTemplate = 
                        data.toString()
                            .replace("___name___",employee.getName())
                            .replace("___id___",employee.getId())
                            .replace("___email___",employee.getEmail())
                            .replace("___github___",employee.getGithub());
                    cardsContent += filledTemplate;
                });
                break;
            case typeof Intern:
                fs.readFile('card_template_intern.html', (err, data) => {
                    let filledTemplate = 
                        data.toString()
                            .replace("___name___",employee.getName())
                            .replace("___id___",employee.getId())
                            .replace("___email___",employee.getEmail())
                            .replace("___school___",employee.getSchool());
                    cardsContent += filledTemplate;
                });
                break;
            case typeof Manager:
                fs.readFile('card_template_manager.html', (err, data) => {
                    let filledTemplate = 
                        data.toString()
                            .replace("___name___",employee.getName())
                            .replace("___id___",employee.getId())
                            .replace("___email___",employee.getEmail())
                            .replace("___officeNumber___",employee.getOfficeNumber());
                    cardsContent += filledTemplate;
                });
                break;
        }
    } 
    fs.readFile('index_template.html', (err, data) =>
        {
            let filledTemplate = data.toString().replace("___cards___", cardsContent); 
            fs.writeFile("index.html", filledTemplate, (err)=> {
                if (err) {
                   console.error(err); 
                } else{
                    console.log("successfully created");
                }
            });
        }

    );

    
}



initialQuestions();
