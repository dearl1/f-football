const axios = require('axios');

function playerService(){
    function getPlayers(){
        return new Promise((resolve, reject) => {
            url = 'https://fantasyfootball.telegraph.co.uk/json/epl/players.json'
            axios.get(url)
            .then((response)=>{
                resolve(response);
            });
        });
    }

    return {getPlayers}
}

module.exports = playerService();