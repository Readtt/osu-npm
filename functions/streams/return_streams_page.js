const request = require('request');

function return_streams_page(callback) {
    request({
        method: 'GET',
        url: 'https://osu.ppy.sh/community/livestreams'
    }, (err, res, body) => {
        if (err) return console.error(err);

        callback(body)
    })
}

module.exports.return_streams_page = return_streams_page;