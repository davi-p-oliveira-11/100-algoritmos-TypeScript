/* 
29) Develop a program that reads an employee's name, their salary, and how many years they have worked for the company. 
Then, display their new salary, adjusted according to the following table:
Up to 3 years at the company: 3% increase
Between 3 and 10 years: 12.5% increase
10 years or more: 20% increase 
*/

import { prompt, pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function raiseCalculator(): void {
    const employeeName: string = prompt("Enter the number of the employee: ");
    const salary: number = parseFloat(prompt("Enter your salary amount: "));
    const yearsWorked: number = parseInt(
      prompt("How many years have you worked at the company ?")
    );

    const increase3: number = salary * 0.03;
    const increase12: number = salary * 0.125;
    const increase20: number = salary * 0.2;

    if (yearsWorked < 3) {
      console.log(
        `The employee ${employeeName} has worked for the company for ${yearsWorked} years`
      );
      console.log(
        `and will receive a 3% raise, resulting a new salary of 
        ${salary + increase3}`
      );
    } else if (yearsWorked >= 3 && yearsWorked < 10) {
      console.log(
        `The employee ${employeeName} has worked for the company for ${yearsWorked} years`
      );
      console.log(
        `and will receive a 12.5% raise, resulting a new salary of 
        ${salary + increase12}`
      );
    } else {
      console.log(
        `The employee ${employeeName} has worked for the company for ${yearsWorked} years`
      );
      console.log(
        `and will receive a 20% raise, resulting a new salary of 
        ${salary + increase20}`
      );
    }
  }

  raiseCalculator();
}

main();
pressEnterToExit();
