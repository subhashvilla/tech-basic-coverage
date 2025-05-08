// day 5 of learning js call stack and call back hells and then and catch
//call satck = last in first out..it track the functon 

function hello() {
    console.log("this is the first")
}
function demo() {
    console.log("this is second")
    hello();
}
demo();

// call back hell
h1 = 