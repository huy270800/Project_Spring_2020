var express = require('express');
var router = express.Router();
const db = require('../db');
const passport = require('passport');

//get pizzas. use search params to get by id or name
router.get('/pizzas', (req, res) => {
    if(req.query.id){
        db.query('select * from pizzas_table where id = $1', [req.query.id])
        .then(result => {
            res.json(result.rows);
        })
        .catch(err => {
            console.error(err);
            res.send(500);
        })
    }else if(req.query.name){
        var nameLike="%"+req.query.name+"%";
        db.query('select * from pizzas_table where name ILIKE $1', [nameLike])
        .then(result => {
            res.json(result.rows);
        })
        .catch(err => {
            console.error(err);
            res.send(500);
        })
    }else{
        db.query('select * from pizzas_table')
        .then(result => {
            res.json(result.rows);
        })
        .catch(err => {
            console.error(err);
            res.send(500);
        })
    }
})

//post new pizza
router.post('/pizzas', passport.authenticate('basic', {session : false}), (req, res) => {
    if(req.user.username !== 'Admin'){
        res.sendStatus(403);
        return;
    }
    db.query(`insert into pizzas_table
        (name, size, ingredients, price, spicy, seafood, mixed, vegan, bestseller, traditional, filling, recommend, img)
        values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
        [req.body.name, req.body.size, req.body.ingredients, req.body.price, req.body.spicy, req.body.seafood, req.body.mixed,
        req.body.vegan, req.body.bestseller, req.body.traditional, req.body.filling, req.body.recommend, req.body.img])
    .then(result => {
        res.sendStatus(201);
    })
    .catch(err => {
        console.error(err);
        res.sendStatus(403);
    })
})

//change pizza by id in req.query
router.put('/pizzas', passport.authenticate('basic', {session : false}), (req, res) => {
    if(req.user.username !== 'Admin'){
        res.sendStatus(403);
        return;
    }
    db.query(`update pizzas_table set
        name=$1, size=$2, ingredients=$3, price=$4, spicy=$5, seafood=$6, mixed=$7, vegan=$8, bestseller=$9, traditional=$10, filling=$11, recommend=$12, img=$13 where id=$14`,
        [req.body.name, req.body.size, req.body.ingredients, req.body.price, req.body.spicy, req.body.seafood, req.body.mixed,
        req.body.vegan, req.body.bestseller, req.body.traditional, req.body.filling, req.body.recommend, req.body.img, req.query.id])
    .then(result => {
        res.sendStatus(201);
    })
    .catch(error => {
        console.error(error);
        res.sendStatus(500);
    })
})

//delte pizza by id
router.delete('/pizzas', passport.authenticate('basic', {session : false}), (req, res) => {
    if(req.user.username !== 'Admin'){
        res.sendStatus(403);
        return;
    }
    db.query('delete from pizzas_table where id=$1', [req.query.id])
    .then(result => {
        res.sendStatus(200);
    })
    .catch(error => {
        console.error(error);
        res.sendStatus(500);
    })
})

module.exports = router;