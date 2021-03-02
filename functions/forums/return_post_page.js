const request = require('request');

function return_post_page(link, callback) {
    request({
        method: 'GET',
        url: `${link}`
    }, (err, res, body) => {
        if (err) throw new Error(err)

        callback(body)
    })
}

module.exports.return_post_page = return_post_page;

