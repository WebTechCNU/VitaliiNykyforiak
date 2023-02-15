function addition() {
    let inputA = document.querySelector("#input-a").value;
    let inputB = document.querySelector("#input-b").value; 

    let resultAdd = Number(inputA) + Number(inputB);
    let outputAdd = document.querySelector(".add-res");
    outputAdd.innerHTML = resultAdd;
}

function multiply() {
    let inputA = document.querySelector("#input-a").value;
    let inputB = document.querySelector("#input-b").value;

    let resultMulti = Number(inputA) * Number(inputB);
    let outputMulti = document.querySelector(".multi-res");
    outputMulti.innerHTML = resultMulti;
}

function division() {
    let inputA = document.querySelector("#input-a").value;
    let inputB = document.querySelector("#input-b").value;

    let resultDivi = Number(inputA) / Number(inputB);
    let outputDivi = document.querySelector(".divi-res");
    outputDivi.innerHTML = resultDivi;
}

function subtraction() {
    let inputA = document.querySelector("#input-a").value;
    let inputB = document.querySelector("#input-b").value;

    let resultSubt = Number(inputA) - Number(inputB);
    let outputSubt = document.querySelector(".subtr-res");
    outputSubt.innerHTML = resultSubt;
}

let addButton = document.querySelector("#adding-button");
addButton.addEventListener("click", addition);
let multiButton = document.querySelector("#multi-button");
multiButton.addEventListener("click", multiply);
let diviButton = document.querySelector("#divi-button");
diviButton.addEventListener("click", division);
let subtrButton = document.querySelector("#subtr-button");
subtrButton.addEventListener("click", subtraction);