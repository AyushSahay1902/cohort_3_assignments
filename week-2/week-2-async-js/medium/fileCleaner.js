const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

(async () => {
    try {
        console.time('Reading File');
        const data = await readFile('./file.txt', 'utf8');
        console.timeEnd('Reading File');
        // console.log(data);

        // Process the data to remove extra spaces and filter even-indexed lines
        const cleanedData = data
            .trim()
            .split('\n') // Split the data into lines

            .map(line => line.replace(/\s+/g, ' ').trim()) // Replace multiple spaces with a single space
            .join('\n'); // Join back into a single string with new lines

        await writeFile('./file.txt', cleanedData);
        console.log("File updated successfully.");
    } catch (err) {
        console.log(err);
    }
})();
