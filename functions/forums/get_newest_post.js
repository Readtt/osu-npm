const cheerio = require('cheerio');
const request = require('request');

function get_newest_post(forumCode, callback) {
    request({
        method: 'GET',
        url: `https://osu.ppy.sh/community/forums/${forumCode}`
    }, (err, res, body) => {
        if (err) return console.error(err);
        let $ = cheerio.load(body);

        var title = $('.forum-topic-entry__title')[0].children[0].data.trim()
        var author = $('.forum-topic-entry__detail')[0].children[3].children[0].data.trim()
        var replies = $('.forum-topic-entry__count')[0].children[0].data.trim()
        var views = $('.forum-topic-entry__count')[1].children[0].data.trim()
        var timeago = $('.js-timeago')[3].children[0].data.trim()
        var link = $('.forum-topic-entry__content')[0].children[1].attribs.href.trim()

        function dictZip(key_array, val_array) {
            if (key_array.length === val_array.length) {
                return key_array.reduce((acc, curr, index) => {
                    acc[curr] = val_array[index];
                    return acc;
                }, {});
            } else {
                throw new Error("Wrong length, please try again later")
            }
        }

        var newest_post_dictZip = dictZip(post, [title, author, replies, views, timeago, link])

        callback(newest_post_dictZip)
    })
}

module.exports.get_newest_post = get_newest_post;