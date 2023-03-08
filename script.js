"use strict";

// First

let array = [12, 25, 3, 6, 8, 14, 7, 23];
let array2 = array.map((i) => i / 3);

console.log(array2);

// Second

let programmingLang = ["html", "css", "javascript", "python", "php"];
let sLang = programmingLang.filter((x) => x.length > 3);

console.log(sLang);

// Third

let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
let wordsWithM = words.filter (item => item.includes('M' ,'m'));

// რომს არ აგდებს...
console.log(wordsWithM);

// Fourth

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let newArray = arr1.concat(arr2, arr3);
console.log(newArray);

// Fifth

let array3 = [-1, -2, -3, 4];
let arr = [-1, -2, -3, 4].some((y) => y > 0);

console.log(arr);

// Seventh

let newDiv = document.createElement("div");
newDiv.classList.add("wraper");
document.getElementById("box").appendChild(newDiv);
let newImg = document.createElement("img");
newImg.setAttribute("src", "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg");
newImg.setAttribute("alt", "image");
newDiv.appendChild(newImg);
let newH = document.createElement("h2");
newH.textContent = "image title";
newH.classList.add("title");
newH.style.color = "red";
newH.style.fontSize = "30px";
newDiv.appendChild(newH);

// Eight

let pI = document.createElement(p);
pI.setAttribute("class", "text");
pI.innerText = "Hello";

document.querySelectorAll(".test").appendChild(pI);

// Ninth 

let array5 = [2,15,10,24];
let newArray5 = array5.splice(2, 1);
console.log(array5);