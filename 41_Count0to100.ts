/* 
41) Develop a program that shows the following count:
100 95 90 85 80 ... 0 It's over !
*/

import { pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function count(): void {
    let counter: number = 100;

    while (counter >= 0) {
      console.log(counter);
      counter -= 5;
    }

    console.log(`It's over !`);
  }

  count();
}

main();
pressEnterToExit();
