# 📅 Day 3 - Advanced JavaScript Concepts

## 🔥 Topics Covered

- Error Handling: `try...catch`
- Arrow Functions
- Asynchronous JS
  - `setTimeout()`
  - `setInterval()`
- Array Methods
  - `forEach()`
  - `every()`
  - `reduce()`
- Spread Operator
  - In arrays and objects
- Destructuring
  - Array Destructuring
  - Object Destructuring

---

## 🧠 What I Learned

- `try...catch` blocks help prevent runtime errors from crashing the entire program.
- Arrow functions provide a more concise syntax and are often used in callbacks.
- `setTimeout` delays execution, while `setInterval` repeats execution.
- Array methods like `reduce()` are powerful tools for transforming data.
- The spread operator simplifies copying and combining arrays/objects.
- Destructuring allows cleaner and faster access to individual values.

---

## 💡 Code Highlights

```js
// ✅ try-catch block
try {
    console.log(a);
} catch {
    console.log("error occurred... 'a' is not defined");
}

// ✅ Arrow function
const sum = (a, b) => console.log(a + b);

// ✅ setTimeout
setTimeout(() => {
    console.log("subhash");
}, 4000);

// ✅ forEach example
arr.forEach((student) => {
    console.log(student.marks);
});

// ✅ reduce example
let final = [1, 2, 3, 4].reduce((res, el) => res + el);
console.log(final);  // 10

// ✅ Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);  // [1, 2, 3, 4, 5]

// ✅ Object destructuring
const person = { name: "Alice", age: 22 };
const { name, age } = person;
console.log(name, age);
