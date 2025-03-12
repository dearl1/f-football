const express = require('express');
const path = require('path');

const app = express();
const playerService = require('../src/services/playerService');
const deburr = require('lodash.deburr');
app.use(express.json());

const assert = require('assert');


function hasNonEnglishAlphanumerics(input) {
    // Matches any character outside A-Z, a-z, 0-9
    const nonEnglishRegex = /[^a-zA-Z0-9]/;
  
    // Test the string against the regex
    return nonEnglishRegex.test(input);
}

function anglicise(input) {
    return deburr(input
        .replace(/ø/g, 'o')
        .replace(/ç/g, 'c')
    )
}

let jsonData = null;
(async () => {
    jsonData = await playerService.getPlayers();
    // console.log(jsonData);
    // res.send(jsonData.data);
    playerData = jsonData.data;

    
    // console.log("\nstart: find non-english characters")
    /*
    errorCount = 0;
    for (const item of playerData)
    {
        if (hasNonEnglishAlphanumerics(anglicise(item.first_name)) ||
            hasNonEnglishAlphanumerics(anglicise(item.last_name )))
        {

            // console.log(`${item.first_name} ${item.last_name}`);
            errorCount += 1
    
        }
    }
    assert.strictEqual(errorCount, 0, "Value is not 0");
    */
    
    // console.log("end: find non-english characters \n")


    // console.log("\nstart: check if duplicate id");
    duplicateCount = 0;
    const mySet = new Set();
    for (const item of playerData) {
        if (mySet.has(item.id) ) {
            // console.log(`processing ${item.first_name} ${item.last_name} has duplicate id`);
            duplicateCount += 1;
        }
        mySet.add(item.id);
    }
    // console.log(`mySet.size: ${mySet.size}`);
    assert.strictEqual(duplicateCount, 0, "Value is not 0");
    // console.log("end: check if duplicate id \n");
    
})();





