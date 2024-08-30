/* 
20) Develop a program that reads an integer and shows whether it is EVEN or ODD."
*/

import { prompt, pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function evenOrOdd(): void {
    const num: number = parseInt(prompt("Type a number: "));

    num % 2 === 0 ? console.log("Even number") : console.log("Odd number");
  }
  evenOrOdd();
}

main();
pressEnterToExit();
