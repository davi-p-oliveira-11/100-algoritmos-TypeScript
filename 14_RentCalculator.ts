/* 
 14) The car rental company needs your help to charge for their services. 
 Write a program that asks for the number of kilometers driven by a 
 rented car and the number of days it was rented. Calculate the total price to pay, 
 knowing that the car costs $90 per day and $0.20 per kilometer driven.
*/

import { prompt, pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function calculateRent(): void {
    const distanceTraveled: number = parseInt(
      prompt(`How many kilometers were driven with the rented car ? `)
    );
    const daysRented: number = parseInt(
      prompt(`For how many days was the car rented ? `)
    );

    const costForDays: number = daysRented * 90;
    const costForDistance: number = distanceTraveled * 0.2;

    const totalCost: number = costForDays + costForDistance;

    console.log(`
        The customer drove ${distanceTraveled} km with the car, 
        rented the car for ${daysRented} days
        which cost ${costForDays.toFixed(2)} dollars for the rental days 
        and ${costForDistance.toFixed(2)} dollars for the kilometers driven, 
        the total cost the customer must pay is: ${totalCost.toFixed(2)} dollars
      `);
  }

  calculateRent();
}

main();
pressEnterToExit();

function algorithm14(daysRented: number, distanceTraveled: number): string {
  function calculateCostPerDay(daysRented: number): number {
    return daysRented * 90;
  }

  function costForDistance(distanceTraveled: number): number {
    return distanceTraveled * 0.2;
  }

  const costDays: number = calculateCostPerDay(daysRented);
  const costDistance: number = calculateCostPerDay(distanceTraveled);

  return `The customer drove ${distanceTraveled} km with the car, 
        rented the car for ${daysRented} days
        which cost ${costDays.toFixed(2)} dollars for the rental days 
        and ${costDistance.toFixed(2)} dollars for the kilometers driven, 
        the total cost the customer must pay is: ${costDays + costDistance} 
        USD
      `;
}

console.log(algorithm14(1, 1));
console.log(algorithm14(12, 800));
console.log(algorithm14(5, 150));
console.log(algorithm14(30, 1200));
console.log(algorithm14(3, 100));
