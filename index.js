// TODO: Include packages needed for this application
var fs = require("fs");
var path = require("path");
var inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  { type: "input", name: "creatorName", message: "what is your name?" },
  {
    type: "input",
    name: "title",
    message: "what is the title of your project?",
  },
  { type: "input", name: "description", message: "describe your project" },
  {
    type: "input",
    name: "installation",
    message: "enter installation instructions",
  },
  { type: "input", name: "usage", message: "enter usage instruction" },
  {
    type: "list",
    name: "license",
    message: "choose a license",
    choices: ["MIT", "Mozilla", "Creative Commons", "IBM", "Apache"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    // console.log(answers);
    fs.writeFileSync(
      path.join(process.cwd(), "creatorreadme.md"),
      generateMarkdown(answers)
    );
    console.log("Congrats on your new file");
  });
}

// Function call to initialize app
init();
