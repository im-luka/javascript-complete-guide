"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

// ⬇️ First AJAX Call: XMLHttpRequest

// old way - not in use anymore
// const getCountryData = (country) => {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const languages = Object.values(data.languages);
//     const currencies = Object.values(data.currencies);

//     const html = `
//       <article class="country">
//         <img class="country__img" src=${data.flags.svg} />
//         <div class="country__data">
//           <h3 class="country__name">${data.name.common}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <p class="country__row"><span>👫</span>${(
//             +data.population / 1000000
//           ).toFixed(1)} people</p>
//           <p class="country__row"><span>🗣️</span>${languages[0]}</p>
//           <p class="country__row"><span>💰</span>${currencies[0].name}</p>
//         </div>
//       </article>
//     `;
//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
//   });
// };
// getCountryData("portugal");

// ⬇️ Callback Hell

// const renderCountry = (data, className = "") => {
//   const languages = Object.values(data.languages);
//   const currencies = Object.values(data.currencies);
//   const html = `
//       <article class="country ${className}">
//         <img class="country__img" src=${data.flags.svg} />
//         <div class="country__data">
//           <h3 class="country__name">${data.name.common}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <p class="country__row"><span>👫</span>${(
//             +data.population / 1000000
//           ).toFixed(1)} people</p>
//           <p class="country__row"><span>🗣️</span>${languages[0]}</p>
//           <p class="country__row"><span>💰</span>${currencies[0].name}</p>
//         </div>
//       </article>
//     `;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighbor = (country) => {
//   // ajax call country 1
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // render country 1
//     renderCountry(data);

//     // get neighbor country (2)
//     const neighbor = data.borders?.[0];
//     if (!neighbor) {
//       return;
//     }

//     // ajax call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbor}`);
//     request2.send();

//     request2.addEventListener("load", function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, "neighbour");
//     });
//   });
// };
// getCountryAndNeighbor("croatia");

setTimeout(() => {
  console.log("1 second passed");
  setTimeout(() => {
    console.log("2 second passed");
    setTimeout(() => {
      console.log("3 second passed");
      setTimeout(() => {
        console.log("4 second passed");
        setTimeout(() => {
          console.log("5 second passed");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

// ⬇️ Promises and the Fetch API

const request = fetch("https://restcountries.com/v3.1/name/croatia");
console.log(request);
