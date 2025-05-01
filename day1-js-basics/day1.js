// DAY 1 OF LEARING JAVASCRIPT
// CONDITIONAL STATEMENTS 

// IF CONDITION EXAMPLE

let color = "green";

if (color === "red") {
    console.log("stop");
}
if (color === "yellow") {
    console.log("slow down");
}
if (color === "green") {
    console.log("move");
}

// ELSE IF AND ELSE

let size = 'XL';

if (size === "XL") {
    console.log("price is Rs.250");
}
else if (size === "L") {
    console.log("price is Rs.200");
}
else if (size === "M") {
    console.log("price is Rs.100")
}
else if (size === "S") {
    console.log("Price is Rs.50")
}
else {
    console.log("Your size is not avaliable")
}

// AND OR OPERATORs AND LENGHT 

let s = "amazon";

if ((s[0] === "a") && (s.length > 3 || s[0] != "a")) {
    console.log("its a good string");
}
else {
    console.log("not a good string");
}

// SWITCH STATEMENT 

let day = 5;

switch (day) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thrusday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    default:
        console.log("its a wrong day!")
}


// ALERTS AND PROMPT 

// alert("this is an simple alert");

console.log("this is an log");
console.error("this is an error msg");
console.warn("this is an warning");

// let name = prompt("enter your name : ");


// STRING METHODS 

let msg = "hello!  "
console.log(msg.trim().toUpperCase());

let namee = 'subhash villa';
console.log(namee.slice(0, 4));
console.log(namee.indexOf("bh"))
console.log(namee.replace("subhash", "tejaswi"))

// ARRAY METHODS 
let arr = ["a", 'b', 'c', 'd']
console.log(arr.indexOf('a')) //return index of something
console.log(arr.includes('b')) // search for a value 
// arr.reverse() // reverse an array
let arr2 = ['e', 'f']
console.log(arr.concat(arr2));//merges two array

// array slice -- copies an portion of an array
arr.slice(2)
arr.slice(2, 3)

//array splice -- removes /replace/add elements in place
//splice(start,delete,item)
arr.splice(1, 2)
arr.sort()

// FOR LOOP
for (let i = 1; i <= 5; i++) {
    console.log(i)
}