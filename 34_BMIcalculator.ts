/* 
34) The Body Mass Index (BMI) is a value calculated based on a person's height and weight. 
According to the BMI value, we can classify the individual within certain ranges.   

below 18.5: Underweight
between 18.5 and 25: Normal weight   
between 25 and 30: Overweight
between 30 and 40: Obese
above 40: Morbidly obese 

Note: BMI is calculated by the expression weight/height² (weight divided by height squared).
*/

import { prompt, pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function calculateBMI(): void {
    const weight: number = parseFloat(prompt("Enter you weight in kgs: "));
    const height: number = parseFloat(prompt("Enter your height in meters: "));

    const bmi: number = weight / height ** 2;

    if (bmi < 18.5) {
      console.log(`Your bmi is ${bmi.toFixed(2)} you are underweight`);
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      console.log(`Your bmi is ${bmi.toFixed(2)} you have the normal weight`);
    } else if (bmi >= 25 && bmi <= 29.9) {
      console.log(`Your bmi is ${bmi.toFixed(2)} you are overweight`);
    } else if (bmi >= 30 && bmi <= 39.9) {
      console.log(`Your bmi is ${bmi.toFixed(2)} you are obese `);
    } else if (bmi > 40) {
      console.log(`Your bmi is ${bmi.toFixed(2)} you are morbidly obese`);
    }
  }

  calculateBMI();
}

main();
pressEnterToExit();
