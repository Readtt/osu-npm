const puppeteer = require('puppeteer');

async function return_specific_news_page(url, callback) {
    const brower = await puppeteer.launch()
    const [page] = await brower.pages()

    await page.goto(`${url}`, {
        waitUntil: 'networkidle0'
    })
    const data = await page.evaluate(() => document.querySelector('*').outerHTML);

    callback(data)

    brower.close()
}

module.exports.return_specific_news_page = return_specific_news_page;