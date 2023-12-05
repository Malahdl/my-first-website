const txt = document.getElementById("text");
const btn = document.getElementById("btn");

let isClicked = "no";

btn.addEventListener("click", () => {
    if(isClicked == "no") {
        txt.innerHTML = "This Event Is Going To Be The Biggest Someday :)";
        btn.innerText = "Go Back";
        isClicked = "yes";
    } else {
        txt.innerHTML = "The biggest startup event of the year";
        btn.innerText = "Find out more";
        isClicked = "no";
    }
})