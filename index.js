// TODO: Include packages needed for this application
var inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
  {type: "input", name: "creatorName", message: "what is your name?"},
  {
    type: "input",
    name: "title",
    message: "what is the title of your project?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
  });
}

// Function call to initialize app
init();
