// Loaie Shalloufi
// Tareq Abu Yunis
// 48-5

// modules and imports
const fs = require('fs/promises');
const path = require('path');

// Function receives an amount of lines, reads from three input text files 1...i lines each time
// Writes the result in a new output.txt file
const lineReader = async (amountOfLines) => {
    let result = "";
    try {
        // Reading the input files and saving their content
        const dirPath = path.join(__dirname, '/texts');
        const inputLines1 = await fs.readFile(`${dirPath}/input1.txt`, 'utf8');
        const inputLines2 = await fs.readFile(`${dirPath}/input2.txt`, 'utf8');
        const inputLines3 = await fs.readFile(`${dirPath}/input3.txt`, 'utf8');

        // Iterating over all three files at the same time, reading up to "index" lines each time,
        // joining them as newlines.
        for (let index = 1; index <= amountOfLines; index++) {
            result += inputLines1.split('\n').slice(0, index).join('\n') + 
                    inputLines2.split('\n').slice(0, index).join('\n') +
                    inputLines3.split('\n').slice(0, index).join('\n');
        }
        
        // Write the result to the output file
        await fs.writeFile(`${dirPath}/output.txt`, result);
        console.log(`Successfully written to ${dirPath}/output.txt`);
    }
    catch (err) {
        // If an error occurs at any point of the function, we print it in the console
        console.error(`Failed during operation with error : ${err}`);
    }
}

// Testing with a number of lines that exceeds one of the input file's length ( > 5 lines)
lineReader(6);
