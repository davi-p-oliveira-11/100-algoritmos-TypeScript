/* 
 24) Write an algorithm that asks for the distance a passenger wants
 to travel in Km. Calculate the ticket price, charging $0.50 per Km for
 trips up to 200Km and $0.45 for longer trips.
*/

import { prompt, pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function calculate(): void {
    const distanceTraveled: number = parseInt(
      prompt("How many kilometers will you travel ? ")
    );
    const ticketPrice1: number = distanceTraveled * 0.5;
    const ticketPrice2: number = distanceTraveled * 0.45;

    if (distanceTraveled < 200) {
      console.log(`You will pay ${ticketPrice1} USD`);
    } else {
      console.log(`You will pay ${ticketPrice2} USD`);
    }
  }
  calculate();
}

main();
pressEnterToExit();
