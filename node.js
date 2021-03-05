const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

const Engineer = require('./constructors/engineer')
const Intern = require('./constructors/intern')
const Manager = require('./constructors/manager')

// const generateHTML = require('./templates/main.html')
const team = []
// const templatesDir = path.resolve(__dirname, './templates')

// const managerArray = []
// const engineerArray = []
// const internArray = []
// const team = {managerArray, engineerArray, internArray}

// const makeHtml = require('./templates')

// const generateHTML = require('./constructors/html')
// const path = require('path')
// const buildPath = path.resolve(__dirname, 'new.html')

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
                name: 'github',
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
        fs.writeFile("./new.html", newHTML, (err)=> {
            if (err) {
                throw err;
            }
        });
    };
// function generateHTML(Manager, Engineer, Intern){
//   const html = `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Team Profile</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
  
//   <div class="container">
//   <div class="row">
// ${Manager.getName()}
// ${Engineer.getName()}
// ${Intern.getName()}
// </div>
//   </div>
// </div>
// </body>
// </html>`;
// fs.writeFile("./new.html", html, function(err){
//     if (err) {
//         console.log(err)
//     }
// })
// writeFile('new.html', html)
// }



// async function makeHtml(){
   
    // const html = []
    // const [
    //     managerTemplate,
    //     internTemplate,
    //     engineerTemplate,
    //     mainTemplate
    //   ] = await Promise.all([
    //     readFile(path.resolve(templatesDir, "manager.html"), "utf8"),
    //     readFile(path.resolve(templatesDir, "Intern.html"), "utf8"),
    //     readFile(path.resolve(templatesDir, "engineer.html"), "utf8"),
    //     readFile(path.resolve(templatesDir, "main.html"), "utf8")
    //   ]);

     
    //   html.push(managerTemplate)
    //   html.push(internTemplate)
    //   html.push(engineerTemplate)
    //   html.push(mainTemplate)

    //   fs.writeFileSync('new.html', html)
    //   generateHTML()
// } 


//html.push for each 

// function addHTML(){
//     return new Promise(function(resolve, reject){
//         const name = member.getName();
//         const role = member.getRole();
//         const id = member.getID();
//         const email = member.getEmail();
//     })
// }
// const init = () => {
//     makeManager().then((answers) => {
//       try {
//         const html = generateHTML(answers);
//         fs.writeFileSync('index.html', html);
//         console.log('file write success.');
//       } catch (error) {
//         console.log(error);
//       }
//     });
//   };

// const init = () => {
  makeManager()
// }
  
//   init();