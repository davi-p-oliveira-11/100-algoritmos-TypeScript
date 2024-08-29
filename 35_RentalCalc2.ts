/*
35) A car rental company needs to charge for its services. 
Renting a popular car costs R$90 per day, and a luxury car costs R$150 per day. 
Additionally, the customer pays per kilometer driven. 
Create a program that reads the type of car rented (popular or luxury), 
the number of rental days, and the number of kilometers driven. 
At the end, display the price to be paid according to the following table:

Popular cars (90USD rental per day)
Up to 100km driven: 0.20USD per km
Over 100km driven: 0.10USD per km
Luxury cars (150USD rental per day)
Up to 100km driven: 0.30USD per km
Over 100km driven: 0.25USD per km
*/

import { prompt, pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function calculate(): void {
    const rentedCar: string = prompt(
      "Would you like to rent a Popular or Luxury car ? Enter P for Popular and L for luxury"
    ).toUpperCase();

    const daysRented: number = parseInt(
      prompt("For how many days did you use the car?")
    );

    const distanceTraveled: number = parseFloat(
      prompt("Enter how many kilometers were driven with the car:")
    );

    const priceForDaysRentedPopular: number = daysRented * 90;
    const priceForDaysRentedLuxury: number = daysRented * 150;

    const popularFare1 = distanceTraveled * 0.2;
    const popularFare2 = distanceTraveled * 0.1;
    const luxuryFare1 = distanceTraveled * 0.3;
    const luxuryFare2 = distanceTraveled * 0.25;

    if (rentedCar !== "P" && rentedCar !== "L") {
      console.log("Error: Please enter a valid car category.");
    } else if (rentedCar === "P" && distanceTraveled >= 100) {
      console.log(`You rented a Popular car for ${daysRented} days`);
      console.log(`traveled ${distanceTraveled}km with the car.`);
      console.log(`and will pay a total of 
        ${priceForDaysRentedPopular + popularFare1} USD`);
    } else if (rentedCar === "P" && distanceTraveled < 100) {
      console.log(`You rented a Popular car for ${daysRented} days`);
      console.log(`traveled ${distanceTraveled}km with the car.`);
      console.log(`and will pay a total of 
        ${priceForDaysRentedPopular + popularFare2} USD`);
    } else if (rentedCar === "L" && distanceTraveled >= 100) {
      console.log(`You rented a Luxury car for ${daysRented} days`);
      console.log(`traveled ${distanceTraveled}km with the car.`);
      console.log(`and will pay a total of 
        ${priceForDaysRentedLuxury + luxuryFare1} USD`);
    } else if (rentedCar === "L" && distanceTraveled < 100) {
      console.log(`You rented a Luxury car for ${daysRented} days`);
      console.log(`traveled ${distanceTraveled}km with the car.`);
      console.log(`and will pay a total of 
        ${priceForDaysRentedLuxury + luxuryFare2} USD`);
    }
  }

  calculate();
}

main();
pressEnterToExit();
