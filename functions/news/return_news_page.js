const request = require('request');

function return_news_page(callback) {
    request({
        method: 'GET',
        url: `https://osu.ppy.sh/home/news`
    }, (err, res, body) => {
        if (err) throw new Error(err)

        callback(body)
    })
}

module.exports.return_news_page = return_news_page;

