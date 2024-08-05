/* 
 Create a program that reads the name and salary of an employee, and displays a message at the end.

Example:
Employee Name: Jane Doe
Salary: 1850.45
The employee Jane Doe has a salary of R$1850.45 in June.
*/

import { prompt, pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function helloEmployee(): void {
    const name: string = prompt("What is the employee name ?");
    const salary: string = prompt("Enter your salary: ");
    const month: string = prompt("What was the last month that you worked ? ");

    console.log(
      `The employee ${name} has a salary of ${salary} USD in ${month}`
    );
  }
  helloEmployee();
}

main();
pressEnterToExit();
