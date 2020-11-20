var express = require('express');
var router = express.Router();
const db = require('../db');
const passport = require('passport');

//post new location
router.post('/', passport.authenticate('basic', {session : false}), (req, res) => {
    if(req.user.username !== 'Admin'){
        res.sendStatus(403);
        return;
    }

    //so the coords can be saved as INT. spelling mistakes are intentional, since they're used in code
    var int_lat = Math.floor(req.body.latitue * 1000000);
    var int_long = Math.floor(req.body.longtitue * 1000000);

    db.query('insert into locations_table (name, address, delivery, latitude, longitude) values($1, $2, $3, $4, $5)',
        [req.body.name, req.body.address, req.body.delivery, int_lat, int_long])
    .then( result => {
        res.sendStatus(201);
    })
    .catch(err => {
        console.error(err);
        res.sendStatus(403);
    })
})

//get locations
router.get('/', (req, res) => {
    db.query('select * from locations_table')
    .then (result => {
        for (let i = 0; i < result.rows.length; ++i) {
            //get coords from the INT values
            result.rows[i].latitude = result.rows[i].latitude / 1000000;
            result.rows[i].longitude = result.rows[i].longitude / 1000000;
            result.rows[i].latitue = result.rows[i].latitude
            result.rows[i].longtitue = result.rows[i].longitude
        }
        res.json(result.rows);
    })
    .catch(err => {
        console.error(err);
        res.sendStatus(500);
    })
})

module.exports = router;