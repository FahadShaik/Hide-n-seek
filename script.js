"use strict";

// lets start by targetting the elements now

//everything is working fine.
// document.querySelector(".result-label");
// console.log(document.querySelector(".result-label").textContent);

// document.querySelector(".button-submit").addEventListener("click", function () {
//   console.log(document.querySelector(".guess-input").value);
// });

//1. First implement if the input is empty the string should change to empty field.
// 2. Now generate a random Number from 1-20 and change the string to correct guess.

//Generating the random number.
let luckyNumber = Math.trunc(Math.random() * 20) + 1;

//setting up the score.
let score = 20;

//Logic for the highscore
let highScore = 0;

document.querySelector(".button-submit").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess-input").value);
  console.log(Boolean(guessNumber));

  if (!guessNumber) {
    document.querySelector(".result-label").textContent = "💀 Field Empty!!!";
  } else if (guessNumber === luckyNumber) {
    document.querySelector(".lucky-number").textContent = luckyNumber;

    document.querySelector(".result-label").textContent =
      " 🎉🎉🎉Yayy! you win the game";
    document.querySelector("body").classList.add("body-afterwin");

    if (score > highScore) {
      highScore = score;
      document.querySelector(".high-score").textContent = highScore;
    }
  } else if (guessNumber > luckyNumber) {
    if (score > 1) {
      document.querySelector(".result-label").textContent =
        "👆 Number Too High!!!";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".result-label").textContent = " 😭 You Lose. ";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guessNumber < luckyNumber) {
    if (score > 1) {
      document.querySelector(".result-label").textContent =
        "👇 Number Too Low!!!";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".result-label").textContent = " 😭 You Lose. ";
      document.querySelector(".score").textContent = 0;
    }
  }
});

//Now lets reset the game instead of Refreshing it everytime to play again

document.querySelector(".button-27").addEventListener("click", function () {
  luckyNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".lucky-number").textContent = "🤔";

  score = 20;
  document.querySelector(".score").textContent = score;

  document.querySelector(".guess-input").value = "";

  document.querySelector(".result-label").textContent = "Start Guessing...";
  document.querySelector("body").classList.remove("body-afterwin");
});
