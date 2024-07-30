const {registerRoute} = require('../router'),
    {getServerInfo} = require('../../business-logic/server-info/server-status')

module.exports = function (app) {
    registerRoute(app,
        '',
        {prefix: '/', headers: {'Cache-Control': 'no-store'}},
        () => getServerInfo())
}