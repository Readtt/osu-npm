const puppeteer = require('puppeteer');

async function return_specific_mapset_difficulty(code, diff_code, callback) {
    var url = `https://osu.ppy.sh/beatmapsets/${code}#osu/${diff_code}`

    const brower = await puppeteer.launch()
    const [page] = await brower.pages()

    await page.goto(`${url}`, {
        waitUntil: 'networkidle0'
    })
    const data = await page.evaluate(() => document.querySelector('*').outerHTML);

    callback(data)
}

module.exports.return_specific_mapset_difficulty = return_specific_mapset_difficulty;