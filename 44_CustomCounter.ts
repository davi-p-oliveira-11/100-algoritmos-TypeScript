/*
 44) Create an algorithm that reads the initial value of the count, the final value, and the increment, then displays all the values within the interval:
Example:
Enter the first value: 3
Enter the last value: 10
Enter the increment: 2
Counting: 3 5 7 9 It's over!
*/

import { prompt, pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function algorithm(): void {
    let firstValue: number = parseInt(prompt("Enter the first value: "));
    let lastValue: number = parseInt(prompt("Enter the last value: "));
    let increment: number = parseInt(
      prompt("Type the value of the increment: ")
    );

    let counter: number = firstValue;

    while (counter <= lastValue) {
      console.log(counter);
      counter += increment;
    }

    console.log("It's over !");
  }
  algorithm();
}

main();
pressEnterToExit();
