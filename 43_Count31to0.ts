/* 
 43) Develop an algorithm that displays a countdown from 30 to 1, marking the numbers 
 that are divisible by 4, exactly as shown below:
30 29 [28] 27 26 25 [24] 23 22 21 [20] 19 18 17 [16]...
*/

import { pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function algorithm(): void {
    let counter: number = 31;

    while (counter >= 2) {
      counter--;
      if (counter % 4 === 0) {
        console.log(`[${counter}]`);
      } else {
        console.log(counter);
      }
    }

    console.log("It's over !");
  }

  algorithm();
}

main();
pressEnterToExit();
