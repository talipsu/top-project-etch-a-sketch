"use strict";
//
const buttonContainer = document.createElement("div");
buttonContainer.classList.add("buton-c");
document.body.appendChild(buttonContainer);
//
const btn = document.createElement("button");
btn.classList.add("buton1");
buttonContainer.appendChild(btn);
btn.textContent = "refresh";
//
const btn2 = document.createElement("button");
btn2.classList.add("buton2");
buttonContainer.appendChild(btn2);
btn2.textContent = "clear";
//
const btn3 = document.createElement("button");
btn3.classList.add("buton3");
buttonContainer.appendChild(btn3);
btn3.textContent = "rgb";
//
const blackPen = document.createElement("button");
blackPen.classList.add("black-p");
blackPen.textContent = "Black";
buttonContainer.appendChild(blackPen);
//
const bluePen = document.createElement("button");
bluePen.classList.add("blue-p");
bluePen.textContent = "Blue";
buttonContainer.appendChild(bluePen);

// body içerisine container1 sınıflı ana div eklendi.
const containerUst = document.createElement("div");
containerUst.classList.add("container1");
document.body.appendChild(containerUst);
//
////

// üst konteynır içerisine alt bir konteynır eklendi.
// const containerAlt = document.createElement("div");
// containerAlt.classList.add("container2");
// containerUst.appendChild(containerAlt);
let currentPen = "black";
let starterColumns = 16;
let starterRows = 16;

function buildGrid(x, y, cellSize, gridElement) {
  gridElement.style.display = "grid";
  gridElement.style.gridTemplateColumns = `repeat(${x}, ${cellSize}px)`;
  gridElement.style.gridTemplateRows = `repeat(${y}, ${cellSize}px)`;

  let squares = new DocumentFragment();

  for (let i = 0; i < x * y; i++) {
    let square = document.createElement("div");
    square.className = "square";
    squares.appendChild(square);
  }
  gridElement.appendChild(squares);
}

buildGrid(
  starterColumns,
  starterRows,
  25,
  document.querySelector(".container1")
);

///////////////////////
// bütün kareleri seçme
let squaresInC = document.querySelectorAll(".square");
/////////////////////////
// refresh butonuna basıldığında yeni bir grid
btn.addEventListener("click", function () {
  reset();
  let numberOfs = Number(
    prompt("Please enter number of squares per side, from 1 to 100")
  );
  console.log(numberOfs);
  if (numberOfs >= 1 && numberOfs <= 100) {
    starterColumns = Number(numberOfs);
    starterRows = Number(numberOfs);
    currentPen = "black";
    buildGrid(
      Number(starterColumns),
      Number(starterRows),
      25,
      document.querySelector(".container1")
      // squaresInC = document.querySelectorAll(".square");
      // squaresInC.forEach(function (el) {
      //   el.addEventListener("mouseover", doit, false);
      // });
    );
  } else numberOfs = Number(prompt("Please enter valid number, from 1 to 100"));
});
// kareleri maviye boyama
// function doit(e) {
//   e.target.style.backgroundColor = "black";
// }

function reset() {
  squaresInC.forEach((e) => e.parentNode.removeChild(e));
}
//
btn2.addEventListener("click", function () {
  currentPen = "white";
});
//
btn3.addEventListener("click", function () {
  currentPen = "rgb";
});
//
bluePen.addEventListener("click", function () {
  currentPen = "blue";
});
////
blackPen.addEventListener("click", function () {
  currentPen = "black";
});

squaresInC.forEach(function (el) {
  el.addEventListener("mouseover", function (e) {
    if (currentPen === "blue") colorBlue(e);
    // el.style.backgroundColor = "blue";
    else if (currentPen === "black") colorBlack(e);
    // el.style.backgroundColor = "black";
    else if (currentPen === "rgb") colorGen(e);
    else if (currentPen === "white") colorWhite(e);
  });
});

function colorBlack(e) {
  e.target.style.backgroundColor = "black";
}
function colorBlue(e) {
  e.target.style.backgroundColor = "blue";
}
function colorWhite(e) {
  e.target.style.backgroundColor = "white";
}
function colorGen(e) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  e.target.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

// if ((currentPen = "black")) {
//   squaresInC = document.querySelectorAll(".square");
//   squaresInC.forEach(function (el) {
//     el.addEventListener("mouseover", colorBlack, false);
//   });
// }
// if ((currentPen = "blue")) {
//   squaresInC = document.querySelectorAll(".square");
//   squaresInC.forEach(function (el) {
//     el.addEventListener("mouseover", colorBlue, false);
//   });
// }

/// Blue'ya basınca currentpen blue olsun.

///

// squareInC.addEventListener("mouseover", function (e) {
//   e.target.style.color = "blue";
//   console.log(e);
// });

// document.querySelector(".square").addEventListener("mouseover", func, false);
// document.querySelector(".square").addEventListener("mouseout", func1, false);

// function func() {
//   document
//     .querySelector(".square")
//     .setAttribute("style", "background-color:green;");
// }

// function func1() {
//   document
//     .querySelector(".square")
//     .setAttribute("style", "background-color:green;");
// }

/////////////

// for (let i = 0; i < 16; i++) {
//   for (let j = 0; j < 16; j++) {
//     const square = document.createElement("div");
//     square.classList.add("square");
//     containerAlt.appendChild(square);
//   }
//   square.innerHTML += "<br>";
// }
