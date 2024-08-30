/*
 39) Create an algorithm that displays the following count on the screen:
10 9 8 7 6 5 4 3 Done!
*/

import { pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function count(): void {
    let counter = 10;

    while (counter >= 3) {
      console.log(counter);
      counter--;
    }

    console.log(`It's over !`);
  }

  count();
}

main();
pressEnterToExit();
