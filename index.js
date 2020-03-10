var inquirer = require("inquirer");
var fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What would you like your title of your README to be?",
        name: "title"
    },
    {
        type: "input",
        message: "Please put a description to your project for your README.",
        name: "description"
    },
    {
        type: "input",
        message: "May you please include a Table of Contents.",
        name: "contents"
    },
    {
        type: "input",
        message: "Please explain the installation process of your project.",
        name: "installation"
    },
    {
        type: "input",
        message: "what is the usage of your project?",
        name: "usage"
    },
    {
        type: "list",
        message: "Please select a license for your project.",
        name: "license",
        choices: [
            "None",
            "Blah",
            "Blah"
        ]
    },
    {
        type: "input",
        message: "Please add any contributions to the README.",
        name: "contributions"
    },
    {
        type: "input",
        message: "Please include tests of your project.",
        name: "test"
    },
    {
        type: "input",
        message: "please add any questions that you believe would be helpful to the project.",
        name: "questions"
    }
]);

