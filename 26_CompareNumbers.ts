/*
26) Write an algorithm that reads two integers and compares them, displaying
one of the following messages on the screen:
- The first value is greater
- The second value is greater
- There is no greater value, both are equal
*/

import { prompt, pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function compareNumbers(): void {
    const num1: number = parseInt(prompt(`Type a number: `));
    const num2: number = parseInt(prompt(`Type another number: `));

    if (num1 > num2) {
      console.log(`The first value is greater`);
    } else if (num1 < num2) {
      console.log(`The second value is greater`);
    } else if (num1 === num2) {
      console.log(`
       There is no greater value, both are equal`);
    }
  }

  compareNumbers();
}

main();
pressEnterToExit();
