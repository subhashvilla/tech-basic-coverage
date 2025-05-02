# 📅 Day 1 - JavaScript Basics

## 🔥 Topics Covered

- Conditional Statements
  - if, else if, else
  - Logical Operators (AND, OR)
- switch statement
- Alerts, Prompts (basic usage)
- String Methods
  - `trim()`, `toUpperCase()`, `slice()`, `indexOf()`, `replace()`
- Array Methods
  - `indexOf()`, `includes()`, `reverse()`, `concat()`, `slice()`, `splice()`, `sort()`
- Loops
  - `for` loop (including even number printing)
  - `while` loop
- Mini Project
  - Simple guess-the-movie game using `prompt()` and `while` loop

---

## 🧠 What I Learned

- How to use basic `if/else` logic to control flow in JavaScript.
- The difference between `slice()` and `splice()` in arrays.
- Using string and array methods for simple data manipulation.
- Practiced how loops work with counters and conditions.
- Built a basic interactive guessing game with `prompt()`.

---

## 💡 Code Highlights

```js
// Conditional Statement
let color = "green";
if (color === "green") {
    console.log("move");
}

// String Methods
let msg = "hello!  "
console.log(msg.trim().toUpperCase()); // "HELLO!"

// Array Methods
let arr = ["a", "b", "c"];
arr.splice(1, 1); // removes "b"

// Loop Example
for (let i = 2; i <= 15; i += 2) {
    console.log(i); // Prints even numbers
}

// Mini Game
const favmovie = "avengers";
let guess = prompt("guess my movie");
while (guess !== favmovie && guess !== "quit") {
    guess = prompt("wrong guess try again");
}
