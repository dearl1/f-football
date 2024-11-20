const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000
const app = express();
const sessionsRouter = require('./src/routers/sessionsRouter')
const playerService = require('./src/services/playerService');
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

playerData = [

    {
          "id": 15157,
          "squad_id": 36,
          "first_name": "James",
          "last_name": "Milner",
          "cost": 3000000,
          "status": "playing",
          "stats": {
              "subs": 0,
              "goals": 0,
              "assists": 0,
              "tackles": 5,
              "last6_avg": 0,
              "own_goals": 0,
              "picked_by": 0.07,
              "red_cards": 0,
              "avg_points": 2.33,
              "missed_pen": 0,
              "starting11": 3,
              "games_played": 3,
              "last6_played": 0,
              "last6_points": 0,
              "match_scores": {
                  "2444472": 3,
                  "2444482": 2,
                  "2444490": 2
              },
              "match_squads": {
                  "2444472": 36,
                  "2444482": 36,
                  "2444490": 36
              },
              "not_selected": 8,
              "round_scores": {
                  "1": 3,
                  "2": 2,
                  "3": 2
              },
              "total_points": 7,
              "yellow_cards": 1
          },
          "position": 3,
          "locked": false,
          "nationality": "England",
          "odds_first_goalscorer": []
      },
      {
          "id": 17601,
          "squad_id": 43,
          "first_name": "Scott",
          "last_name": "Carson",
          "cost": 2400000,
          "status": "playing",
          "stats": {
              "subs": 0,
              "goals": 0,
              "saves": 0,
              "assists": 0,
              "last6_avg": 0,
              "own_goals": 0,
              "picked_by": 0.06,
              "red_cards": 0,
              "saved_pen": 0,
              "avg_points": 0,
              "starting11": 0,
              "games_played": 0,
              "last6_played": 0,
              "last6_points": 0,
              "match_scores": [],
              "match_squads": [],
              "not_selected": 11,
              "round_scores": [],
              "total_points": 0,
              "yellow_cards": 0,
              "goals_conceded": 0,
              "full_clean_sheets": 0,
              "partial_clean_sheets": 0
          },
          "position": 1,
          "locked": false,
          "nationality": "England",
          "odds_first_goalscorer": []
      },
      {
          "id": 17761,
          "squad_id": 11,
          "first_name": "James",
          "last_name": "Tarkowski",
          "cost": 3100000,
          "status": "playing",
          "stats": {
              "subs": 0,
              "goals": 0,
              "assists": 0,
              "last6_avg": 3.86,
              "own_goals": 0,
              "picked_by": 2.26,
              "red_cards": 0,
              "avg_points": 2.27,
              "missed_pen": 0,
              "starting11": 11,
              "games_played": 11,
              "last6_played": 7,
              "last6_points": 27,
              "match_scores": {
                  "2444472": -1,
                  "2444488": -1,
                  "2444493": 0,
                  "2444501": 0,
                  "2444514": 2,
                  "2444524": 2,
                  "2444536": 7,
                  "2444542": 7,
                  "2444556": 1,
                  "2444567": 1,
                  "2444578": 7
              },
              "match_squads": {
                  "2444472": 11,
                  "2444488": 11,
                  "2444493": 11,
                  "2444501": 11,
                  "2444514": 11,
                  "2444524": 11,
                  "2444536": 11,
                  "2444542": 11,
                  "2444556": 11,
                  "2444567": 11,
                  "2444578": 11
              },
              "not_selected": 0,
              "round_scores": {
                  "1": -1,
                  "2": -1,
                  "3": 0,
                  "4": 0,
                  "5": 2,
                  "6": 2,
                  "7": 7,
                  "8": 7,
                  "9": 1,
                  "10": 1,
                  "11": 7
              },
              "total_points": 25,
              "yellow_cards": 3,
              "goals_conceded": 17,
              "full_clean_sheets": 3,
              "partial_clean_sheets": 0
          },
          "position": 2,
          "locked": false,
          "nationality": "England",
          "odds_first_goalscorer": []
      },
      {
          "id": 18892,
          "squad_id": 11,
          "first_name": "Ashley",
          "last_name": "Young",
          "cost": 2500000,
          "status": "playing",
          "stats": {
              "subs": 0,
              "goals": 0,
              "assists": 3,
              "last6_avg": 5.29,
              "own_goals": 0,
              "picked_by": 0.48,
              "red_cards": 1,
              "avg_points": 3.67,
              "missed_pen": 0,
              "starting11": 9,
              "games_played": 9,
              "last6_played": 7,
              "last6_points": 37,
              "match_scores": {
                  "2444472": -3,
                  "2444501": -1,
                  "2444514": 5,
                  "2444524": 5,
                  "2444536": 7,
                  "2444542": 7,
                  "2444556": 5,
                  "2444567": 2,
                  "2444578": 6
              },
              "match_squads": {
                  "2444472": 11,
                  "2444501": 11,
                  "2444514": 11,
                  "2444524": 11,
                  "2444536": 11,
                  "2444542": 11,
                  "2444556": 11,
                  "2444567": 11,
                  "2444578": 11
              },
              "not_selected": 2,
              "round_scores": {
                  "1": -3,
                  "4": -1,
                  "5": 5,
                  "6": 5,
                  "7": 7,
                  "8": 7,
                  "9": 5,
                  "10": 2,
                  "11": 6
              },
              "total_points": 33,
              "yellow_cards": 2,
              "goals_conceded": 10,
              "full_clean_sheets": 3,
              "partial_clean_sheets": 0
          },
          "position": 2,
          "locked": false,
          "nationality": "England",
          "odds_first_goalscorer": []
      },
      {
          "id": 19236,
          "squad_id": 4,
          "first_name": "John",
          "last_name": "Ruddy",
          "cost": 2500000,
          "status": "playing",
          "stats": {
              "subs": 0,
              "goals": 0,
              "saves": 0,
              "assists": 0,
              "last6_avg": 0,
              "own_goals": 0,
              "picked_by": 0.01,
              "red_cards": 0,
              "saved_pen": 0,
              "avg_points": 0,
              "starting11": 0,
              "games_played": 0,
              "last6_played": 0,
              "last6_points": 0,
              "match_scores": [],
              "match_squads": [],
              "not_selected": 11,
              "round_scores": [],
              "total_points": 0,
              "yellow_cards": 0,
              "goals_conceded": 0,
              "full_clean_sheets": 0,
              "partial_clean_sheets": 0
          },
          "position": 1,
          "locked": false,
          "nationality": "England",
          "odds_first_goalscorer": []
      }
      
    ]

app.get('/',(req, res)=>{

    // let jsonData = null;
    // (async () => {
    //     jsonData = await playerService.getPlayers();
    //     // console.log(jsonData);
    //     // res.send(jsonData.data);
    //     res.render('index', {title: 'Globomantics', data: jsonData.data});
    // })();

    console.log("from app.js");


    res.render('index', {title: 'Globomantics', data: playerData});
})

app.post('/filter', (req,res) => {
    if (req.body.data === "") {
        res.json({data: playerData})
    }
    else {
        searchValue = req.body.data;
        const filteredItems = playerData.filter(player => 
            `${player.first_name} ${player.last_name}`.toLowerCase().includes(searchValue)
        );

        res.json({data: filteredItems})

    }

    // console.log("something: " + req.body);
    
    
})

app.listen(PORT), ()=>{
    console.log('listening on port ?');
};