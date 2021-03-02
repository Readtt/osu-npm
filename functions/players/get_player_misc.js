const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const {
    playerMisc
} = require('../data')

async function get_player_misc(username, callback) {

    if (!username) {
        throw new Error("Specify a username or user id")
    }

    var url = `https://osu.ppy.sh/users/${username}`

    const brower = await puppeteer.launch()
    const [page] = await brower.pages()

    await page.goto(`${url}`, {
        waitUntil: 'networkidle0'
    })
    const data = await page.evaluate(() => document.querySelector('*').outerHTML);

    let $ = cheerio.load(data);

    var userName = $('.u-ellipsis-pre-overflow')[0].children[0].data.trim()
    var replaysWatchedByOthers = $('.profile-stats__value')[6].children[0].data.trim()
    var friends = $('.user-action-button__counter')[0].children[0].data.trim()
    var joined = $('.js-tooltip-time')[0].children[0].data.trim()
    var exactJoined = $('.js-tooltip-time')[0].children[0].parent.attribs.title.trim()
    var lastSeen = $('.js-timeago')[0].children[0].data.trim()
    var exactLastSeen = $('.js-timeago')[0].children[0].parent.attribs.title.trim()
    var forumPosts = $('.profile-links__value--link')[0].children[0].data.trim().split(' ')[0]
    var comments = $('.profile-links__value--link')[1].children[0].data.trim().split(' ')[0]
    var playsWith = $('.profile-links__value')[2].children[0].data.trim().split(',')

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

    var player_misc_dictZip = dictZip(playerMisc(),
        [userName, replaysWatchedByOthers, friends, joined, exactJoined, lastSeen, exactLastSeen, forumPosts, comments, playsWith])


        callback(player_misc_dictZip)
}

module.exports.get_player_misc = get_player_misc;