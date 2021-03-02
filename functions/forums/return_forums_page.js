const request = require('request');

function return_forums_page(forumCode, callback) {
    request({
        method: 'GET',
        url: `https://osu.ppy.sh/community/forums/${forumCode}`
    }, (err, res, body) => {
        if (err) return console.error(err);

        callback(body)
    })
}

module.exports.return_forums_page = return_forums_page;