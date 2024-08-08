/* 
16) [CHALLENGE] Write a program to calculate the reduction in a smoker's lifespan. 
Ask for the number of cigarettes smoked per day and how many years they have been smoking. 
Consider that a smoker loses 10 minutes of life for each cigarette. 
Calculate how many days of life a smoker will lose and display the total in days.
*/

import { prompt, pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function calculate(): void {
    const cigarettesPerDay: number = parseInt(
      prompt("How many cigarretes do you smoke per day ?")
    );
    const yearsSmoking: number = parseInt(
      prompt("How many years have you been smoking ?")
    );

    const totalCigarsSmoked: number = cigarettesPerDay * 365 * yearsSmoking;

    const minutesLost: number = totalCigarsSmoked * 10; // lifetime lost for 1 cigarrette

    const daysLost: number = minutesLost / 1440;

    console.log(
      `You have already lost ${daysLost.toFixed(1)} days of your life.`
    );
  }

  calculate();
}

main();
pressEnterToExit();
