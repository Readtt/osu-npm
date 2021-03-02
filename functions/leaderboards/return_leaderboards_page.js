const request = require('request');
const {
    leaderboards
} = require('../data')

function return_leaderboards_page(leaderboardCode, callback) {

    if (leaderboardCode > 2) throw new Error('Choose from these options: ' + JSON.stringify(leaderboards()))
    if (leaderboardCode < 0) throw new Error('Choose from these options: ' + JSON.stringify(leaderboards()))

    request({
        method: 'GET',
        url: `https://osu.ppy.sh/rankings/osu/${leaderboards()[leaderboardCode]}`
    }, (err, res, body) => {
        if (err) return console.error(err);

        callback(body)
    })
}

module.exports.return_leaderboards_page = return_leaderboards_page;