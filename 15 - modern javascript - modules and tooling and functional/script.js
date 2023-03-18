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
// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);
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
// const lastPost = getLastPost();
// console.log(lastPost);

// not very clean
// lastPost.then((last) => console.log(last));

// better way
// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// ⬇️ The Module Pattern

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = (product, quantity) => {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = (product, quantity) => {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart("apple", 4);
ShoppingCart2.addToCart("pizza", 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost); // undefined

// ⬇️ Introduction to NPM

import cloneDeep from "lodash-es";

const state = {
  cart: [
    { product: "bread", quantity: 5 },
    { product: "pizza", quantity: 2 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
console.log(stateClone);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

// ⬇️ Bundling with Parcel and NPM Scripts

if (module.hot) {
  module.hot.accept();
}
