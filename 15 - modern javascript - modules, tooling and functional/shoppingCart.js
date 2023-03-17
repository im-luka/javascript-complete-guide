// ⬇️ Exporting module
// ⬇️ Importing module

// export is executed before import (this file before script.js file)

// blocking code
// script.js needs to wait for fetch to complete
// console.log("start fetching");
// await fetch("https://jsonplaceholder.typicode.com/posts");
// console.log("finish fetching");

const shippingCost = 10;
export const cart = [];

export const addToCart = (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

// export defaults - when want to export only one value

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
