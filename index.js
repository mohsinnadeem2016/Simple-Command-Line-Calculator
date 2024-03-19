#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{ message: "Enter First Number", type: "number", name: "FisrtNumber" },
    { message: "Enter Second Number", type: "number", name: "SecondNumber" },
    { message: "Select one of the operator to perform operation", type: "list", name: "operator", choices: ["Addition", "Subtraction", "Multiplication", "Division"] },
]);
//Conditional Statement 
if (answer.operator === "Addition") {
    console.log(answer.FisrtNumber + answer.SecondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.FisrtNumber - answer.SecondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.FisrtNumber * answer.SecondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.FisrtNumber / answer.SecondNumber);
}
else {
    console.log("Please enter valid operator");
}
