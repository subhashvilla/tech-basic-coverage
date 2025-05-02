//Day 2 of learning js basics 

//creating the basic todo 
let todo = []
let req = prompt("please enter your choice: ")

while (true) {
    if (req == "quit") {
        console.log("quittung app");
        break;
    }
    if (req == "list") {
        console.log("---------------")
        for (task of todo) {
            console.log(task)
        }
        console.log('----------------')
    } else if (req == "add") {
        let task = prompt("please enter your task ypu want");
        todo.push(task);
        console.log("task added")
    }


}

//Object Literals 

const post = {
    username: "@subhashvilla",
    content: "this is day 2",
    likes: 150
};

//functons in js
//Normal function

function hello() {
    console.log("hii")
}

hello();



function rollDice() {
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}

rollDice();


function avg(a, b, c) {
    let avg = (a + b + c) / 3;
    console.log(avg)
}
avg(1, 2, 3);

// Lexical Scope 
function outer() {
    let outerVar = "I'm from outer";

    function inner() {
        console.log(outerVar); //  This works due to lexical scope
    }

    inner();
}

outer();

// inner() is defined inside outer(), so it has access to outer's variables.

// This works because of lexical scope: the function inner remembers the environment in which it was defined.

let greet = "hello";

function changegreet() {
    let greet = "namaste"
    console.log(greet)

    function innergreet() {
        console.log(greet)
    }
    innergreet();
}
console.log(greet);
changegreet();


//Higher order function
//passes function as argument in another function

function oddtest(request) {
    if (request == "odd") {
        return function (n) {
            console.log(!(n % 2 == 0));
        }
    }
}
let request = "odd"

