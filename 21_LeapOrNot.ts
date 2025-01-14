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

function algorithm21(year: number): string | number {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return `${year} is leap`;
  } else {
    return `${year} is not leap`;
  }
}

console.log(algorithm21(2000));
console.log(algorithm21(1892));
console.log(algorithm21(2005));
console.log(algorithm21(2016));
console.log(algorithm21(2024));
