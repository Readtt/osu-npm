const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const {
    playerStats
} = require('../data')

async function get_player_stats(username, gamemode, callback) {

    if (!username) {
        throw new Error("Specify a username or user id")
    }

    if (gamemode == 'osu' || gamemode == 'standard') {
        var url = `https://osu.ppy.sh/users/${username}`
    } else if (gamemode == 'taiko') {
        var url = `https://osu.ppy.sh/users/${username}/taiko`
    } else if (gamemode == 'catch' || gamemode == 'fruits') {
        var url = `https://osu.ppy.sh/users/${username}/fruits`
    } else if (gamemode == 'mania') {
        var url = `https://osu.ppy.sh/users/${username}/mania`
    } else {
        var url = `https://osu.ppy.sh/users/${username}`
    }

    const brower = await puppeteer.launch()
    const [page] = await brower.pages()

    await page.goto(`${url}`, {
        waitUntil: 'networkidle0'
    })
    const data = await page.evaluate(() => document.querySelector('*').outerHTML);

    let $ = cheerio.load(data);

    var userName = $('.u-ellipsis-pre-overflow')[0].children[0].data.trim()
    var hitAccuracy = $('.profile-stats__value')[1].children[0].data.trim()
    var playCount = $('.profile-stats__value')[2].children[0].data.trim()
    var totalHits = $('.profile-stats__value')[4].children[0].data.trim()
    var maximumCombo = $('.profile-stats__value')[5].children[0].data.trim()
    var level = $('.profile-detail-bar__level')[0].children[0].data.trim()
    var progressToNextLevel = $('.bar__text')[0].children[0].data.trim()
    var country = $('.profile-info__flag-text')[0].children[0].data.trim()
    var globalRank = $('.value-display__value')[0].children[0].children[0].data.trim()
    var countryRank = $('.value-display__value')[1].children[0].children[0].data.trim()
    var playTime = $('.value-display__value')[5].children[0].children[0].data.trim()
    var medals = $('.value-display__value')[6].children[0].data.trim()

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

    var player_stats_dictZip = dictZip(playerStats(),
        [userName, hitAccuracy, playCount, totalHits, maximumCombo, level, progressToNextLevel, country, globalRank, countryRank, playTime, medals])

    if (!callback) {
        gamemode(player_stats_dictZip)
    } else {
        callback(player_stats_dictZip)
    }
}

module.exports.get_player_stats = get_player_stats;