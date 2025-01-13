/* 
17) Write a program that asks for the speed of a car. 
If it exceeds 80 km/h, display a message saying that the user has been fined. 
In this case, display the amount of the fine, charging R$5 for each km above the allowed speed.
*/

import { prompt, pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function monitorSpeed(): void {
    const carSpeed: number = parseInt(
      prompt("What is the speed reached by the car ?")
    );

    const exceedingSpeed: number = carSpeed - 80;
    const fineValue: number = exceedingSpeed * 5;

    const gotTicket: string = `
      The car reached a speed of ${carSpeed}km/h exceeding  ${exceedingSpeed} km/h of
      the allowed speed. The driver will have to pay a fine of ${fineValue} USD
    `;
    const noTicket: string = `
       The driver did not exceed the speed limit, so they will not have to pay a fine.
    `;

    carSpeed > 80 ? console.log(gotTicket) : console.log(noTicket);
  }
  monitorSpeed();
}

main();
pressEnterToExit();

function algorithm17(carSpeed: number): string | number | undefined {
  if (carSpeed > 80) {
    return `The car reached a speed of ${carSpeed}, exceeding ${
      carSpeed - 80
    } km/h
     of the allowed speed, The driver wiil have to pay a fine of ${
       (carSpeed - 80) * 5
     }`;
  } else {
    return "The driver did not exceed the speed limit, so they will not have to pay a fine.";
  }
}

console.log(algorithm17(100));
console.log(algorithm17(20));
console.log(algorithm17(13));
console.log(algorithm17(150));
console.log(algorithm17(200));
