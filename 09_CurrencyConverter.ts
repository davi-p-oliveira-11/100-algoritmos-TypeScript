/* 

9) Write an algorithm that reads how much money a person has in their wallet (in R$) 
and shows how many dollars they can buy. Consider US$1.00 = R$3.45.
*/

import { prompt, pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function currencyConverter(): void {
    const avaiableBRL: number = parseFloat(
      prompt("How many BRL do you have in your pocket ?")
    );
    const dollarAmount: number = avaiableBRL / 3.45;

    console.log(`You can buy a total of ${dollarAmount.toFixed(2)} USD`);
  }
  currencyConverter();
}

main();
pressEnterToExit();
