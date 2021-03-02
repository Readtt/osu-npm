const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

async function get_news_at_index(index, callback) {

    const brower = await puppeteer.launch()
    const [page] = await brower.pages()

    await page.goto('https://osu.ppy.sh/home/news', {
        waitUntil: 'networkidle0'
    })
    const data = await page.evaluate(() => document.querySelector('*').outerHTML);

    let $ = cheerio.load(data);

    if (index < 11) {
        var title = $('.news-card__row--title')[index].children[0].data.trim()
        var preview = $('.news-card__row--preview')[index].children[0].data.trim()
        var author = $('.news-card__row--author')[index].children[1].children[0].data.trim()
        var cover = $('.news-card__cover')[index].attribs.src.trim()
        var time = $('.news-card__time')[index].children[0].data.trim()
        var exactTime = $('.news-card__time')[0].attribs.title.trim()
        var link = $('.news-card')[index].attribs.href.trim()

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

        var news_at_index_dictZip = dictZip(date, [title, preview, author, cover, exactTime, time, link])

        callback(news_at_index_dictZip)
    } else {
        throw new Error("Choose an index below 11 for pagnation purposes.")
    }

    brower.close()
}

module.exports.get_news_at_index = get_news_at_index;