const express = require('express');
const { addInvestor } = require('../controller/investor');


const router = express.Router();

router.post('/investors', addInvestor);


module.exports = router;
