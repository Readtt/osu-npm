var {
    leaderboards
} = require('../data')

function get_leaderboards_codes(callback) {
    callback(leaderboards());
}

module.exports.get_leaderboards_codes = get_leaderboards_codes;