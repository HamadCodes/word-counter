#! /usr/bin/env node

import inquirer from "inquirer"

const input = await inquirer.prompt([
    {message:"Enter your sentence",type:"string",name:"sentence"}
])

let sentence = input.sentence
let words = sentence.trim().split(" ")
console.log(words);
console.log(`The word count of your sentence is ${words.length}.`);