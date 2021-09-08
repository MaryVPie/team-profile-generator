const fsUtils = require("./fsUtils");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

let employees = [];
let roles = ["Manager", "Engineer", "Intern"];
let officeNumber = [1, 2, 3, 4, 5, 6];


async function initialQuestions() {

    try {
        let answers = await inquirer
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

        ]);

        console.log(answers);

            switch (answers.role) {
                case "Manager":
                    await questionsManager(answers);
                    return;
                case "Engineer":
                    await questionsEngineer(answers);
                    return;
                case "Intern":
                    await questionsIntern(answers);
                    return;
            }

    } catch (error) {
        console.error(err); 
    }
    
}

async function questionsEngineer(answers) {

    try {
        let answersEngineer = await inquirer
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
        ]);
        let engineer = new Engineer(generateId(), answers.name, answers.email, answersEngineer.github);
            employees.push(engineer);
            console.log(employees);
            if (answersEngineer.anotherEmployee) {
                await initialQuestions();
            }
            else {
                await writeIndexHtml();
            }

    } catch (error) {
        console.error(err); 
    }
}

async function questionsManager(answers) {
    try {
        let answersManager = await inquirer
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
        ]);
        let manager = new Manager(generateId(), answers.name, answers.email, answersManager.OfficeNumber);
            employees.push(manager);
            console.log(employees);
            if (answersManager.anotherEmployee) {
                await initialQuestions();
            }
            else {
                await writeIndexHtml();
            }

    } catch (error) {
        console.error(err); 
    }

}


async function questionsIntern(answers) {

    try {
        let answersIntern = await inquirer
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
        ]);
        let intern = new Intern(generateId(), answers.name, answers.email, answersIntern.School);
            employees.push(intern);
            console.log(employees);
            if (answersIntern.anotherEmployee) {
                await initialQuestions();
            }
            else {
                await writeIndexHtml();
            }
    } catch (error) {
        console.error(err); 
    }
}

function generateId() {
    let employeesId = employees.length + 1;
    return employeesId;
}

async function writeIndexHtml() {
    let cardsContent = '';

    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];
        console.log("employee", employee);

        let filledTemplate = '';
        if (employee instanceof Manager) {
            filledTemplate = (await fsUtils.readFromFile('card_template_manager.html')).toString();
                console.log(filledTemplate);
                filledTemplate = filledTemplate
                    .replace("___name___",employee.getName())
                    .replace("___role___",employee.getRole())
                    .replace("___id___",employee.getId())
                    .replace("___email___",employee.getEmail())
                    .replace("___officeNumber___",employee.getOfficeNumber());
                cardsContent += filledTemplate;
        }

        if (employee instanceof Engineer) {
            filledTemplate = (await fsUtils.readFromFile('card_template_engineer.html')).toString();
                console.log(filledTemplate);
                filledTemplate = filledTemplate
                    .replace("___name___",employee.getName())
                    .replace("___role___",employee.getRole())
                    .replace("___id___",employee.getId())
                    .replace("___email___",employee.getEmail())
                    .replace("___github___",employee.getGithub());
                
                cardsContent += filledTemplate;
        }

        if (employee instanceof Intern) {
            filledTemplate = (await fsUtils.readFromFile('card_template_intern.html')).toString();
                console.log(filledTemplate);
                filledTemplate = filledTemplate
                    .replace("___name___",employee.getName())
                    .replace("___role___",employee.getRole())
                    .replace("___id___",employee.getId())
                    .replace("___email___",employee.getEmail())
                    .replace("___school___",employee.getSchool());
                cardsContent += filledTemplate;
        }
    } 
    let indexTemplate = (await fsUtils.readFromFile('index_template.html')).toString();

    indexTemplate = indexTemplate.replace("___cards___", cardsContent); 

    try {
        await fsUtils.writeToFile("index.html", indexTemplate);
        console.log("successfully created");
    } catch (err) {
        console.error(err);
    }
}



initialQuestions().then(()=> "exiting with 0");
