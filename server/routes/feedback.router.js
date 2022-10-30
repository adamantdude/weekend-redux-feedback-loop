const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// router.get('/', (req, res) => {

// })

router.post('/', (req, res) => {
    let queryText = `
        INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4)
    `
    pool.query(queryText, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
        .then(result => res.sendStatus(201))
        .catch(err => res.sendStatus(500))
})

// router.put('/', (req, res) => {

// })

// router.delete('/', (req, res) => {

// })

module.exports = router;