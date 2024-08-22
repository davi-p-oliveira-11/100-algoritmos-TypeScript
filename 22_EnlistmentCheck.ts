/* 
22) Write a program that reads a guy's birth year and displays his situation 
regarding military enlistment.

If he is under 18 years old, show how many years are left until enlistment.
If he is over 18 years old, show how many years have passed since enlistment.
*/

import { prompt, pressEnterToExit } from "./utils/inputUtils";
import { format } from "date-fns";

function main(): void {
  function calculateAge(): void {
    const yearOfBirth: number = parseInt(prompt(" What year were you born?"));
    const currentYear: number = parseInt(format(new Date(), "yyyy"));

    const age = currentYear - yearOfBirth;

    /* The function Math.max with the values 0, 18 and the variable
       idade, guarantees that the remaining years will never have a
       negative value, in case they have the value will be equal to 0 */

    const yearsRemaining: number = Math.max(0, 18 - age);

    const yearThatComplete18: number = yearOfBirth + 18;

    const yearsPassed: number = currentYear - yearThatComplete18;

    if (age < 18) {
      console.log(
        `You're not old enough to enlist yet. You'll have to wait ${yearsRemaining} more years.`
      );
    } else if (age === 18) {
      console.log(`You are the right age to enlist this year`);
    } else if (age > 18) {
      console.log(`You missed your enlistment by ${yearsPassed} years`);
    }
  }

  calculateAge();
}

main();
pressEnterToExit();
