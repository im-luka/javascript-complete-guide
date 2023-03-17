"use strict";

const btn = document.querySelector(".btn-country");
const btn2 = document.querySelector(".btn-country2");
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

const renderCountry = (data, className = "") => {
  const languages = Object.values(data.languages);
  const currencies = Object.values(data.currencies);
  const html = `
      <article class="country ${className}">
        <img class="country__img" src=${data.flags.svg} />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${languages[0]}</p>
          <p class="country__row"><span>💰</span>${currencies[0].name}</p>
        </div>
      </article>
    `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

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

// setTimeout(() => {
//   console.log("1 second passed");
//   setTimeout(() => {
//     console.log("2 second passed");
//     setTimeout(() => {
//       console.log("3 second passed");
//       setTimeout(() => {
//         console.log("4 second passed");
//         setTimeout(() => {
//           console.log("5 second passed");
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// ⬇️ Promises and the Fetch API

// const request = fetch("https://restcountries.com/v3.1/name/croatia");
// console.log(request);

// ⬇️ Consuming Promises

// const getCountryData = (country) => {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => {
//       console.log(response);
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// const getCountryData = (country) =>
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => response.json())
//     .then((data) => renderCountry(data[0]));

// getCountryData("croatia");

// ⬇️ Chaining Promises

// const getCountryData = (country) =>
//   // country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => response.json())
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbor = data[0].borders?.[0];
//       if (!neighbor) {
//         return;
//       }

//       // country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
//     })
//     .then((response) => response.json())
//     .then((data) => renderCountry(data[0], "neighbour"));

// getCountryData("switzerland");

// ⬇️ Handling Rejected Promises
// ⬇️ Throwing Errors Manually

// const getCountryData = (country) =>
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(
//       (response) => response.json(),
//       (err) => alert(err)
//     )
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbor = data[0].borders?.[0];
//       if (!neighbor) {
//         return;
//       }
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
//     })
//     .then(
//       (response) => response.json(),
//       (err) => alert(err)
//     )
//     .then((data) => renderCountry(data[0], "neighbour"));

// better way of handling errors - in catch method

const renderError = (msg) => {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = (url, errorMsg = "Something went wrong") => {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${errorMsg} ${response.status}`);
    }
    return response.json();
  });
};

// const getCountryData = (country) =>
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => {
//       console.log(response);
//       if (!response.ok) {
//         throw new Error(`Country not found ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       // const neighbor = data[0].borders?.[0];
//       const neighbor = "hsdfhjshdbfjk";
//       if (!neighbor) {
//         return;
//       }
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
//     })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`Country not found ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((data) => renderCountry(data[0], "neighbour"))
//     .catch((err) => {
//       console.error(`${err} 💥💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });

const getCountryData = (country) =>
  getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country not found")
    .then((data) => {
      renderCountry(data[0]);
      // const neighbor = data[0].borders?.[0];
      const neighbor = "hsdfhjshdbfjk";
      if (!neighbor) {
        throw new Error("No neighbor found!");
      }
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbor}`,
        "Country not found"
      );
    })
    .then((data) => renderCountry(data[0], "neighbour"))
    .catch((err) => {
      console.error(`${err} 💥💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });

btn.addEventListener("click", () => {
  getCountryData("australia");
});

// ⬇️ The Event Loop in Practice

console.log("Test start");
setTimeout(() => {
  console.log("0 sec timer");
}, 0);
Promise.resolve("Resolved promise 1").then((response) => console.log(response));
Promise.resolve("Resolved promise 2").then((response) => {
  for (let i = 0; i < 100000000; i++) {}
  console.log(response);
});
console.log("Test end");

// ⬇️ Building a Simple Promise

const lotteryPromise = new Promise((resolve, reject) => {
  console.log("Lottery has started! 🔮");
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("You WIN money 💰");
    } else {
      reject(new Error("You lost your money 🛑"));
    }
  }, 2000);
});

lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// Promisifying setTimeout
const wait = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log("1 second passed!");
    return wait(1);
  })
  .then(() => {
    console.log("2 seconds passed!");
    return wait(1);
  })
  .then(() => {
    console.log("3 seconds passed!");
    return wait(1);
  })
  .then(() => {
    console.log("4 seconds passed!");
    return wait(1);
  })
  .then(() => console.log("5 seconds passed!"));

Promise.resolve("abc").then((x) => console.log(x));
Promise.reject(new Error("problem!")).catch((x) => console.error(x));

// ⬇️ Promisifying the Geolocation API

const getPosition = () => {
  return new Promise((resolve, reject) => {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => resolve(position),
    //   (err) => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then((pos) => console.log(pos));

const whereAmI = () => {
  getPosition()
    .then((pos) => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Problem with geocoding: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(
        `You are in ${data.standard.city}, ${data.standard.countryname}`
      );
      return fetch(
        `https://restcountries.com/v3.1/name/${data.standard.countryname}`
      );
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Country not found ${response.status}`);
      }
      return response.json();
    })
    .then((data) => renderCountry(data))
    .catch((err) => console.log(`${err.message} 💥`));
};

btn2.addEventListener("click", whereAmI);

// ⬇️ Consuming Promises with Async/Await

// const whereAmMe = async () => {
//   const pos = await getPosition();
//   const { latitude: lat, longitude: lng } = pos.coords;

//   const responseGeo = await fetch(
//     `https://geocode.xyz/${lat},${lng}?geoit=json`
//   );
//   const dataGeo = await responseGeo.json();

//   const response = await fetch(
//     `https://restcountries.com/v3.1/name/${dataGeo.country}`
//   );
//   const data = await response.json();
//   renderCountry(data[0]);
// };
// whereAmMe();

// ⬇️ Error Handling with Try/Catch

// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err.message);
// }

const whereAmMe = async () => {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    const responseGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json`
    );
    if (!responseGeo.ok) {
      throw new Error("Problem getting location data");
    }
    const dataGeo = await responseGeo.json();

    const response = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!responseGeo.ok) {
      throw new Error("Problem getting country");
    }
    const data = await response.json();
    renderCountry(data[0]);
  } catch (err) {
    console.error(`something went wrong ${err}`);
  }
};
whereAmMe();
