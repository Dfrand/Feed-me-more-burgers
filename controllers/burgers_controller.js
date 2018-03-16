var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');
var db = require('../models');

router.get('/', function (req, res) {
    res.redirect('/burgers')
    // burger.all(function (burger_data) {
    //     console.log(burger_data);
    //     res.render('index',{burger_data});
    // });
});

router.get("/burgers", function (req, res) {
    db.Burger.findAll({
        include: [db.Customer],
        order: [
            ["burger_name", "ASC"]
        ]
    })
        .then(function (dbBurger) {
            var hbsObject = {
                burger: dbBurger
            };
            return res.render("index", hbsObject);
        });
});

router.put('/burgers/update', function (req, res) {
    if(req.body.customer) {
        db.Customer.create({
            customer: req.body.customer,
            burger_id: req.body.burger_id
        }).then(function (dbCustomer) {
            return db.Burger.update({
                devoured: true,
            },{
                where:{
                    id: req.body.burger_id
                }
            })
        }).then(function (dbBurger) {
            res.json("/")
        })
    } else {
        db.Burger.update({
            devoured: true
        }, {
                where: {
                    id: req.body.burger_id
                }
            })
            .then(function (dbBurger) {
                res.json("/");
            });
    }
    // burger.update(req.body.burger_id, function (result) {
    //     console.log(result);
    //     res.redirect('/');
    // });
});

router.post('/burgers/create', function (req, res) {
    burger.create(req.body.burger_name, function (result) {
        res.redirect('/');    
    });
});

module.exports = router;