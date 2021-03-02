const request = require('request')
const cheerio = require('cheerio')

function get_post_answers(post, callback) {
    request({
        method: 'GET',
        url: `${post}`
    }, (err, res, body) => {
        if (err) throw new Error(err)
        let $ = cheerio.load(body);
        var post_answers = ['Coming Soon...']

        callback(post_answers)
    })
}

module.exports.get_post_answers = get_post_answers;