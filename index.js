const inquirer = require("inquirer");
const axios = require("axios")
const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const userInput = [];

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

// const questionsMessage  = questions.message;
// const [ questionsName ]  = questions.name; 
// // const [ questionsNameMessage ] = questionsMessage + "\n" + questionsName;
// console.log(questionsNameMessage);

inquirer.prompt({
    message: "Enter your GitHub username",
    name: "username"
})
.then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}`;

    axios 
    .get(queryUrl, )
    .then(function(response){
      const data = response.data;
      console.log(response.data);
      const email = data.email;
      const avatar = data.avatar_url;
      const questionsJSON = JSON.stringify(questions);
      writeFileAsync(`${ username }-README.md`, questionsJSON).then(function() {
          readFileAsync("index.js", avatar).then(function() {
              questions.forEach(function(questionsJSON) {
                console.log("Working");
            }); 
          })
      .catch(function(error) {
          console.log(error);
          });
      });
    });
  });

