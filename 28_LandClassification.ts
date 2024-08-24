/* 
28) Write a program that asks the user to input the width and length of a 
rectangular plot of land. The program should then calculate and display the 
area of the land in square meters. 
Additionally, the program should classify the
land based on the following criteria:

Less than 100 square meters: POPULAR
Between 100 and 500 square meters: MASTER
Greater than 500 square meters: VIP
*/

import { prompt, pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function landClassification(): void {
    const width: number = parseFloat(prompt("Enter the width of the land: "));
    const length: number = parseFloat(prompt("Enter the length of the land:"));

    const area: number = width * length;

    if (area < 100) {
      console.log(
        `The land measures ${area} square meters, so it is a Popular Land.`
      );
    } else if (area >= 100 && area <= 500) {
      console.log(
        `The land measures ${area} square meters, so it is a Master Land.`
      );
    } else {
      console.log(
        `The land measures ${area} square meters, so it is a VIP Land.`
      );
    }
  }

  landClassification();
}

main();
pressEnterToExit();
