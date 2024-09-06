/* 
 47) Develop an application that displays the result of the 
 expression 500 + 450 + 400 + 350 + 300 + ... + 50 + 0
*/

import { pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function algorithm(): void {
    let sum: number = 0;
    let counter: number = 500;

    while (counter != 0) {
      sum += counter;
      counter -= 50;
    }

    console.log(
      `The sum between 500 + 450 + 400 + 350 + 300 ... + 50 + 0 is: ${sum}`
    );
  }

  algorithm();
}

main();
pressEnterToExit();
