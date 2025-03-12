
// Don't need sessionsRouter
/*

const express = require('express');
const sessionsRouter = express.Router();
const playerService = require('../services/playerService');

sessionsRouter.route('/')
.get((req,res)=>{
    console.log("\n In sessionsRouter.js");

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

*/