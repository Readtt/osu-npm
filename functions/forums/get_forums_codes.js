const {
    forums
} = require('../data')

function get_forums_codes(callback) {
    callback(forums())
}

module.exports.get_forums_codes = get_forums_codes;