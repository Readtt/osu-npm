const cheerio = require('cheerio');
const request = require('request');

function get_contests_list(callback) {
    request({
        method: 'GET',
        url: 'https://osu.ppy.sh/community/contests'
    }, (err, res, body) => {
        if (err) return console.error(err);
        let $ = cheerio.load(body);
        var contests = []

        let contest_list_item = $('.contest-list-item');
        let contest_list_item__name = $('.contest-list-item__name');
        let contest_list_item__date = $('.contest-list-item__date');
        let contest_list_item__type = $('.contest-list-item__type');

        for (i = 0; i < contest_list_item.length; i++) {
            var url = contest_list_item[i].attribs.href
            var title = contest_list_item__name[i].children[0].data
            var date = contest_list_item__date[i].children[0].data
            var type = contest_list_item__type[i].children[0].data

            contests.push({
                "url": url,
                "title": title,
                "date": date,
                "type": type
            })
        }
        callback(contests)
    })
}

module.exports.get_contests_list = get_contests_list;