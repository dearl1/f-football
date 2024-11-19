const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000
const app = express();
const sessionsRouter = require('./src/routers/sessionsRouter')
const playerService = require('./src/services/playerService');

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

app.get('/',(req, res)=>{

    let jsonData = null;
    (async () => {
        jsonData = await playerService.getPlayers();
        // console.log(jsonData);
        // res.send(jsonData.data);
        res.render('index', {title: 'Globomantics', data: jsonData.data});
    })();
    
    
})

app.listen(PORT), ()=>{
    console.log('listening on port ?');
};