const puppeteer = require('puppeteer');

async function get_full_news_content(url, type, callback) {
    const brower = await puppeteer.launch()
    const [page] = await brower.pages()

    await page.goto(`${url}`, {
        waitUntil: 'networkidle0'
    })

    if (type == 'text') {
        var osu_md = await page.$eval(".osu-md", el => el.innerText)
    } else if (type == 'html') {
        var osu_md = await page.$eval(".osu-md", el => el.innerHTML)
    } else {
        var osu_md = await page.$eval(".osu-md", el => el.innerHTML)
    }

    if (!callback) {
        type(osu_md)
    } else {
        callback(osu_md)
    }
}

module.exports.get_full_news_content = get_full_news_content;