const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);

// Function to simulate an expensive operation (calculating a large factorial)
const expensiveOperation = (n) => {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
};

(async () => {
    try {
        console.time('File Read');
        const data = await readFile('./file.txt', 'utf8');
        console.timeEnd('File Read');
        console.log(data);

        // Perform expensive operation
        console.time('Expensive Operation');
        const result = expensiveOperation(100000); // Increase n to make it more expensive
        console.timeEnd('Expensive Operation');
        console.log(`Result of expensive operation: ${result}`);

    } catch (err) {
        console.log(err);
    }
})();
