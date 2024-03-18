/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Wait for 1 sec Done");
        },1000)
    });
}

function waitTwoSecond() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Wait for 2 sec Done");
        },2000)
    });
}

function waitThreeSecond() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Wait for 3 sec Done");
        },3000)
    });
}

function calculateTime() {
    const start = new Date().getTime();
    return Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then((values) => {
        const end = new Date().getTime();
        console.log("Time taken :", end -start);
        return values;
      });
   

}

calculateTime().then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});