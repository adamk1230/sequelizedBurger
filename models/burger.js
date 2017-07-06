// Import the ORM
var orm = require("../config/orm.js");

//create the db functions
var burger = {
  //"burgers" = tableInput
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  //"burgers" = tableInput, object is the object of the new burger
  insertOne: function(object, cb) {
    orm.insertOne("burgers", object, function(res) {
      cb(res);
    });
  },
  //"burgers" = tableInput, whatToUpdate and whereToUpdate are both objects
  updateOne: function(whatToUpdate, whereToUpdate, cb) {
    orm.updateOne("burgers", whatToUpdate, whereToUpdate, function(res) {
      cb(res);
    });
  }
};

//exporting to burger_controller.js
module.exports = burger;