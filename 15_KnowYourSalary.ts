/* 
 15) Create a program that reads the number of days worked in a month and shows the salary of an employee, 
 knowing that they work 8 hours per day and earn $25 per hour worked.
*/

import { prompt, pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function calculate(): void {
    const daysWorked: number = parseInt(
      prompt("How many days did you work  last month ? ")
    );
    const salary: number = daysWorked * 200;

    console.log(`
        The employee worked ${daysWorked} days
        and will receive ${salary} USD
      `);
  }
  calculate();
}

main();
pressEnterToExit();
