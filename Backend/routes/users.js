const
    express = require('express'),
    router = express.Router(),
    axios = require('axios'),
    apicache = require('apicache'),
    error = require('../models/error');

var cache = apicache.middleware;

var url = "https://jsonplaceholder.typicode.com/users";

/* GET Method for all users */
router.get("/", cache('5 minutes'), async function (_request, response) {
    axios.get(url)
        .then(res => {
            response.status(200).json(res.data);
        })
        .catch(err => {
            let errorResponse = new error(err.response.status, err.message, Date.now());
            response.status(err.response.status).json(errorResponse);
        });
});

/* POST Method to create a new post */
router.post('/', async function (request, response) {
    axios.post(url, request.body)
        .then(res => {
            response.status(201).json(res.data);
        })
        .catch(err => {
            let errorResponse = new error(err.response.status, err.message, Date.now());
            response.status(err.response.status).json(errorResponse);
        });
});

module.exports = router;