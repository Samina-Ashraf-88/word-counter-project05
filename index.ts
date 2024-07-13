#! usr/bin/env node

import inquirer from "inquirer";
const answers:{
    Sentence:string
}=await inquirer.prompt({
    name:"Sentence",
    type:"input",
    message:"enter your sentence to count the words:"
});

const words=answers.Sentence.trim().split(" ");
console.log(words);

console.log(`your sentence word count is ${words.length}`);