function add() {
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

button = document.querySelector("#button");
button.addEventListener("click", add);
button.addEventListener("click", multiply);