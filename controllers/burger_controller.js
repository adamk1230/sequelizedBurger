var express = require("express");
var router = express.Router();

//import burger.js to use the db functions
var db = require("../models")

// this is the index/root route
router.get("/", function(req, res) {
  db.Burger.findAll({}).then(function(dbBurger) {
    var hbsObject = {
      burgers: dbBurger
    };

    res.render("index", hbsObject);
  });

  // burger.selectAll(function(data) {
  //   var hbsObject = {
  //     burgers: data
  //   };
    
  //   res.render("index", hbsObject);
  // });
});

//this is the post route, insertOne(object, cb), req.body.name is the name of the new burger taken from the text area
router.post("/", function(req, res) {

    db.Burger.create({
      burger_name: req.body.name
    }).then(function(dbBurger){
      res.redirect("/");
    });

  // console.log(req.body);
  // burger.insertOne(
  //   {
  //     burger_name: req.body.name,
  //     devoured: 0
  //   }
  //   , function() {
  //   res.redirect("/");
  // });

});

//this is the put rout, updateOne(whatToUpdate, whereToUpdate, cb), when the Devour It! button is clicked dvoured is updated in the database
router.put("/:id", function(req, res) {
  db.Burger.update({
    devoured: req.body.devoured
  }, {
    where: {
      id: req.params.id
    }
  }).then(function(dbBurger){
    res.redirect("/");
  });


  // burger.updateOne(
  // {
  //   devoured: req.body.devoured
  // },
  // {
  //   id: req.params.id
  // }, function() {
  //   res.redirect("/");
  // });
});


//exporting to server.js
module.exports = router;
