function add() {
    let inputA = document.querySelector("#input-a").value;
    let inputB = document.querySelector("#input-b").value; 

    let result = Number(inputA) + Number(inputB);
    let output = document.querySelector(".result-count");
    output.innerHTML = result;
}

button = document.querySelector("#button");
button.addEventListener("click", add);