module.exports = async function(app) {

    app.get('/country/:country', async (req, res) => {

        const scrapper = require('../classes/scrapper')
        const country = req.params.country

        const obj = await scrapper.CDRscrapper(country);

        res.send(obj)
    })

    app.get('/*',  (req, res) => {
      res.send("<h1> Covid19 API </h1> How to use : IP:PORT/country/country_name")
    })


}