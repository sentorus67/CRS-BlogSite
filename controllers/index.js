const express = require('express');
const router = express.Router();

const blogRoutes=require('./blogRoutes');

router.use('/',blogRoutes);

module.exports = router;