const inquirer = require ("inquirer");
const fs = require ("fs");
const getTeamHtml = require ("./lib/htmlgenerator");
const Manager = require ("./lib/manager");
const Engineer = require ("./lib/engineer");
const Intern = require ("./lib/intern");
const employees = [];

const menuQ = {message:"What do you want to do next?",name:"action",type:"list", choices:["add manager", "add engineer", "add intern", "exit"]};
const employeeQ = [{
    message:"Name?",name:"name"
}, {message: "Id?", name: "id"
}, {message:"Email?",name:"email"
}];

const managerQ = [...employeeQ,
    {message:"Office number?", name:"officeNumber"}
];

const engineerQ = [...employeeQ,
    {message:"Github?", name:"github"}
];

const internQ = [...employeeQ,
    {message:"School?", name:"school"}
];

function beginApp(){
    console.log("welcome to my app");
    mainMenu ();
}

function mainMenu(){
    inquirer.prompt(menuQ).then(action);
}

function action(response){
    switch(response.action){
        case "add manager":addManager(); break;
        case "add engineer":addEngineer(); break;
        case "add intern":addIntern(); break;
        case "exit":createHtmlFile(); break;
    }
}

function addManager(){
    inquirer.prompt(managerQ).then(response=>{
        employees.push(new Manager(response.name, response.id, response.email, response.officeNumber));
        console.log("manager Created");
        mainMenu();
    });    
}

function addEngineer(){
    inquirer.prompt(engineerQ).then(response=>{
        employees.push(new Engineer(response.name, response.id, response.email, response.github));
        console.log("engineer Created");
        mainMenu();
    });    
}

function addIntern(){
    inquirer.prompt(internQ).then(response=>{
        employees.push(new Intern(response.name, response.id, response.email, response.school));
        console.log("intern Created");
        mainMenu();
    });    
}

function createHtmlFile(){
    const path="./dist/team.html";
    const html=getTeamHtml(employees);
    fs.writeFileSync(path,html);
    finishApp();
}
function finishApp(){
    console.log("look for your html file in this dist folder");
    console.log("thank you for using my app.");
    process.exit(1);
}

beginApp();