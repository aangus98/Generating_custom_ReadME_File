
// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input

const questions = [
    {
        // Title
        // Need to change the format to make the title an h1
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation instructions.",
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide usage information.",
    },
    {
        type: "input",
        name: "contribution",
        message: "Please provide contribution guidelines.",
    },
    {
        type: "input",
        name: "test",
        message: "Please provide test instructions.",
    },
    {
        type: "input",
        name: "Github",
        message: "Please enter your GitHub username.",
    },
    {
        type: "input",
        name: "Email",
        message: "Please enter your email address.",
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license for your project.",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
    },
]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("File created successfully!");
        }
    });
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => { 


        

        writeToFile("README.md", generateMarkdown(data));
    }
    );
}



// Function call to initialize app
init();
export default function (data) {
}