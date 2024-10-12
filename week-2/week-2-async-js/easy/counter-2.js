let counter = 1;

const increment = () => {
    if (counter < 5) {
        counter++;
    }
};

const startCounter = () => {
    console.log(counter);
    increment();

    if (counter === 5) {
        console.log("Counter has reached 5");
        // No further calls to setTimeout, stopping the process
    } else {
        // Call setTimeout recursively to continue the process every 1 second
        setTimeout(startCounter, 1000);
    }
};

// Initial call to start the counter
setTimeout(startCounter, 1000);
