// Function that returns a promise resolving after t1 seconds
function wait1(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Waited for ${t} seconds`);
        }, t * 1000); // Convert seconds to milliseconds
    });
}

// Function that returns a promise resolving after t2 seconds
function wait2(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Waited for ${t} seconds`);
        }, t * 1000);
    });
}

// Function that returns a promise resolving after t3 seconds
function wait3(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Waited for ${t} seconds`);
        }, t * 1000);
    });
}

// Function to calculate the total time taken to complete all three waits
async function calculateTime(t1, t2, t3) {
    const startTime = Date.now(); // Start time in milliseconds

    // Call the wait functions sequentially
    await wait1(t1);
    await wait2(t2);
    await wait3(t3);

    const endTime = Date.now(); // End time in milliseconds
    const totalTime = endTime - startTime; // Calculate total time taken

    return totalTime; // Return total time in milliseconds
}

calculateTime(1, 2, 3).then((time) => {
    console.log(`Total time elapsed: ${time} milliseconds`);
}); // Call the function with t1 = 1, t2 = 2, t3 = 3

module.exports = calculateTime;
