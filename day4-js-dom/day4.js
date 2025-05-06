//day 4 of learning javascript

//DOM (Document Object Model) is how the browser represents your web page as a tree of elements.

//document.getElementById()
const title = document.getElementById("myTitle");

//document.querySelector()

const btnt = document.querySelector("button");
const box = document.querySelector(".myClass");

//. document.querySelectorAll()

const allItems = document.querySelectorAll("li");


// Event Listeners
//You use event listeners to make your page interactive.
//It waits for events like click, hover, input, etc.
const btnn = document.getElementById("myBtn");

btn.addEventListener("click", function () {
    alert("Button clicked!");
});


let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let h3 = document.querySelector("h3");
    let randomcolor = getRandomcolor();
    h3.innerText = randomcolor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomcolor;
    console.log("color updated");
})

btn.addEventListener("click", function () {
    console.log("generate random color")
});
function getRandomcolor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}