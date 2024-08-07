/* 
 12) Create a program that reads the price of a product, 
 calculates, and shows its PROMOTIONAL PRICE with a 5% discount.
*/

import { prompt, pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function calculateDiscount(): void {
    const productPrice: number = parseFloat(
      prompt("How much the product costs ? ")
    );

    const discount: number = productPrice * 0.05;
    const finalPrice: number = productPrice - discount;

    console.log(`The original price of the product is: ${productPrice}`);
    console.log(`The price with discount is : ${finalPrice}`);
  }

  calculateDiscount();
}

main();
pressEnterToExit();
