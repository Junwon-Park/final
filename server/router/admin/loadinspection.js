const express = require('express');
const { body } = require('express-validator');
const { loadinspection } = require('../../controller/admin/loadinspection.js');
const { loadinspectionLimit } = require('../../controller/admin/loadinspectionLimit.js');

const router = express.Router();

router.get('/', loadinspection);
router.get('/limit', loadinspectionLimit);

module.exports = router;