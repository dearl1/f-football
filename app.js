const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000
const app = express();
const sessionsRouter = require('./src/routers/sessionsRouter')
const playerService = require('./src/services/playerService');
const deburr = require('lodash.deburr');
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

sessions = [
    {title: 'Session 1', description: 'this is session 1'},
    {title: 'Session 2', description: 'this is session 2'},
    {title: 'Session 3', description: 'this is session 3'},
    {title: 'Session 4', description: 'this is session 4'}
];



app.use('/sessions', sessionsRouter);

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

    // let jsonData = null;
    // (async () => {
    //     jsonData = await playerService.getPlayers();
    //     // console.log(jsonData);
    //     // res.send(jsonData.data);
    //     res.render('index', {title: 'Globomantics', data: jsonData.data});
    // })();

    console.log("from app.js");


    // res.render('index', {title: 'Globomantics', data: playerData});
    res.render('index');
})

app.post('/filter', (req,res) => {
    if (req.body.data === "") {
        res.json({data: playerData})
    }
    else {
        searchValue = req.body.data;
        const filteredItems = playerData.filter(player => 
            `${anglicise(player.first_name)} ${anglicise(player.last_name)}`.toLowerCase().includes(searchValue)
        );

        res.json({data: filteredItems})

    }

    // console.log("something: " + req.body);
    
    
})

app.listen(PORT), ()=>{
    console.log('listening on port ?');
};