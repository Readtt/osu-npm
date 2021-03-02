const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

async function get_mapset_difficulty_codes(code, callback) {
    var url = `https://osu.ppy.sh/beatmapsets/${code}`

    const brower = await puppeteer.launch()
    const [page] = await brower.pages()

    await page.goto(`${url}`, {
        waitUntil: 'networkidle0'
    })
    const data = await page.evaluate(() => document.querySelector('*').outerHTML);

    var beatmap_difficulty_codes_array = []

    let $ = cheerio.load(data);

    var beatmap_difficulty_codes_length = $(".beatmapset-beatmap-picker__beatmap").length

    for (i = 0; i < beatmap_difficulty_codes_length; i++) {
        var beatmap_difficulty_codes = $(".beatmapset-beatmap-picker__beatmap")[i].attribs.href

        beatmap_difficulty_codes_array.push(beatmap_difficulty_codes)
    }
    callback(beatmap_difficulty_codes_array)
}

module.exports.get_mapset_difficulty_codes = get_mapset_difficulty_codes;