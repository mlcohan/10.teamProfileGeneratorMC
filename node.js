const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./constructors/engineer')
const Intern = require('./constructors/intern')
const Manager = require('./constructors/manager')
const team = []
const makeHtml = require('./constructors/html')
const path = require('path')
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
    
            addMember() //calling function
        })
    }


function generateHTML(){
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Team Profile</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
  <div class="row">

</div>
  </div>
</div>
</body>
</html>`;
fs.writeFile("./index.html", html, function(err){
    if (err) {
        console.log(err)
    }
})
}

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

const init = () => {
  generateHTML();
  makeManager
}
  
  init();