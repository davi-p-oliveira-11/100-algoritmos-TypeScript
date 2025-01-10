/* 
 13) Create an algorithm that reads an employee's salary, 
 calculates, and shows their new salary with a 15% increase.
*/

import { prompt, pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function calculateSalary(): void {
    const salaryValue: number = parseFloat(
      prompt("What is the value of your salary ?")
    );

    const calculateRaise: number = salaryValue * 0.15;
    const newSalary: number = salaryValue + calculateRaise;

    console.log(`Your new salary with a raise of 15% is: ${newSalary}`);
  }
  calculateSalary();
}

main();
pressEnterToExit();

function algorithm13(salary: number): string {
  function calculateSalary(salary: number): number {
    return salary + salary * 0.15;
  }

  const newSalary = calculateSalary(salary);

  return `Your new salary with a raise of 15% is: ${newSalary}`;
}

console.log(algorithm13(100));
