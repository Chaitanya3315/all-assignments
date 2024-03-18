/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */
function busyWait(milliseconds) {
    const startTime = Date.now();
    while (true) {
        // Loop until the specified time has passed
        if (Date.now() - startTime >= milliseconds) {
            break;
        }
    }
}

// Example usage
console.log("Start");
busyWait(3000); // Wait for 3000 milliseconds (3 seconds)
console.log("End");


/**
 * Keep in mind that this approach effectively freezes the main thread of execution, which may cause performance issues or even browser warnings if used excessively. In real-world scenarios, you'd typically use asynchronous methods like setTimeout or setInterval to achieve similar timing effects without blocking the main thread.
 */