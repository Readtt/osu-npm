const puppeteer = require('puppeteer');

async function get_mapset_description(code, type, callback) {
    var url = `https://osu.ppy.sh/beatmapsets/${code}`

    const brower = await puppeteer.launch()
    const [page] = await brower.pages()

    await page.goto(`${url}`, {
        waitUntil: 'networkidle0'
    })

    if (type == 'text') {
        var mapset_description = await page.$eval(".beatmapset-info__description", el => el.innerText)
    } else if (type == 'html') {
        var mapset_description = await page.$eval(".beatmapset-info__description", el => el.innerHTML)
    } else {
        var mapset_description = await page.$eval(".beatmapset-info__description", el => el.innerHTML)
    }

    if (!callback) {
        type(mapset_description)
    } else {
        callback(mapset_description)
    }
}

module.exports.get_mapset_description = get_mapset_description;