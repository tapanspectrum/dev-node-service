const router = require('express').Router();

router.get('/',(req, res) => {
    res.send('welcome to page');
})


module.exports = router