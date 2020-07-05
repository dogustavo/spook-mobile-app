const config = {
    dev: {
        apiGateway: {
            URL: 'http://localhost:3001',
            version: 'v1',
        },
    },
    prod: {
        apiGateway: {
            URL: 'https://spook-api.herokuapp.com',
            version: 'v1',
        },
    }
}

module.exports = config.prod;