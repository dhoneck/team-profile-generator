// Import inquirer module
const inquirer = require("inquirer");

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
          console.log(data);
          // TODO: Store data
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
          console.log("Generating HTML");
          // TODO: Call a function to generate the HTML page
        }
      });
  }
}

module.exports = Prompter;