/* 
21) Write an algorithm that reads a specific year and shows whether it is a LEAP YEAR or not."
*/

import { prompt, pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function leapOrNot(): void {
    const year: number = parseInt(prompt("Type a year: "));

    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      console.log(`${year} is leap`);
    } else {
      console.log(`${year} is not leap`);
    }
  }
  leapOrNot();
}

main();
pressEnterToExit();
