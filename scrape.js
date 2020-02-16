const cheerio = require('cheerio');
const axios = require('axios');

axios.get('https://www.usatoday.com/tech/').then(response => {
    //load entire web page into cheerio

    const $ = cheerio.load(response.data);
})