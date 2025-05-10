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

// call back hell -- Callback Hell happens when you write
//  many nested callbacks, one inside another. It makes your code look like a "pyramid" — hard to read and maintain.

doTask1(function (result1) {
    doTask2(result1, function (result2) {
        doTask3(result2, function (result3) {
            doTask4(result3, function (result4) {
                console.log("All tasks done!");
            });
        });
    });
});

// promise -- is way to handle the asynchronous oprations
// its gives guarantee that something will happen..
//reslove--success or reject -- failure
//example 

function savetoDb(data) {
    return new Promise((reslove, reject) => {
        let internetspeed = Math.floor(Math.random() * 10) + 1;
        if (internetspeed > 4) {
            reslove("sucess : data was served")
        } else {
            reject("failure : this is failed")
        }
    });

};

// promise chaining 

step1()
    .then(result1 => {
        console.log(result1); // Step 1 done
        return step2(result1);
    })
    .then(result2 => {
        console.log(result2); // Step 1 done → Step 2 done
        return step3(result2);
    })
    .then(result3 => {
        console.log(result3); // Step 1 done → Step 2 done → Step 3 done
    })
    .catch(error => {
        console.log("Error:", error);
    });