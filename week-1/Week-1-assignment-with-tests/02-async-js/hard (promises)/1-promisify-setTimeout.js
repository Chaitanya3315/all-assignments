/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

//method 1

function wait(n) {
   return setTimeout(()=>{
        new Promise ((resolve)=>{
            resolve("New promise is returned!");
        }).then(data => console.log(data));
    },n * 1000);
}

wait(5)

// method 2

function wait(n) {
    return new Promise((resolve) => {
        setTimeout(resolve, n * 1000, "New promise is resolved!");
    });
 }
 
 wait(5).then(data => console.log(data));



