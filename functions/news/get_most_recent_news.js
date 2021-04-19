const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const {
    date
} = require('../data')

async function get_most_recent_news(callback) {

    const brower = await puppeteer.launch()
    const [page] = await brower.pages()

    await page.goto('https://osu.ppy.sh/home/news', {
        waitUntil: 'networkidle0'
    })
    const data = await page.evaluate(() => document.querySelector('*').outerHTML);

    let $ = cheerio.load(data);

    var title = $('.news-card__row--title')[0].children[0].data.trim()
    var preview = $('.news-card__row--preview')[0].children[0].data.trim()
    var author = $('.news-card__row--author')[0].children[1].children[0].data.trim()
    var cover = $('.news-card__cover')[0].attribs.src.trim()
    var time = $('.news-card__time')[0].children[0].data.trim()
    var exactTime = $('.news-card__time')[0].attribs.title.trim()
    var link = $('.news-card')[0].attribs.href.trim()

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

    var most_recent_news_dictZip = dictZip(date(), [title, preview, author, cover, exactTime, time, link])

    callback(most_recent_news_dictZip)

    brower.close()
}

module.exports.get_most_recent_news = get_most_recent_news;