
// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
var Q1, Q2, Q3, Q4, Q5, Q6, Q7;
const questions = [
    Q1 = "What is the title of your project?",
    Q2 = "Please provide a description of your project.",
    Q3 = "Please provide installation instructions.",
    Q4 = "Please provide usage information.",
    Q5 = "Please provide contribution guidelines.",
    Q6 = "Please provide test instructions.",
    Q7 = "Please select a license for your project.",
];

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
    inquirer.prompt([
        {
            // Title
            // Need to change the format to make the title an h1
            type: "input",
            name: "title",
            message: questions[0],
        },
        {
            type: "input",
            name: "description",
            message: questions[1],
        },
        {
            type: "input",
            name: "installation",
            message: questions[2],
        },
        {
            type: "input",
            name: "usage",
            message: questions[3],
        },
        {
            type: "input",
            name: "contribution",
            message: questions[4],
        },
        {
            type: "input",
            name: "test",
            message: questions[5],
        },
        {
            type: "list",
            name: "license",
            message: questions[6],
            choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
        },
    ]).then((data) => {
        let file = `   
        ## Description  ${data.description} \n
        ## Installation  ${data.installation} \n
        ## Usage  ${data.usage} \n
        ## Contribution  ${data.contribution} \n
        ## Test  ${data.test} \n`
        writeToFile("README.md", file, generateMarkdown(data));
    }
    );
}



// Function call to initialize app


init();
