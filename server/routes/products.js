var express = require('express');
var router = express.Router();
const db = require('../db');
const passport = require('passport');

/* ---------------- Pizza ---------------- */

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

/* --------------- End Pizza ----------------- */
/* ---------------- Salad ---------------- */

//get salads. use search params to get by id or name
router.get('/salads', (req, res) => {
    if(req.query.id){
        db.query('select * from salads_table where id = $1', [req.query.id])
        .then(result => {
            for (let i = 0; i < result.rows.length; ++i){
                result.rows[i]['italian sausage'] = result.rows[i].italiansausage;
            }
            res.json(result.rows);
        })
        .catch(err => {
            console.error(err);
            res.send(500);
        })
    }else if(req.query.name){
        var nameLike="%"+req.query.name+"%";
        db.query('select * from salads_table where name ILIKE $1', [nameLike])
        .then(result => {
            for (let i = 0; i < result.rows.length; ++i){
                result.rows[i]['italian sausage'] = result.rows[i].italiansausage;
            }
            res.json(result.rows);
        })
        .catch(err => {
            console.error(err);
            res.send(500);
        })
    }else{
        db.query('select * from salads_table')
        .then(result => {
            for (let i = 0; i < result.rows.length; ++i){
                result.rows[i]['italian sausage'] = result.rows[i].italiansausage;
            }
            res.json(result.rows);
        })
        .catch(err => {
            console.error(err);
            res.send(500);
        })
    }
})

//post new salad
router.post('/salads', passport.authenticate('basic', {session : false}), (req, res) => {
    if(req.user.username !== 'Admin'){
        res.sendStatus(403);
        return;
    }
    db.query(`insert into salads_table
        (name, size, description, price, seafood, bacon, tomatoes, chicken, shrimp, sausage, pineapple, pepperoni, onion, ham, corn, cheese, pepper, mushroom, italiansausage)
        values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)`,
        [req.body.name, req.body.size, req.body.description, req.body.price, req.body.seafood, req.body.bacon, req.body.tomatoes,
        req.body.chicken, req.body.shrimp, req.body.sausage, req.body.pineapple, req.body.pepperoni, req.body.onion, req.body.ham,
        req.body.corn, req.body.cheese, req.body.pepper, req.body.mushroom, req.body['italian sausage'] ])
    .then(result => {
        res.sendStatus(201);
    })
    .catch(err => {
        console.error(err);
        res.sendStatus(403);
    })
})

//change salad by id in req.query
router.put('/salads', passport.authenticate('basic', {session : false}), (req, res) => {
    if(req.user.username !== 'Admin'){
        res.sendStatus(403);
        return;
    }
    db.query(`update salads_table set
        name=$1, size=$2, description=$3, price=$4, seafood=$5, bacon=$6, tomatoes=$7, chicken=$8, shrimp=$9, sausage=$10, pineapple=$11, pepperoni=$12, onion=$13, ham=$14,
        corn=$15, cheese=$16, pepper=$17, mushroom=$18, italiansausage=$19 where id=$20`,
        [req.body.name, req.body.size, req.body.description, req.body.price, req.body.seafood, req.body.bacon, req.body.tomatoes,
        req.body.chicken, req.body.shrimp, req.body.sausage, req.body.pineapple, req.body.pepperoni, req.body.onion, req.body.ham,
        req.body.corn, req.body.cheese, req.body.pepper, req.body.mushroom, req.body['italian sausage'], req.query.id ])
    .then(result => {
        res.sendStatus(201);
    })
    .catch(error => {
        console.error(error);
        res.sendStatus(500);
    })
})

//delte salad by id
router.delete('/salads', passport.authenticate('basic', {session : false}), (req, res) => {
    if(req.user.username !== 'Admin'){
        res.sendStatus(403);
        return;
    }
    db.query('delete from salads_table where id=$1', [req.query.id])
    .then(result => {
        res.sendStatus(200);
    })
    .catch(error => {
        console.error(error);
        res.sendStatus(500);
    })
})

/* --------------- End Salad ---------------- */

module.exports = router;