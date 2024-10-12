/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise((resolve, reject) => {
        const start = Date.now();
        console.log('Busy waiting...');
        while (Date.now() - start < milliseconds) {
            // Busy wait
        }
        resolve();
    })
}

sleep(3000).then(() => {
    console.log('Done sleeping for 3 seconds');
});

module.exports = sleep;
