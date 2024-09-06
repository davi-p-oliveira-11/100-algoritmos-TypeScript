/*
 42) Write an algorithm that asks the user for any positive integer 
and displays a count up to that value:
Example: Enter a value: 35
Count: 1 2 3 4 5 6 7 ... 33 34 35 Done!
*/

import { prompt, pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function algorithm(): void {
    let userNumber: number = parseInt(prompt("Enter a positive value: "));
    let counter = 1;

    while (counter <= userNumber) {
      console.log(counter);
      counter++;
    }

    console.log("It's over !");
  }

  algorithm();
}

main();
pressEnterToExit();
