const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require('./constructors/engineer')
const Intern = require('./constructors/intern')
const Manager = require('./constructors/manager')


const team = []


const makeManager = () => 
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's employee ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email address?",
        },
        {
            type: 'input',
            name: 'office',
            message: "What is the team manager's office number?",
        },
    ])
    .then(function(answers){
        const manager = new Manager(

            answers.name,
            parseInt(answers.id),
            answers.email,
            parseInt(answers.office)
        )
        team.push(manager)
        // addHTML(manager)
        addMember() //calling function

    })

//addMemeber function 
    function addMember(){
             inquirer.prompt([
            {
                type: 'list',
                name: 'buildTeam',
                message: "What do you want to do next to your team?",
                choices:['Add Engineer', 'Add Intern', 'Finish Building My Team']
            },
    
           ])
           .then(function(answers){
            if ( answers.buildTeam === 'Add Engineer') {
                addEngineer();
            }
            else if (answers.buildTeam === 'Add Intern') {
                addIntern();
            }
            else {
                createPage(team);
            }
            })
    }


//add Engineer function
const addEngineer = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is this engineer's name",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is this engineer's employee ID?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is this engineer's email address?",
            },
            {
                type: 'input',
                name: 'gitHub',
                message: "What is this engineer's GitHub username?",
            },
        ])
        .then(function(answers){
            const engineer = new Engineer(
    
                answers.name,
                parseInt(answers.id),
                answers.email,
                answers.gitHub
            )
            team.push(engineer)
            // addHTML(engineer)
            addMember() //calling function
        })
    }

//add Intern function
const addIntern = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is this intern's name",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is this intern's employee ID?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is this intern's email address?",
            },
            {
                type: 'input',
                name: 'school',
                message: "What is this intern's current school?",
            },
        ])
        .then(function(answers){
            const intern = new Intern(
    
                answers.name,
                parseInt(answers.id),
                answers.email,
                answers.school
            )
            team.push(intern)
            // addHTML(intern)
            addMember() //calling function
        })
    }

//create HTML function
function createPage() {
        let employeeCards = "";
    
        team.forEach(employee => {
            let employeeCard = employee.newEmployeeCard();
            employeeCards += employeeCard;
        });
    
        let newHTML = `
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- bootstrap link -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
            integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <title>Team</title>
    </head>
    <body>
        <div class="container-fluid bg-warning text-center d-flex align-items-center justify-content-center" style="height: 10rem;">
            <div>
                <h1 style="color: white;">My Team</h1>
            </div>
        </div>
        <div class="container" style="padding-top: 5rem;">
            <div class="card-columns justify-content-center">
                ${employeeCards}
            </div>
        </div>
    </body>
    </html>`;
        fs.writeFile("./output/new.html", newHTML, (err)=> {
            if (err) {
                throw err;
            }
        });
    };

    //call initial question
  makeManager()
