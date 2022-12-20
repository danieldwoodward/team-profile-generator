const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

// This is the prompts section that will be called by the classes

const managerPrompts = [
  {
    type: "input",
    message: "What is the manager's name?",
    name: "managerName",
  },
  {
    type: "input",
    message: "What is the manager's id?",
    name: "managerId",
  },
  {
    type: "input",
    message: "What the manager's email?",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "What is the manager's office number?",
    name: "managerOfficeNum",
  },
  {
    type: "input",
    message: "What is the team's name?",
    name: "managerTeamName",
  },
  {
    type: "list",
    message: "Would you like to add another team member?",
    choices: ["engineer", "intern", "that's all!"],
    name: "teamSelect",
  },
];
//prompts to ask about the engineer on the team

const engineerPrompts = [
  {
    type: "input",
    message: "What is the engineer's name?",
    name: "engineerName",
  },
  {
    type: "input",
    message: "What is the engineer's id?",
    name: "engineerId",
  },
  {
    type: "input",
    message: "What the engineer's email?",
    name: "engineerEmail",
  },
  {
    type: "input",
    message: "What is the engineer's gitHub account name?",
    name: "engineerGitHub",
  },
  {
    type: "list",
    message: "Would you like to add another team member?",
    choices: ["engineer", "intern", "that's all!"],
    name: "teamSelect",
  },
];

// prompts to ask about intern
const internPrompts = [
  {
    type: "input",
    message: "What is the intern's name?",
    name: "internName",
  },
  {
    type: "input",
    message: "What is the intern's id?",
    name: "internId",
  },
  {
    type: "input",
    message: "What the intern's email?",
    name: "internEmail",
  },
  {
    type: "input",
    message: "What is the intern's school?",
    name: "internSchool",
  },
  {
    type: "list",
    message: "Would you like to add another team member?",
    choices: ["engineer", "intern", "that's all!"],
    name: "teamSelect",
  },
];

// function writeMainFile(nameOfFile, content){
//   fs.writeFile(nameOfFile, content, error => error ? console.error(error) : console.log('file is created!'))
// }

function html(object) {
  return `
  <!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
<link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
      integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <title>${object.teamName}</title>
</head> 
<body class="row">
    <header>
        <h1 class="p-5 container-fluid col-12 bg-info text-center mb-5">${object.teamName}</h1>
    </header>
    <div class="col-3 card m-5" style="width: 18rem;">
      <i class="fa-solid fa-${object.icon} fa-4x p-3"></i>
        <div class="card-body">
          <h5 class="card-title">Manager</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: ${object.name}</li>
          <li class="list-group-item">Id: ${object.id}</li>
          <li class="list-group-item">Email: ${object.email}</li>
          <li class="list-group-item">Office Number: ${object.officeNum}</li>
        </ul>
      </div>
</body>
</html>
`;
}

function init() {
  inquirer.prompt(managerPrompts).then((response) => {
    const manager = new Manager(
      response.managerName,
      response.managerId,
      response.managerEmail,
      response.managerOfficeNum,
      response.managerTeamName
    );

    let createdManager = html(manager);

    fs.writeFile("./dist/team-index.html", createdManager, (error) =>
      error ? console.error(error) : null
    );


    const newMember = response.teamSelect;


    if(newMember ===  "that's all!"){
      console.log("Good Job Creating Your Team Profile!");
      return;
    }
    if(newMember === "intern"){
      internCreate();
    }
    if(newMember === "engineer"){
      engineerCreate();
    }

  });
}

function cardEngineer(object) {
  return `
  <div class="col- 3 card m-5" style="width: 18rem;">
  <i class="fa-solid fa-${object.icon} fa-4x p-3"></i>
    <div class="card-body">
      <h5 class="card-title">Engineer</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Name: ${object.name}</li>
      <li class="list-group-item">Id: ${object.id}</li>
      <li class="list-group-item">Email: ${object.email}</li>
      <li class="list-group-item">Github: ${object.gitHub}</li>
    </ul>
  </div>
    `;
}

function engineerCreate() {
  inquirer.prompt(engineerPrompts).then((response) => {
    const engineer = new Engineer(
      response.engineerName,
      response.engineerId,
      response.engineerEmail,
      response.engineerGitHub
    );
    let createdEngineer = cardEngineer(engineer);
    fs.appendFile("./dist/team-index.html", createdEngineer, (error) => {
      error ? console.error(error) : null;
    });

    if (response.teamSelect === "that's all!") {
      console.log("Good Job Creating Your Team Profile!");
      return;
    }
    if (response.teamSelect === "engineer") {
      engineerCreate();
    } else {
      internCreate();
    }
  });
}

function cardIntern(object) {
  return `
  <div class="col-3 card m-5" style="width: 18rem;">
  <i class="fa-solid fa-${object.icon} fa-4x p-3"></i>
    <div class="card-body">
      <h5 class="card-title">Intern</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Name: ${object.name}</li>
      <li class="list-group-item">Id: ${object.id}</li>
      <li class="list-group-item">Email: ${object.email}</li>
      <li class="list-group-item">School: ${object.school}</li>
    </ul>
  </div>
    `;
}

function internCreate() {
  inquirer.prompt(internPrompts).then((response) => {
    const intern = new Intern(
      response.internName,
      response.internId,
      response.internEmail,
      response.internSchool
    );
    let createdIntern = cardIntern(intern);
    fs.appendFile("./dist/team-index.html", createdIntern, (error) => {
      error ? console.error(error) : null;
    });

    if (response.teamSelect === "that's all!") {
      console.log("Good Job Creating Your Team Profile!");
      return;
    }
    if (response.teamSelect === "engineer") {
      engineerCreate();
    }
    if (response.teamSelect === "intern") {
      internCreate();
    } 
  });
}
init();