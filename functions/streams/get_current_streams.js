const cheerio = require('cheerio');
const request = require('request');

function get_current_streams(callback) {
    request({
        method: 'GET',
        url: 'https://osu.ppy.sh/community/livestreams'
    }, (err, res, body) => {
        if (err) return console.error(err);
        let $ = cheerio.load(body);
        var streams = []

        let livestream_item = $('.livestream-item');
        let livestream_item__text = $('.livestream-item__text');
        let livestream_item__viewers = $('.livestream-item__text');

        for (i = 0; i < livestream_item.length; i++) {

            var streamer = livestream_item__text[2 * i].children[0].data
            var viewers = livestream_item__viewers[(2 * i) + 1].children[0].data

            streams.push({
                "streamer": streamer.trim(),
                "viewers": viewers.trim()
            })
        }
        callback(streams)
    })
}

module.exports.get_current_streams = get_current_streams;