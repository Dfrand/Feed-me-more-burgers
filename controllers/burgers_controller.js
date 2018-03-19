var express = require('express');
var router = express.Router();
var db = require('../models');

router.get("/", function (req, res) {
    db.BurgerNow.findAll({}).then(function (burger_data) {
        res.render("index", {
            burger_data
        });
    });
});

router.post("/burgers/create", function (req, res) {
    db.BurgerNow.create({
        burger_name: req.body.burger_name,
        devoured: false,
    }).then(function (result) {
        res.redirect('/');
    });
});

router.put("/burgers/update/?", function (req, res) {
    db.BurgerNow.update({
        devoured: true,
    }, {
        where: {
            id: req.body.burger_id
        },
    }).then(function (result) {
        // if (result.changedRows === 0) {
        //     return res.status(404).end();
        // } else {
        //     res.status(200).end();
        // }
    });
    res.redirect('/');
});

module.exports = router;