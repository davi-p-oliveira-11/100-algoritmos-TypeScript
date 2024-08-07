/* 
 11) Develop a logic that reads the values of A, B, and C 
 of a quadratic equation and shows the value of Delta.
*/

import { prompt, pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function calculateDelta(): void {
    const valueOfA: number = parseInt(prompt("Enter the value of A: "));
    const valueOfB: number = parseInt(prompt("Enter the value of B: "));
    const valueOfC: number = parseInt(prompt("Enter the value of C: "));

    const delta: number = valueOfB * valueOfB - 4 * (valueOfA * valueOfC);

    console.log(`The value of delta is equal to: ${delta}`);
  }
  calculateDelta();
}

main();
pressEnterToExit();
