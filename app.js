import express from 'express';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000
const app = express();

// const {reset, filterList} = require("./src/views/index-functions.js"); // Import functions

// const sessionsRouter = require('./src/routers/sessionsRouter')
import { playerService } from './src/services/playerService.js';
import deburr from 'lodash.deburr';

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

// sessions = [
//     {title: 'Session 1', description: 'this is session 1'},
//     {title: 'Session 2', description: 'this is session 2'},
//     {title: 'Session 3', description: 'this is session 3'},
//     {title: 'Session 4', description: 'this is session 4'}
// ];


// Don't need to use sessionsRouter
// app.use('/sessions', sessionsRouter);

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
let playerData = null;
(async () => {
    jsonData = await playerService();
    // console.log(jsonData);
    // res.send(jsonData.data);
    playerData = jsonData.data;

    // console.log("\nstart: find non-english characters")
    // for (const item of playerData) {
    //     if (hasNonEnglishAlphanumerics(anglicise(item.first_name)) ||
    //         hasNonEnglishAlphanumerics(anglicise(item.last_name ))) {

    //         console.log(`${item.first_name} ${item.last_name}`);
    
    //     }
    // }
    // console.log("end: find non-english characters \n")


    // console.log("\nstart: check if duplicate id");
    // const mySet = new Set();
    // for (const item of playerData) {
    //     if (mySet.has(item.id) ) {
    //         console.log(`processing ${item.first_name} ${item.last_name} has duplicate id`);
    //     }
    //     mySet.add(item.id);
    // }
    // console.log(`mySet.size: ${mySet.size}`);
    // console.log("end: check if duplicate id \n");
    
})();






app.get('/',(req, res)=>{

    // res.render('index', {
    //     reset, filterList
    // });
    res.render('index');
})

app.post('/filter', (req,res) => {
    if (req.body.data === "") {
        res.json({data: playerData})
    }
    else {
        let searchValue = req.body.data;
        const filteredItems = playerData.filter(player => 
            `${anglicise(player.first_name)} ${anglicise(player.last_name)}`.toLowerCase().includes(searchValue)
        );

        res.json({data: filteredItems})

    }

})

app.post('/filter-id', (req,res) => {
    let searchValue = req.body.data;

    const filteredItems = playerData.filter(player => 
        player.id == searchValue
    );

    res.json({data: filteredItems})


})

app.listen(PORT), ()=>{
    console.log('listening on port ?');
};