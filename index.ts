#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";

let myAmount: number = 10000;
let mypin: number = 1234;

// welcome message
console.log(chalk.green("\tWelcome To Atm Machine"));
 
// user pin 
let answerPin = await inquirer.prompt([
  {
    message: "please input your pin",
    type: "number",
    name: "pin", 
  },
]);

if (answerPin.pin === mypin) {
  console.log(chalk.yellowBright("\tCorrect Pin\nYour Amount is $10,000"));

//   user transaction method
  let answerDisplay = await inquirer.prompt([
    {
      message: "please select your transaction method",
      type: "list",
      name: "operator",
      choices: ["withdraw", "fastcash", "balance inquiry"],
    },
  ]);
//  user amount
  if (answerDisplay.operator === "withdraw") {
    let ansAmount = await inquirer.prompt([
      {
        message: "Enter the amount to withdraw",
        type: "number",
        name: "amount",
      },
    ]);

    if (ansAmount.amount > myAmount) {
      console.log(chalk.redBright("Insufficient balance"));
    } else {
      myAmount -= ansAmount.amount;
      console.log(
        chalk.green(
          `Withdrawal successful. Your remaining balance is $${myAmount}`
        )
      );
    }
  } else if (answerDisplay.operator === "fastcash") {
    let ansFastCash = await inquirer.prompt([
      {
        name: "fastcash",
        type: "list",
        choices: ["500", "1000", "5000", "10000"],
      },
    ]);
    myAmount -= ansFastCash.fastcash; 
    console.log(
      chalk.blackBright(
        `Fast cash withdrawal successful. Your remaining balance is $${myAmount}`
      )
    );
    // user balane=ce inquiry
  } else if (answerDisplay.operator === "balance inquiry") {
    console.log(chalk.yellowBright(`Your current balance is $${myAmount}`));
  }
} else {
  console.log(chalk.redBright("Incorrect Pin"));
}
