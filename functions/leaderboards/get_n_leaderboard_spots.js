const cheerio = require('cheerio');
const request = require('request');
var {
    leaderboards
} = require('../data')

function get_n_leaderboard_spots(leaderboardCode, n, callback) {
    if (leaderboardCode >= 3) {
        throw new Error(`Leaderboard does not exist. ${JSON.stringify(leaderboards())}`)
    }
    if (isNaN(leaderboardCode) == true) {
        throw new Error(`Leaderboard does not exist. ${JSON.stringify(leaderboards())}`)
    }
    if (isNaN(n) == true) {
        throw new Error("Amount doesn't exist (max 50).")
    }
    request({
        method: 'GET',
        url: `https://osu.ppy.sh/rankings/osu/${leaderboards()[leaderboardCode]}`
    }, (err, res, body) => {
        if (err) return console.error(err);
        let $ = cheerio.load(body);
        if (n > 50) {
            throw new Error(`You can only get the top 50 players in ${leaderboards()[leaderboardCode]} rankings`)
        }
        var tops = []
        var ranking_page_user = $('.ranking-page-table__user-link-text')
        var ranking_page_country = $('.ranking-page-table__country-link-text')

        if (ranking_page_user.length != 0) {
            for (i = 0; i < n; i++) {
                tops.push(ranking_page_user[i].children[0].data.trim())
            }
        } else {
            for (i = 0; i < n; i++) {
                tops.push(ranking_page_country[i].children[0].data.trim())
            }
        }
        callback(tops)
    })
}

module.exports.get_n_leaderboard_spots = get_n_leaderboard_spots;