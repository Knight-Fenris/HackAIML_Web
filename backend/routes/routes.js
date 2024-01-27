const { addData, deleteData, getData, getUserData, postSearchUser, postSearchUrl } = require('../controllers/site_data');

const router = require('express').Router();

router.post('/add-data', addData)
        .get('/get-data', getData)
        .get('/get-user-data/:id', getUserData)
        .post('/search-user', postSearchUser)
        .post('/search-url', postSearchUrl)

        .delete('/del-data/:id',deleteData)

module.exports = router