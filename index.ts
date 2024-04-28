#! /usr/bin/env node
import inquirer from "inquirer";


const randomNumber: number = Math.floor(10000 + Math.random() * 9000)
console.log(randomNumber);

let myBalance: number = 0

let answer = await inquirer.prompt([
 {
 name: "students",
 type: "input",
 message: "Enter student name",
 validate: function (value) {
 if (value.trim() !== "") {
 return true;
 }
return "Please enter a non-empty value."

 }
 },
 {
 name: "courses",
 type: "list",
 message: "Select the course to enrolled",
 choices: ["MS.office", "HTML", "Javascript", "Typescript", "Python"]
 }
]

);

const tutionFee: {[key: string]: number} = {
 "MS.office": 2000,
 "HTML": 2500,
 "Javascript": 5000,
 "Typescript": 6000,
 "Python": 10000,
};


console.log(`\nTution Fees: ${tutionFee[answer.courses]}`);
console.log(`Balance: ${myBalance}\n`)

let paymentType = await inquirer.prompt(
 [
 {
 name: "payment",
 type: 'list',
 message: "Select payment method",
 choices: ["Bank Transfer", "Easypaisa", "Jazzcash"]
 },
 {
 name: "amount",
 type: "input",
 message: "Transfer money:",
 validate: function (value) {
 if (value.trim() !== "") {
 return true;
 }
 return "Please enter a non-empty value."
 }
 }
 ]
);

console.log(`\nyou select payment method ${paymentType.payment}`)


const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount)


if (tutionFees === paymentAmount) {
 console.log(`Congratulations, you have successfully enrolled in ${answer.courses}.\n`)

let ans = await inquirer.prompt([
 {
 name: "select",
 type: "list",
 message: "what would you like to do next?",
 choices: ["View status","Exit"]
 }
]);

if (ans.select === "View status") {
 console.log("******status******\n");
 console.log(`student Name: ${answer.students}`);
 console.log(`student ID: ${randomNumber}`);
 console.log(`course: ${answer.courses}`);
 console.log(`Tution Fees Paid: ${paymentAmount}`);
 console.log(`Balance: ${myBalance += paymentAmount}`)
}else {
 console.log("\nExisting student Management system\n")
}

} else {
 console.log(`\nInvalid amount due to course\n`)
}


