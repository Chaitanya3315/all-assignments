/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Wait for 1 sec Done");
        }, 1000);
    });
  }
  
  function waitTwoSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Wait for 2 sec Done");
        }, 2000);
    });
  }
  
  function waitThreeSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Wait for 3 sec Done");
        }, 3000);
    });
  }
  
  function sequentialExecution() {
    const startTime = Date.now();
    return waitOneSecond()
        .then(result1 => {
            console.log(result1);
            return waitTwoSecond();
        })
        .then(result2 => {
            console.log(result2);
            return waitThreeSecond();
        })
        .then(result3 => {
            console.log(result3);
            const endTime = Date.now();
            console.log("Total time taken:", endTime - startTime, "milliseconds");
        });
  }
  
  sequentialExecution();
  
  async function sequentialExecution() {
    const startTime = Date.now();
  
    try {
        const result1 = await waitOneSecond();
        console.log(result1);
  
        const result2 = await waitTwoSecond();
        console.log(result2);
  
        const result3 = await waitThreeSecond();
        console.log(result3);
  
        const endTime = Date.now();
        console.log("Total time taken:", endTime - startTime, "milliseconds");
    } catch (error) {
        console.error("Error:", error);
    }
  }
  
  sequentialExecution();
  