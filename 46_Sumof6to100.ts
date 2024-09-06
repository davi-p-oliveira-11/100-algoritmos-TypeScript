/* 
46) Create a program that calculates and displays the result 
of the sum of 6 + 8 + 10 + 12 + 14 + ... + 98 + 100.
*/

import { pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function algorithm(): void {
    let sum: number = 0;
    let counter: number = 6;

    while (counter <= 100) {
      sum += counter;
      counter += 2;
    }

    console.log(`The sum between 6 + 8 + 10 + 12 ... + 98 + 100 is: ${sum}`);
  }

  algorithm();
}

main();
pressEnterToExit();
