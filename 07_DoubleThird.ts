/* 
7) Create an algorithm that reads a real number and displays its double and its one-third.

Example:
Enter a number: 3.5
The double of 3.5 is 7.0
One-third of 3.5 is 1.16666
*/

import { prompt, pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function calculate(): void {
    const num1: number = parseFloat(prompt("Type a number: "));
    const double: number = num1 * 2;
    const third: number = num1 / 3;

    console.log(`The double of ${num1} is ${double.toFixed(2)}`);
    console.log(`The double of ${num1} is ${third.toFixed(2)}`);
  }
  calculate();
}

main();
pressEnterToExit();
