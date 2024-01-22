const { addData, deleteData, getData, getUserData } = require('../controllers/site_data');

const router = require('express').Router();

router.post('/add-data', addData)
        .get('/get-data', getData)
        .get('/get-user-data/:id', getUserData)
        .delete('/del-data/:id',deleteData)

module.exports = router