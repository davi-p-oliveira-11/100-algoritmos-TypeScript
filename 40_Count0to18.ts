/* 
40) Write a program that writes on the screen the following count:
0 3 6 9 12 15 18 It's over !
*/

import { pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function count(): void {
    let counter: number = 0;

    while (counter <= 18) {
      console.log(counter);
      counter += 3;
    }

    console.log("It's over !");
  }

  count();
}

main();
pressEnterToExit();
