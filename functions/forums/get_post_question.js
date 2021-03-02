const puppeteer = require('puppeteer');

async function get_post_question(post, type, callback) {
    var url = `${post}`

    const brower = await puppeteer.launch()
    const [page] = await brower.pages()

    await page.goto(`${url}`, {
        waitUntil: 'networkidle0'
    })

    if (type == 'text') {
        var question = await page.$eval(".bbcode", el => el.innerText)
    } else if (type == 'html') {
        var question = await page.$eval(".bbcode", el => el.innerHTML)
    } else {
        var question = await page.$eval(".bbcode", el => el.innerHTML)
    }

    if (!callback) {
        type(question)
    } else {
        callback(question)
    }
}

module.exports.get_post_question = get_post_question;