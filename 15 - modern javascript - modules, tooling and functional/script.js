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

// ⬇️ Top-Level Await (ES2022)

console.log("start fetching");
// blocking flow of the code
// needs type="module" in html
const res = await fetch("https://jsonplaceholder.typicode.com/posts");
const data = await res.json();
console.log(data);
console.log("stopped fetching");

const getLastPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);

  return {
    title: data.at(-1).title,
    text: data.at(-1).body,
  };
};
const lastPost = getLastPost();
console.log(lastPost);

// not very clean
lastPost.then((last) => console.log(last));

// better way
const lastPost2 = await getLastPost();
console.log(lastPost2);
