const fs = require('fs');
const { promisify } = require('util');
const appendFile = promisify(fs.appendFile); // Promisify appendFile

// Append to the file
(async () => {
    try {
        console.time('File Append');
        await appendFile('./file.txt', '\nAyush Sahay');
        console.timeEnd('File Append');
        console.log("Content appended successfully.");
    } catch (err) {
        console.log(err);
    }
})();
