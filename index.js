const inquirer = require("inquirer");
const axios = require("axios")
const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
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
        name: "questionAsked"
    }
];


inquirer.prompt({
    message: "Enter your GitHub username",
    name: "username"
})
.then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}`;


    axios 
    .get(`https://api.github.com/users/${username}`)
    .then(function(response){
      console.log(response.data);
      const questionsJSON = JSON.stringify(questions);
      console.log(questionsJSON);
      const { data } = response.data;
      writeFileAsync(`${ username }README.md`, data, function(error) {
          readFileAsync("index.js", questionsJSON,"utf8")
      .catch(function(error) {
          console.log(error);
          })
      });
  

  
    });
  });

