var express = require('express');
var router = express.Router();
const db = require('../db');
const passport = require('passport');

//get promos. use search params to get by id or name
router.get('/', (req, res) => {
    if(req.query.id){
        db.query('select * from promotions_table where id = $1', [req.query.id])
        .then(result => {
            for (let i = 0; i < result.rows.length; ++i){
                result.rows[i].price = result.rows[i].price/100;
            }
            if(result.rows.length === 1) res.json(result.rows[0]);
            else res.json({})
        })
        .catch(err => {
            console.error(err);
            res.send(500);
        })
    }else if(req.query.name){
        var nameLike="%"+req.query.name+"%";
        db.query('select * from promotions_table where name ILIKE $1', [nameLike])
        .then(result => {
            for (let i = 0; i < result.rows.length; ++i){
                result.rows[i].price = result.rows[i].price/100;
            }
            res.json(result.rows);
        })
        .catch(err => {
            console.error(err);
            res.send(500);
        })
    }else{
        db.query('select * from promotions_table')
        .then(result => {
            for (let i = 0; i < result.rows.length; ++i){
                result.rows[i].price = result.rows[i].price/100;
            }
            res.json(result.rows);
        })
        .catch(err => {
            console.error(err);
            res.send(500);
        })
    }
})

//post new promo
router.post('/', passport.authenticate('basic', {session : false}), (req, res) => {
    if(req.user.username !== 'Admin'){
        res.sendStatus(403);
        return;
    }
    var int_price = Math.floor(req.body.price * 100);
    db.query(`insert into promotions_table
        (name, notes, price, img, code, selected)
        values($1, $2, $3, $4, $5, $6)`,
        [req.body.name, req.body.notes, int_price, req.body.img, req.body.code, req.body.selected])
    .then(result => {
        res.sendStatus(201);
    })
    .catch(err => {
        console.error(err);
        res.sendStatus(403);
    })
})

//change promo by id in req.query
router.put('/', passport.authenticate('basic', {session : false}), (req, res) => {
    if(req.user.username !== 'Admin'){
        res.sendStatus(403);
        return;
    }
    var int_price = Math.floor(req.body.price * 100);
    db.query(`update promotions_table set
        name=$1, notes=$2, price=$3, img=$4, code=$5, selected=$6 where id=$7`,
        [req.body.name, req.body.notes, int_price, req.body.img, req.body.code, req.body.selected, req.query.id])
    .then(result => {
        res.sendStatus(201);
    })
    .catch(error => {
        console.error(error);
        res.sendStatus(500);
    })
})

//delete promo by id
router.delete('/', passport.authenticate('basic', {session : false}), (req, res) => {
    if(req.user.username !== 'Admin'){
        res.sendStatus(403);
        return;
    }
    db.query('delete from promotions_table where id=$1', [req.query.id])
    .then(result => {
        res.sendStatus(200);
    })
    .catch(error => {
        console.error(error);
        res.sendStatus(500);
    })
})


module.exports = router;