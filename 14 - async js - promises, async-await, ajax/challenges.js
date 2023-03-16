"use strict";

// CODING CHALLENGE #1

const whereAmINow = (lat, lng) => {
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

whereAmINow(29, 31);

// CODING CHALLENGE #2

function createImage(imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", (e) => {
      document.querySelector(".images").append(img);
      resolve(img);
    });

    img.addEventListener("error", (e) => {
      reject(new Error("image not found"));
    });
  });
}

let currImg;

createImage("img/img-1.jpg")
  .then((img) => {
    currImg = img;
    return wait(2);
  })
  .then(() => {
    currImg.style.display = "none";
    return createImage("img/img-2.jpg");
  })
  .then((img) => {
    currImg = img;
    return wait(2);
  })
  .then(() => {
    currImg.style.display = "none";
    return createImage("img/img-3.jpg");
  })
  .then((img) => {
    currImg = img;
    return wait(2);
  })
  .then(() => {
    currImg.style.display = "none";
  })
  .catch((err) => console.error(err));
