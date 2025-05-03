//Day 3 of learning javascript

//TRY AND CATCH
//didnt stop the sequence of the exution if an error occurs 
try {
    console.log(a);
}
catch {
    console.log("error occur..a is not defined")
}

//ARROW FUNCTION
const sum = (a, b) => {
    console.log(a + b)
}
sum(1, 2);

//SET TIMEOUT FUNCTION

console.log("hello")

setTimeout(() => {
    console.log("subhash");
}, 4000)

//SET INTERVAL

setInterval(() => {
    console.log("hello");
}, 2000)

//ARRAY METHODS 
//forEaach

let arr = [
    {
        name: "subhash",
        marks: 95
    },
    {
        name: "tejaswi",
        marks: 96
    },
    {
        name: "vijay",
        marks: 92
    }
];
arr.forEach((student) => {
    console.log(student.marks)
});

// every
[2, 4, 6].every((el) => el % 2 == 0);

//REDUCE -- reduce the value to the single value
//example
let final = [1, 2, 3, 4].reduce((res, el) => {
    console.log(res);
    return res + el;
});

console.log(final);

//SPREAD Operator
//It is used to "spread" the elements of an array or the properties of an object into another array or object. 

//in Arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];  // Spread arr1 into a new array
console.log(arr2); // [1, 2, 3, 4, 5]

//in objects

const obj1 = { name: "John", age: 25 };
const obj2 = { ...obj1, city: "Delhi" };
console.log(obj2); // { name: "John", age: 25, city: "Delhi" }

//exampple
const nums = [1, 2, 3];
console.log(Math.max(...nums)); // 3

// ARRAYS DESTRUCTURING 
//means--Destructuring in JavaScript is a way to unpack 
// values from arrays or objects into separate variables — in a clean, short way.\

let array = [10, 20, 40];

let [a, b, c] = array;
console.log(a);
console.log(b);
console.log(c);

//Object Destructuring - similar but names should be same 

const person = { name: "Alice", age: 22 };

const { name, age } = person;
console.log(name); // Alice
console.log(age);