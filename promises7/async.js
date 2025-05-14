async function greet() {
    //throw "some random error"
    return "hello";
}

greet()
    .then((result) => {
        console.log("promise was resloved");
        console.log("result was :", result);
    })
    .catch((err) => {
        console.log("promise was rejected with err:", err)
    });


//basic example 
myPromise
    .then(data => {
        console.log("Success:", data);
    })
    .catch(error => {
        console.log("Error:", error);
    });

let getnum = (reslove, reject) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            reslove();
        }, 1000);
    });
}
async function demo() {
    await getnum();
    await getnum();
}
