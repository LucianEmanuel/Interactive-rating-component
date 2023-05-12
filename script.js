"use strict";

const container = document.querySelector(".container");
const thanks = document.querySelector(".thank-you");
const submit = document.querySelector(".submit-btn");
const rating = document.querySelector(".rate");
const btn = document.querySelectorAll(".btn");

submit.addEventListener("click", function () {
  container.classList.toggle("hidden");
  thanks.classList.toggle("hidden");
});

thanks.addEventListener("click", function () {
  container.classList.toggle("hidden");
  thanks.classList.toggle("hidden");
});

btn.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.textContent = rate.textContent;
  });
});
