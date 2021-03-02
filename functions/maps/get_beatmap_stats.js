const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

async function get_beatmap_stats(code, callback) {
    var url = `https://osu.ppy.sh/beatmapsets/${code}`

    const brower = await puppeteer.launch()
    const [page] = await brower.pages()

    await page.goto(`${url}`, {
        waitUntil: 'networkidle0'
    })
    const data = await page.evaluate(() => document.querySelector('*').outerHTML);

    let $ = cheerio.load(data);

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

    var title = $('.beatmapset-header__details-text')[0].children[0].data.trim()
    var author = $('.beatmapset-header__details-text')[1].children[0].data.trim()
    var mapper = $('.beatmapset-mapping__user')[0].children[0].data.trim()
    var status = $('.beatmapset-status')[0].children[0].data.trim()
    var submitted = $('.js-tooltip-time')[0].children[0].data.trim()
    var exactSubmitted = $('.js-tooltip-time')[0].children[0].parent.attribs.datetime.trim()
    var playCount = $('.beatmapset-header__value-name')[0].children[0].data.trim()
    var favourites = $('.beatmapset-header__value-name')[1].children[0].data.trim()
    var cover = `https://assets.ppy.sh/beatmaps/${code}/covers/cover.jpg`
    var download = `https://osu.ppy.sh/beatmapsets/${code}/download`
    var genre = $('.beatmapset-info__half-entry')[0].children[1].children[0].data.trim()
    var language = $('.beatmapset-info__half-entry')[1].children[1].children[0].data.trim()

    var tags = []

    var getTags = $('.beatmapset-info__header')[3].next.children
    for (var i = 0; i < getTags.length; i++) {
        if ((i % 2) == 0) {
            tags.push(getTags[i].children[0].data)
        }
    }

    var get_beatmap_stats_dictZip = dictZip(mapStats,
        [title, author, mapper, status, exactSubmitted, submitted, playCount, favourites, cover, download, genre, language, tags])

    callback(get_beatmap_stats_dictZip)
}

module.exports.get_beatmap_stats = get_beatmap_stats;