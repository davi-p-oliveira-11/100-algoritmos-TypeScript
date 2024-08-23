/*
23) In an exclusive promotion for Women's Day, 
a store wants to give discounts to everyone, 
but especially to women. 
Create a program that reads the customer's name, gender, 
and the purchase value and calculates the price with a discount. Knowing that:   

Men get a 5% discount
Women get a 13% discount 
*/

import { prompt, pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function calculateDiscount(): void {
    const customerName: string = prompt("Type you name: ");

    const customerGender: string = prompt(
      "Enter your gender F for female and M male: "
    ).toUpperCase();

    const purchaseAmount: number = parseFloat(
      prompt("What was the total value of the purchase ? ")
    );

    const menDiscount: number = purchaseAmount * 0.05;
    const womenDiscount: number = purchaseAmount * 0.13;

    const completeValueMen = purchaseAmount - menDiscount;
    const completeValueWomen = purchaseAmount - womenDiscount;

    if (customerGender === "F") {
      console.log(`
        ${customerName} made a purchase of ${purchaseAmount.toFixed(2)} USD
         and earned a discount of 13% and will pay ${completeValueWomen} USD
        `);
    } else if (customerGender === "M") {
      console.log(`
        ${customerName} made a purchase of ${purchaseAmount.toFixed(2)} USD
        and earned a discount of %5 and will pay ${completeValueMen} USD
        `);
    } else {
      console.log(`Enter a valid gender, F for female M for male !`);
    }
  }

  calculateDiscount();
}

main();
pressEnterToExit();
