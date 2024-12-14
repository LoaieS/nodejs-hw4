// Loaie Shalloufi
// Tareq Abu Yunis
// 48-5

// modules and imports
const { read } = require('fs');
const fs = require('fs/promises');
const path = require('path');

// Function receives a JSON object containing user information
// Function returns how many users exist from the JSON
const getCount = (users) => {
    return users.length;
}

// Function receives a JSON object containing user information
// Function returns a list of all user names from the JSON
const getNames = (users) => {
    let names = users.map((user) => user.name);
    return names;
}

// Function creates text files containing user information (user count, usernames)
const parseUserInformation = async () => {
    try {
        // Read and parse JSON information from users.json file
        const dirPath = path.join(__dirname, '/users-info')
        const usersBuffer = await fs.readFile(`${dirPath}/users.json`);
        const users = JSON.parse(usersBuffer.toString());
        const user_count = getCount(users);
        const user_names = getNames(users);

        // Write the results to new text files
        await fs.writeFile(`${dirPath}/user_count.txt`, `Amount of users : ${user_count}`);
        await fs.writeFile(`${dirPath}/user_names.txt`, user_names.join('\n'));
        console.log('Successfully parsed user information.');
    }
    catch (err) {
        console.log(`Error while parsing user information, ${err}`);
    }
}

// Testing
parseUserInformation()