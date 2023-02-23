
let arr = [];
let addButton = document.getElementById("check-button");
let checkResult = document.querySelector(".check-res");

addButton.addEventListener("click", function() {

  let input = document.getElementById("input-element-in-array").value;
  if (arr.includes(input)) {
    checkResult.innerHTML = "Element already in array";
  } else {
    arr.push(input);
    checkResult.innerHTML = "Element firstly  typed in array";
  }
  
  document.getElementById("input-element-in-array").value = "";
});

let resButton = document.getElementById("reset-button");

resButton.addEventListener("click", function() {
    arr = [];
    checkResult.innerHTML = "";
    document.getElementById("input-element-in-array").value = "";
});