var express = require('express');
var router = express.Router();
const db = require('../db');
const passport = require('passport');

//post new order
router.post('/', passport.authenticate('basic', {session : false}), (req, res) => {
    var theUser = req.user.id;
    var rightNow = new Date();
    var rightNowString = rightNow.toString().substring(0,33);

    console.log(req.body.detail);

    db.query('insert into orders_table (userId, date, detail, status) values($1, $2, $3, $4)',
        [theUser, rightNowString, req.body.detail, "pending"])
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

//delete order by id
router.delete('/', passport.authenticate('basic', {session : false}), (req, res) => {
    if(req.user.username !== 'Admin'){
        res.sendStatus(403);
        return;
    }
    db.query('delete from orders_table where id=$1', [req.query.id])
    .then(result => {
        res.sendStatus(200);
    })
    .catch(error => {
        console.error(error);
        res.sendStatus(500);
    })
})

//change order by id in req.query
router.put('/', passport.authenticate('basic', {session : false}), (req, res) => {
    if(req.user.username !== 'Admin'){
        res.sendStatus(403);
        return;
    }
    db.query(`update orders_table set
        userId=$1, date=$2, detail=$3, status=$4 where id=$5`,
        [req.body.userId, req.body.date, req.body.detail, req.body.status, req.query.id])
    .then(result => {
        res.sendStatus(201);
    })
    .catch(error => {
        console.error(error);
        res.sendStatus(500);
    })
})

module.exports = router;