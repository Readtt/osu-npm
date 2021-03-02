const request = require('request');

function return_contests_page(callback) {
    request({
        method: 'GET',
        url: 'https://osu.ppy.sh/community/contests'
    }, (err, res, body) => {
        if (err) return console.error(err);

        callback(body)
    })
}

module.exports.return_contests_page = return_contests_page;