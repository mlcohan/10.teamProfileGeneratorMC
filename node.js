const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => 
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name",
        },
        {
            type: 'input',
            name: 'managerID',
            message: "What is the team manager's employee ID?",
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the team manager's email address?",
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: "What is the team manager's office number?",
        },
    ])

    const init = () => {
        runProgram().then((managerInfo) => {
          try {
            const html = generateHTML(managerInfo);
            fs.writeFileSync('index.html', html);
            console.log('Updated Manager Info.');
            menu();
          } catch (error) {
            console.log(error);
          }
        });
      };


const menu = () => 
    inquirer.prompt([
        {
            type: 'list',
            name: 'buildTeam',
            message: "What do you want to do next to your team?",
            choices:['Add Engineer', 'Add Intern', 'Finish Building My Team']
        },
    ])


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
                message: "What is this engineer's GitHubt username?",
            },
        ])
    }

const addIntern = () => {
    if (choices === 'Add Intern'){
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
    }
}

function runProgram () {

    promptUser();

    init();
      
   
    // if (menu.buildTeam === "Add Engineer"){
    //     addEngineer()
    // }
    // else if (menu.buildTeam === "Add Intern"){
    //     addIntern()
    // }
    // else{
    //     init()
    // }
    // return
}


const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.managerName}</h1>
    <p class="lead">I am from ${answers.managerEmail}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.managerID}</li>
      <li class="list-group-item">LinkedIn: ${answers.managerOffice}</li>
    </ul>
  </div>
</div>
</body>
</html>`;



  
  runProgram();