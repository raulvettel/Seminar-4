 var express = require('express');
 var router = express.Router();
 var path = require('path');

router.use('*', function(req, res, next) {
res.sendFile(path.join(__dirname, '../public/webapp/views/index.html'));
});

module.exports = router;