/* 
38) Write a program that displays the following count on the screen: 6 7 8 9 10 11 Done!
*/

import { pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function count(): void {
    let counter: number = 6;

    while (counter <= 11) {
      console.log(counter);
      counter++;
    }

    console.log(`It's Over !`);
  }

  count();
}

main();
pressEnterToExit();
