const express = require('express');
const { query } = require('../modules/pool');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "feedback" ORDER BY "id" ASC`)
        .then(result => res.send(result.rows))
        .catch(err => res.sendStatus(500));
})

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

router.delete('/:id', (req, res) => {
    let queryText = `
        DELETE FROM "feedback" WHERE "id" = $1
    `
    pool.query(queryText, [req.params.id])
        .then(result => res.sendStatus(200))
        .catch(err => res.sendStatus(500))
})

module.exports = router;