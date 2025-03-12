// const axios = require('axios');
import axios from 'axios';

export function playerService(){
    // function getPlayers(){
        return new Promise((resolve, reject) => {
            let url = 'https://fantasyfootball.telegraph.co.uk/json/epl/players.json'
            axios.get(url)
            .then((response)=>{
                resolve(response);
            });
        });
    // }

    return {getPlayers}
}

// module.exports = playerService();
// export default playerService;