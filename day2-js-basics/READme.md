# 📅 Day 2 - JavaScript Functions, Objects & Basic Todo App

## 🔥 Topics Covered

- Loops + `prompt()` usage for dynamic input
- Mini Project: Command-line style TODO app
- Object Literals
- Defining and calling functions
- Parameters, return values
- Lexical Scope
- Higher-Order Functions (returning functions)

---

## 🧠 What I Learned

- How to use a `while(true)` loop with `prompt()` to create interactive terminal apps.
- Objects store grouped data logically using key-value pairs.
- Functions help structure repeated logic — with or without return values.
- Lexical Scope: Functions remember the scope where they were defined.
- Higher-order functions allow flexible, dynamic code design.

---

## 💡 Code Highlights

```js
// ✅ TODO App with "add", "list", and "quit" commands
let todo = [];
let req = prompt("please enter your choice: ");

while (true) {
    if (req === "quit") {
        console.log("quitting app");
        break;
    }
    if (req === "list") {
        for (task of todo) console.log(task);
    } else if (req === "add") {
        let task = prompt("Enter your task:");
        todo.push(task);
        console.log("Task added!");
    }
}

// ✅ Object Literal Example
const post = {
    username: "@subhashvilla",
    content: "this is day 2",
    likes: 150
};

// ✅ Function to roll a dice
function rollDice() {
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}

// ✅ Lexical Scope
function outer() {
    let outerVar = "I'm from outer";
    function inner() {
        console.log(outerVar);
    }
    inner();
}
outer();
