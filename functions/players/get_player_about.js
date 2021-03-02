const puppeteer = require('puppeteer');

async function get_player_about(username, type, callback) {
    var url = `https://osu.ppy.sh/users/${username}`

    const brower = await puppeteer.launch()
    const [page] = await brower.pages()

    await page.goto(`${url}`, {
        waitUntil: 'networkidle0'
    })

    if (type == 'text') {
        var description = await page.$eval(".bbcode", el => el.innerText)
    } else if (type == 'html') {
        var description = await page.$eval(".bbcode", el => el.innerHTML)
    } else {
        var description = await page.$eval(".bbcode", el => el.innerHTML)
    }

    if (!callback) {
        type(description)
    } else {
        callback(description)
    }
}

module.exports.get_player_about = get_player_about;