var express = require('express');
var router = express.Router();
var db = require('../models');

router.post('/burgers/create', function (req, res) {
    db.BurgerNow.create({
        burger_name: req.body.burger_name,
        devoured: false,
    }).then(function (result) {
        res.redirect('/');
        res.json({ id: result.insertId });
    });
});

router.get("/", function (req, res) {
    // console.log(db);
    db.BurgerNow.findAll({}).then(function (burger_data) {
        res.render("index",{burger_data});
    });
});

router.put("/burgers/update", function (req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    // var condition = "id = " + req.params.id;
    db.BurgerNow.update({ devoured: true }, { where: {
        id: req.params.id,
    }}
    ).then(function (result) {
        res.redirect('/');
    
    // }
    // }).then(function (result) {
    //     if (result.changedRows == 0) {
    //         // If no rows were changed, then the ID must not exist, so 404
    //         return res.status(404).end();
    //     } else {
    //         res.status(200).end();
    //     }
    });
});


module.exports = router;