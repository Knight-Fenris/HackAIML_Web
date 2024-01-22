const { addData, deleteData, getData } = require('../controllers/site_data');

const router = require('express').Router();

router.post('/add-data', addData)
        .get('/get-data', getData)
        .delete('/del-data/:id',deleteData)

module.exports = router