const country_routes = require('./country_routes');

module.exports = function(app, db) {
    country_routes(app,db);
}