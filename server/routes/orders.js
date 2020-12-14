var express = require('express');
var router = express.Router();
const db = require('../db');
const passport = require('passport');

//post new order
router.post('/', passport.authenticate('basic', {session : false}), (req, res) => {
    var rightNow = new Date();
    var rightNowString = rightNow.toString().substring(0,33);

    db.query('insert into orders_table (userId, userName, date, detail, status) values($1, $2, $3, $4, $5)',
        [req.user.id, req.user.username, rightNowString, req.body.detail, "pending"])
    .then( result => {
        res.sendStatus(201);
    })
    .catch(err => {
        console.error(err);
        res.sendStatus(403);
    })
})

//get orders of the authorized user
router.get('/', passport.authenticate('basic', {session : false}), (req, res) => {
    db.query('select * from orders_table where userId = $1', [req.user.id])
    .then(result => {
        res.json(result.rows);
    })
    .catch(err => {
        console.error(err);
        res.send(500);
    })
})

//get all orders
router.get('/all', passport.authenticate('basic', {session : false}), (req, res) => {
    if(req.user.username !== 'Admin'){
        res.sendStatus(403);
        return;
    }
    db.query('select * from orders_table')
    .then(result => {
        res.json(result.rows);
    })
    .catch(err => {
        console.error(err);
        res.send(500);
    })
})

//update status of an order
router.put('/', passport.authenticate('basic', {session : false}), (req, res) => {
    if(req.user.username !== 'Admin'){
        res.sendStatus(403);
        return;
    }
    db.query(`update orders_table set status=$1 where id=$2`, [req.body.status, req.query.id])
    .then(result => {
        res.sendStatus(201);
    })
    .catch(error => {
        console.error(error);
        res.sendStatus(500);
    })
})

module.exports = router;