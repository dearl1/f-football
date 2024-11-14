

const express = require('express');
const sessionsRouter = express.Router();
const playerService = require('../services/playerService');

sessionsRouter.route('/')
.get((req,res)=>{

    // let jsonData = null;
    // (async () => {
    //     try {
    //         // const response = await fetch('https://cors-anywhere.herokuapp.com/https://fantasyfootball.telegraph.co.uk/json/epl/players.json'); // Replace with your URL
    //         const response = await fetch('https://fantasyfootball.telegraph.co.uk/json/epl/players.json');
    //         // if (!response.ok) {
    //         //     throw new Error(`Network response was not ok. Status: ${response.status}`);
    //         // }
    //         jsonData = await response.json();
    //         // console.log(jsonData);
    //     } catch (error) {
    //         // console.error('Fetch error:', error);
    //     }
    // })();
    
    // res.send(jsonData);


    let jsonData = null;
    (async () => {
        jsonData = await playerService.getPlayers();
        // console.log(jsonData);
        res.send(jsonData.data);
    })();
    // res.send(jsonData.json());

    // res.render('sessions', {sessions: sessions});
})
sessionsRouter.route('/:id')
.get((req,res)=>{
    const id = req.params.id;
    // res.send(`hello single session ${id}`);
    res.render('session', {session: sessions[id]});
})

module.exports = sessionsRouter;