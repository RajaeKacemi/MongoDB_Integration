const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    // Get a reference to a collection
        res.send('Hello world');
        
    });

module.exports = router;