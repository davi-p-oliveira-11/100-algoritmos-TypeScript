/*
48) Write a program that reads 7 integer numbers and at the end displays the sum
between them.
*/

import { prompt, pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function algorithm(): void {
    let counter: number = 1;
    let sum: number = 0;

    while (counter <= 7) {
      let num: number = parseInt(prompt("Type a number: "));
      sum += num;
      counter++;
    }

    console.log(`The sum of the entered numbers is ${sum}`);
  }

  algorithm();
}

main();
pressEnterToExit();
