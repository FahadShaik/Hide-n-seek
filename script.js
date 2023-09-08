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
// console.log(luckyNumber);

//setting up the score.
let score = 20;

//Logic for the highscore
let highScore = 0;

//targeting the classes into queryselectors is a better option

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const submitBtn = document.querySelector(".button-submit");
const gameResult = document.querySelector(".game-result");
const gameEmoji = document.querySelector(".result-emoji");
const gameScore = document.querySelector(".score");

//callback functions to hide modal
const removeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

//callback functions to show modal
const displayModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

submitBtn.addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess-input").value);
  console.log(Boolean(guessNumber));

  if (!guessNumber) {
    displayModal();
    gameResult.textContent = "Field Empty!!!";
    gameEmoji.textContent = "💀";
  } else if (guessNumber === luckyNumber) {
    displayModal();
    document.querySelector(".lucky-number").textContent = luckyNumber;
    gameResult.textContent = "Yayy! you win the game";
    gameEmoji.textContent = "🎉";

    document.querySelector("body").classList.add("body-afterwin");

    //Updates highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector(".high-score").textContent = highScore;
    }
  } else if (guessNumber > luckyNumber) {
    if (score > 1) {
      displayModal();
      gameResult.textContent = "Number Too High!!!";
      gameEmoji.textContent = "👆";
      score = score - 1;
      gameScore.textContent = score;
    } else {
      displayModal();
      gameResult.textContent = "You Lose.";
      gameEmoji.textContent = "😭";
      gameScore.textContent = 0;
    }
  } else if (guessNumber < luckyNumber) {
    if (score > 1) {
      displayModal();
      gameResult.textContent = " Number Too Low!";
      gameEmoji.textContent = "👇";
      score = score - 1;
      gameScore.textContent = score;
    } else {
      displayModal();
      gameResult.textContent = "You Lose.";
      gameEmoji.textContent = "😭";
      gameScore.textContent = 0;
    }
  }
});

//Now lets reset the game instead of Refreshing it everytime to play again

document.querySelector(".button-27").addEventListener("click", function () {
  luckyNumber = Math.trunc(Math.random() * 20) + 1;
  // console.log(luckyNumber);
  document.querySelector(".lucky-number").textContent = "🤔";

  score = 20;
  gameScore.textContent = score;

  document.querySelector(".guess-input").value = "";

  document.querySelector("body").classList.remove("body-afterwin");
});

overlay.addEventListener("click", removeModal);
closeModal.addEventListener("click", removeModal);
