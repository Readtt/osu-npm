const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const {
    scores
} = require('../data')

async function get_player_scores(username, gamemode, callback) {

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

    var rankedScore = $('.profile-stats__value')[0].children[0].data.trim()
    var totalScore = $('.profile-stats__value')[3].children[0].data.trim()
    var SSX = $('.profile-rank-count__item')[0].children[1].data.trim()
    var SS = $('.profile-rank-count__item')[1].children[1].data.trim()
    var SX = $('.profile-rank-count__item')[2].children[1].data.trim()
    var S = $('.profile-rank-count__item')[3].children[1].data.trim()
    var A = $('.profile-rank-count__item')[4].children[1].data.trim()

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

    var player_scores_dictZip = dictZip(scores(), [rankedScore, totalScore, SSX, SS, SX, S, A])

    if (!callback) {
        gamemode(player_scores_dictZip)
    } else {
        callback(player_scores_dictZip)
    }
}

module.exports.get_player_scores = get_player_scores;