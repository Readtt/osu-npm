const puppeteer = require('puppeteer');

async function return_mapset_page(code, callback) {
    var url = `https://osu.ppy.sh/beatmapsets/${code}`

    const brower = await puppeteer.launch()
    const [page] = await brower.pages()

    await page.goto(`${url}`, {
        waitUntil: 'networkidle0'
    })
    const data = await page.evaluate(() => document.querySelector('*').outerHTML);

    callback(data)
}

module.exports.return_mapset_page = return_mapset_page;