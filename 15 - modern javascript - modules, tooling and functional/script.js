// ⬇️ Importing module

import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";

addToCart("bread", 5);
console.log(price, tq);

console.log("Importing module");
// console.log(shippingCost); // not working

// ----------------------------------------------------------

import * as ShoppingCart from "./shoppingCart.js";

ShoppingCart.addToCart("cornflakes", 2);
console.log(ShoppingCart.totalPrice);

// ----------------------------------------------------------

// don't mix default and named exports

import add, {
  cart,
  addToCart as atc,
  totalPrice as pricing,
  tq as qt,
} from "./shoppingCart.js";

add("pizza", 2);
add("bread", 5);
add("apples", 7);
console.log(price);

console.log(cart);
