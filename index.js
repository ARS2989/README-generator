// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

//Creating an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Create a name for your project.",
  },
  {type: "input",
    name: "description",
    message: "What is your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Why did you build this project?",
  },
  {
    type: "input",
    name: "screenshot",
    message: "Please provide a relative path for the image you want to use as a screenshot."
  },
  {
    type: "input",
    name: "link",
    message: "Please provide a URL where a user can access your deployed application."
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license applicable to this project.",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
  },
  {
    type: "input",
    name: "require",
    message: "Disclose any project dependencies.",
  },
  {
    type: "input",
    name: "features",
    message: "List some interesting features about this project.",
  },
  {
    type: "input",
    name: "usage",
    message:
      "List the languages or technologies associated with this project.",
  },
  {
    type: "input",
    name: "creator",
    message: "Input your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Provide a valid email address.",
  },
  {
    type: "input",
    name: "contributors",
    message: "Please list any contributors. (Use GitHub usernames)",
    default: "",
  },
  {
    type: "input",
    name: "test",
    message: "Provide walkthrough of required tests if applicable.",
  },
];

// Writing README.md File
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Initializing app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating Professional README.md File...");
    writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
  });
}
init();
