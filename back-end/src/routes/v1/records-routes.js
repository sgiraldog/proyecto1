const express = require('express');
const { isAuth } = require('../../middlewares/auth');
const recordsController = require('../../controllers/v1/records-controller');

const router = express.Router();

router.post('/create', recordsController.createRecords);
router.get('/get-by-user/:userId', isAuth, recordsController.getRecords);

module.exports = router;
