const axios = require('axios')
const cheerio = require('cheerio')


module.exports = {
    CDRscrapper: async function (country) {
    const url = "https://www.worldometers.info/coronavirus/country/";
    const html = await axios.get(url+country);
    const $ = await cheerio.load(html.data);
  
    let data = $('#maincounter-wrap > div').text().split("\n");
  
    var filtered = data.filter(function (el) {
      return el != '';
    });

    const jsonArray = {
      "Country": country,
      "Total cases" : filtered[0],
      "Deaths" : filtered[1],
      "Recovered" : filtered[2]
    }
  
    return(jsonArray)
  
  }

};
