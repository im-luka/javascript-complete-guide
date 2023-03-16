"use strict";

// CODING CHALLENGE #1

const whereAmI = (lat, lng) => {
  const url = `https://geocode.xyz/${lat},${lng}?geoit=json`;
  fetch(url)
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

whereAmI(29, 31);
