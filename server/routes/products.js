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
            for (let i = 0; i < result.rows.length; ++i){
                result.rows[i].size = result.rows[i].size.split(',');
                result.rows[i].price = result.rows[i].price/100;
            }
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
            for (let i = 0; i < result.rows.length; ++i){
                result.rows[i].size = result.rows[i].size.split(',');
                result.rows[i].price = result.rows[i].price/100;
            }
            res.json(result.rows);
        })
        .catch(err => {
            console.error(err);
            res.send(500);
        })
    }else{
        db.query('select * from pizzas_table')
        .then(result => {
            for (let i = 0; i < result.rows.length; ++i){
                result.rows[i].size = result.rows[i].size.split(',');
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

//post new pizza
router.post('/pizzas', passport.authenticate('basic', {session : false}), (req, res) => {
    if(req.user.username !== 'Admin'){
        res.sendStatus(403);
        return;
    }
    var int_price = Math.floor(req.body.price * 100);
    db.query(`insert into pizzas_table
        (name, size, description, price, spicy, seafood, mixed, vegan, bestseller, traditional, filling, recommend, img)
        values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
        [req.body.name, req.body.size.toString(), req.body.description, int_price, req.body.spicy, req.body.seafood, req.body.mixed,
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
    var int_price = Math.floor(req.body.price * 100);
    db.query(`update pizzas_table set
        name=$1, size=$2, description=$3, price=$4, spicy=$5, seafood=$6, mixed=$7, vegan=$8, bestseller=$9, traditional=$10, filling=$11, recommend=$12, img=$13 where id=$14`,
        [req.body.name, req.body.size.toString(), req.body.description, int_price, req.body.spicy, req.body.seafood, req.body.mixed,
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
                result.rows[i].size = result.rows[i].size.split(',');
                result.rows[i]['italian sausage'] = result.rows[i].italiansausage;
                result.rows[i].price = result.rows[i].price/100;
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
                result.rows[i].size = result.rows[i].size.split(',');
                result.rows[i]['italian sausage'] = result.rows[i].italiansausage;
                result.rows[i].price = result.rows[i].price/100;
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
                result.rows[i].size = result.rows[i].size.split(',');
                result.rows[i]['italian sausage'] = result.rows[i].italiansausage;
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

//post new salad
router.post('/salads', passport.authenticate('basic', {session : false}), (req, res) => {
    if(req.user.username !== 'Admin'){
        res.sendStatus(403);
        return;
    }
    var int_price = Math.floor(req.body.price * 100);
    db.query(`insert into salads_table
        (name, size, description, price, seafood, bacon, tomatoes, chicken, shrimp, sausage, pineapple, pepperoni, onion, ham, corn, cheese, pepper, mushroom, italiansausage)
        values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)`,
        [req.body.name, req.body.size.toString(), req.body.description, int_price, req.body.seafood, req.body.bacon, req.body.tomatoes,
        req.body.chicken, req.body.shrimp, req.body.sausage, req.body.pineapple, req.body.pepperoni, req.body.onion, req.body.ham,
        req.body.corn, req.body.cheese, req.body.pepper, req.body.mushroom, req.body['italian sausage'], req.body.img ])
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
    var int_price = Math.floor(req.body.price * 100);
    db.query(`update salads_table set
        name=$1, size=$2, description=$3, price=$4, seafood=$5, bacon=$6, tomatoes=$7, chicken=$8, shrimp=$9, sausage=$10, pineapple=$11, pepperoni=$12, onion=$13, ham=$14,
        corn=$15, cheese=$16, pepper=$17, mushroom=$18, italiansausage=$19, img=$20 where id=$21`,
        [req.body.name, req.body.size.toString(), req.body.description, int_price, req.body.seafood, req.body.bacon, req.body.tomatoes,
        req.body.chicken, req.body.shrimp, req.body.sausage, req.body.pineapple, req.body.pepperoni, req.body.onion, req.body.ham,
        req.body.corn, req.body.cheese, req.body.pepper, req.body.mushroom, req.body['italian sausage'], req.body.img, req.query.id ])
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
/* --------------- Drinks -------------------- */

//get drinks. use search params to get by id or name
router.get('/drinks', (req, res) => {
    if(req.query.id){
        db.query('select * from drinks_table where id = $1', [req.query.id])
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
    }else if(req.query.name){
        var nameLike="%"+req.query.name+"%";
        db.query('select * from drinks_table where name ILIKE $1', [nameLike])
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
        db.query('select * from drinks_table')
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

//post new drink
router.post('/drinks', passport.authenticate('basic', {session : false}), (req, res) => {
    if(req.user.username !== 'Admin'){
        res.sendStatus(403);
        return;
    }
    var int_price = Math.floor(req.body.price * 100);
    db.query(`insert into drinks_table
        (name, price, img, alcohol, coke, description)
        values($1, $2, $3, $4, $5, $6)`,
        [req.body.name, int_price, req.body.img, req.body.alcohol, req.body.coke, req.body.description])
    .then(result => {
        res.sendStatus(201);
    })
    .catch(err => {
        console.error(err);
        res.sendStatus(403);
    })
})

//change drink by id in req.query
router.put('/drinks', passport.authenticate('basic', {session : false}), (req, res) => {
    if(req.user.username !== 'Admin'){
        res.sendStatus(403);
        return;
    }
    var int_price = Math.floor(req.body.price * 100);
    db.query(`update drinks_table set
        name=$1, price=$2, img=$3, alcohol=$4, coke=$5, description=$6 where id=$7`,
        [req.body.name, int_price, req.body.img, req.body.alcohol, req.body.coke, req.body.description, req.query.id ])
    .then(result => {
        res.sendStatus(201);
    })
    .catch(error => {
        console.error(error);
        res.sendStatus(500);
    })
})

//delte drink by id
router.delete('/drinks', passport.authenticate('basic', {session : false}), (req, res) => {
    if(req.user.username !== 'Admin'){
        res.sendStatus(403);
        return;
    }
    db.query('delete from drinks_table where id=$1', [req.query.id])
    .then(result => {
        res.sendStatus(200);
    })
    .catch(error => {
        console.error(error);
        res.sendStatus(500);
    })
})

/* --------------- End Drinks ---------------- */
/* --------------- Toppings ---------------- */

//get drinks. use search params to get by id or name
router.get('/toppings', (req, res) => {
    if(req.query.id){
        db.query('select * from toppings_table where id = $1', [req.query.id])
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
    }else if(req.query.name){
        var nameLike="%"+req.query.name+"%";
        db.query('select * from toppings_table where name ILIKE $1', [nameLike])
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
        db.query('select * from toppings_table')
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

//post new drink
router.post('/toppings', passport.authenticate('basic', {session : false}), (req, res) => {
    if(req.user.username !== 'Admin'){
        res.sendStatus(403);
        return;
    }
    var int_price = Math.floor(req.body.price * 100);
    db.query(`insert into toppings_table
        (name, price, img, selected)
        values($1, $2, $3, $4)`,
        [req.body.name, int_price, req.body.img, req.body.selected])
    .then(result => {
        res.sendStatus(201);
    })
    .catch(err => {
        console.error(err);
        res.sendStatus(403);
    })
})

//change drink by id in req.query
router.put('/toppings', passport.authenticate('basic', {session : false}), (req, res) => {
    if(req.user.username !== 'Admin'){
        res.sendStatus(403);
        return;
    }
    var int_price = Math.floor(req.body.price * 100);
    db.query(`update toppings_table set
        name=$1, price=$2, img=$3, selected=$4 where id=$5`,
        [req.body.name, int_price, req.body.img, req.body.selected, req.query.id ])
    .then(result => {
        res.sendStatus(201);
    })
    .catch(error => {
        console.error(error);
        res.sendStatus(500);
    })
})

//delte drink by id
router.delete('/toppings', passport.authenticate('basic', {session : false}), (req, res) => {
    if(req.user.username !== 'Admin'){
        res.sendStatus(403);
        return;
    }
    db.query('delete from toppings_table where id=$1', [req.query.id])
    .then(result => {
        res.sendStatus(200);
    })
    .catch(error => {
        console.error(error);
        res.sendStatus(500);
    })
})

/* --------------- End Toppings ---------------- */

module.exports = router;