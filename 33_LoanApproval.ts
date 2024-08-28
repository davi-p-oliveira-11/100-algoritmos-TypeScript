/* 
33) Develop a program to determine if a home loan should be approved. 
The program should ask for the home price, the buyer's income, and the loan term in years. 
Calculate the monthly payment. 
If the monthly payment is more than 30% of the buyer's income, deny the loan.
*/

import { prompt, pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function loanCalculate(): void {
    const houseValue: number = parseFloat(prompt("Enter house price: "));
    const salary: number = parseFloat(
      prompt("Enter the value of your salary: ")
    );
    const yearsPaying: number = parseInt(
      prompt("In how many years do you intend to pay off the house?")
    );

    const months = yearsPaying * 12;

    const installment = houseValue / months;

    if (installment > salary * 0.3) {
      console.log("Unfortunately, we cannot grant you the loan.");
    } else {
      console.log("Congratulations, your loan has been approved !");
    }
  }

  loanCalculate();
}

main();
pressEnterToExit();
