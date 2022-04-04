const express = require('express');
const { body } = require('express-validator');
const { shopview } = require('../../controller/shop/shopview.js');

const router = express.Router();

router.get('/', shopview);

module.exports = router;