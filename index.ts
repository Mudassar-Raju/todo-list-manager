#! usr/bin/env node
import inquirer from "inquirer"
let todos = [];
let condition = true;


while(condition)
{
let addTask = await inquirer.prompt(
  [
    {
     name: "firstQuestion",
     type: "input",
     message:"What would you like to add in your todos?" 
    },
    {
      name:"secondQuestion",
      type:"confirm",
      message:"Do you want to add more in your todos ?",
      default:"true"
    }

  ]
);
todos.push(addTask.firstQuestion);
condition = addTask.secondQuestion
console.log(todos)
}