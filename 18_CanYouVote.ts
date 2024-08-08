/* 
18) Write a program that reads a person's year of birth, 
calculates their age, and then shows whether they are eligible to vote or not.
*/

import { prompt, pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function checkAge(): void {
    const yearOfBirth: number = parseInt(
      prompt("What is your year of birth ? ")
    );
    const currentYear: number = parseInt(prompt("What year is it? "));
    const userAge: number = currentYear - yearOfBirth;

    userAge >= 16
      ? console.log("You are already eligible to vote.")
      : console.log("You are not old enough to vote yet.");
  }
  checkAge();
}

main();
pressEnterToExit();
