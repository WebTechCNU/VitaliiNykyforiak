let inputBtn = document.getElementById("count-button");
let countRes = document.querySelector(".count-res");

inputBtn.addEventListener("click", function() {
    let input = document.getElementById("input-textarea").value;
    let count = input.length;;
    countRes.innerHTML = count;
});

