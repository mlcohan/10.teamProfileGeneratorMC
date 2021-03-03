const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./constructors/engineer')
const Intern = require('./constructors/intern')
const Manager = require('./constructors/manager')
const team = []
const makeHtml = require('./constructors/html')
const buildDir = path.resolve(__dirname, "index.html")

const makeManager = () => 
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name",
        },
        {
            type: 'input',
            name: 'ID',
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
            parseInt(answers.ID),
            answers.email,
            parseInt(answers.office)
        )
        team.push(manager)

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
                makeHtml(team);
            }
            })
    }



    

const addEngineer = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "What is this engineer's name",
            },
            {
                type: 'input',
                name: 'engineerID',
                message: "What is this engineer's employee ID?",
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is this engineer's email address?",
            },
            {
                type: 'input',
                name: 'engineerGitHub',
                message: "What is this engineer's GitHub username?",
            },
        ])
        .then(function(answers){
            const engineer = new Engineer(
    
                answers.name,
                parseInt(answers.ID),
                answers.email,
                parseInt(answers.office)
            )
            team.push(engineer)
    
            addMember() //calling function
        })
    }

const addIntern = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: "What is this intern's name",
            },
            {
                type: 'input',
                name: 'internID',
                message: "What is this intern's employee ID?",
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is this intern's email address?",
            },
            {
                type: 'input',
                name: 'internGitHub',
                message: "What is this intern's GitHubt username?",
            },
        ])
        .then(function(answers){
            const intern = new Intern(
    
                answers.name,
                parseInt(answers.ID),
                answers.email,
                answers.github
            )
            team.push(intern)
    
            addMember() //calling function
        })
    }




// const generateHTML = (answers) =>
//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Hi! My name is ${answers.name}</h1>
//     <p class="lead">I am from ${answers.email}.</p>

//     </ul>
//   </div>
// </div>
// </body>
// </html>`;


const init = () => {
    makeManager().then((answers) => {
      try {
        const html = makeHtml(answers);
        fs.writeFileSync('index.html', html);
        console.log('file write success.');
      } catch (error) {
        console.log(error);
      }
    });
  };


  
  init();