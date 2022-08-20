let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let count = document.getElementById("count");


increase.addEventListener("click", () => {
    count.innerText = Number(count.innerText) + 1;
    count.style.color = "rgb(19, 228, 19)";
})

decrease.addEventListener("click", () => {
    count.innerText = Number(count.innerText) - 1;
    count.style.color = "rgb(206, 22, 22)";
})