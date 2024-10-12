let counter = 1;

function increment() {
    if (counter < 5) {
        counter++;
    }
}

// Store the interval ID
const intervalId = setInterval(() => {
    console.log(counter);
    increment();

    // Stop the interval when the counter reaches 10
    if (counter === 5) {
        console.log("Counter has reached 5");
        clearInterval(intervalId);  // Pass the intervalId to clearInterval
    }
}, 1000);
