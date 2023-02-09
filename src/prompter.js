// Import inquirer module
const inquirer = require("inquirer");

// Import classes
const Manager = require("../lib/manager");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");

// Import function
const generateAndWriteFiles = require("./generateHTML");

// Define inquirer questions
const EMPLOYEE_QUESTIONS = [
  {
    type: "input",
    name: "name",
    message: "What is the name of the employee: ",
  },
  {
    type: "input",
    name: "employeeID",
    message: "What is their employee ID: ",
  },
  {
    type: "input",
    name: "email",
    message: "What is their email: ",
  },
]

const MANAGER_QUESTIONS = [
  {
    type: "input",
    name: "officeNum",
    message: "What is their office number: ",
  },
]

const ENGINEER_QUESTIONS = [
  {
    type: "input",
    name: "github",
    message: "What is their GitHub username: ",
  },
];

const INTERN_QUESTIONS = [
  {
    type: "input",
    name: "school",
    message: "What is their school's name: ",
  },
];

const MENU_QUESTIONS = [
  {
    type:"list",
    name:"nextAction",
    message:"What do you want to do next: ",
    choices: ["Add engineer", "Add intern", "Generate HTML Page"],
  },
]

// Combine questions based on employee type 
const ALL_MANAGER_QUESTIONS = [...EMPLOYEE_QUESTIONS, ...MANAGER_QUESTIONS];
const ALL_ENGINEER_QUESTIONS = [...EMPLOYEE_QUESTIONS, ...ENGINEER_QUESTIONS];
const ALL_INTERN_QUETIONS = [...EMPLOYEE_QUESTIONS, ...INTERN_QUESTIONS];

// Class to handle inquirer prompts
class Prompter {
  constructor() {
    // Holds manager, engineer, and intern objects
    this.members = [];
  }

  // Start adding team members by starting with the manager
  startGatheringInfo() {
    console.log('Start by adding the manager of the team')
    this.gatherMemberInfo("Manager");
  }

  // Use inquirer to gather team member information
  gatherMemberInfo(memberType) {
    // Select which questions to ask based on member type
    let questions;
    if (memberType == "Manager") {
      questions = ALL_MANAGER_QUESTIONS;
    } else if (memberType == "Engineer") {
      questions = ALL_ENGINEER_QUESTIONS;
    } else if (memberType == "Intern") {
      questions = ALL_INTERN_QUETIONS;
    }

    // Ask questions
    inquirer
      .prompt(questions)
      .then(data => {
          console.log("Member information collected\n");
          let member;
          if (memberType == "Manager") {
            member = new Manager(data.name, data.employeeID, data.email, data.officeNum);         
          } else if (memberType == "Engineer") {
            member = new Engineer(data.name, data.employeeID, data.email, data.github);       
          } else if (memberType == "Intern") {
            member = new Intern(data.name, data.employeeID, data.email, data.school);
          }
      
          // Add member info to data array
          this.members.push(member);

          // Show menu so user can pick next action
          this.showMenu();
      });
  }

  // Displays a menu to add another employee or generate the HTML page
  showMenu() {
    inquirer
      .prompt(MENU_QUESTIONS)
      .then(data => {
        // Direct user to next section based on input
        let nextAction = data["nextAction"];
        if (nextAction == "Add engineer") {
          this.gatherMemberInfo("Engineer");
        } else if (nextAction == "Add intern") {
          this.gatherMemberInfo("Intern");
        } else if (nextAction == "Generate HTML Page") {
          generateAndWriteFiles(this.members);
        }
      });
  }
}

module.exports = Prompter;