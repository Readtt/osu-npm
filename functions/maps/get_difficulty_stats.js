const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

async function get_difficulty_stats(code, diff_code, callback) {
    var url = `https://osu.ppy.sh/beatmapsets/${code}#osu/${diff_code}`

    const brower = await puppeteer.launch()
    const [page] = await brower.pages()

    await page.goto(`${url}`, {
        waitUntil: 'networkidle0'
    })
    const data = await page.evaluate(() => document.querySelector('*').outerHTML);

    let $ = cheerio.load(data);
    var length = $('.beatmap-basic-stats')[0].children[0].children[1].children[0].data.trim()
    var bpm = $('.beatmap-basic-stats')[0].children[1].children[1].children[0].data.trim()
    var circleCount = $('.beatmap-basic-stats')[0].children[2].children[1].children[0].data.trim()
    var sliderCount = $('.beatmap-basic-stats')[0].children[3].children[1].children[0].data.trim()

    var circleSize = $('.beatmapset-stats__row--advanced')[0].children[0].children[0].children[0].children[2].children[0].data.trim()
    var hpDrain = $('.beatmapset-stats__row--advanced')[0].children[0].children[0].children[1].children[2].children[0].data.trim()
    var accuracy = $('.beatmapset-stats__row--advanced')[0].children[0].children[0].children[2].children[2].children[0].data.trim()
    var approachRate = $('.beatmapset-stats__row--advanced')[0].children[0].children[0].children[3].children[2].children[0].data.trim()
    var starDifficulty = $('.beatmapset-stats__row--advanced')[0].children[0].children[0].children[4].children[2].children[0].data.trim()

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

    var get_difficulty_stats_dictZip = dictZip(diffStats, [length, bpm, circleCount, sliderCount, circleSize, hpDrain, accuracy, approachRate, starDifficulty])

    callback(get_difficulty_stats_dictZip)
}

module.exports.get_difficulty_stats = get_difficulty_stats;