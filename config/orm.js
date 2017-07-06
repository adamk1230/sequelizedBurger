var connection = require("../config/connections.js");

var orm = {
  //Selects everything on the table:  tableInput = table name
  selectAll: function(tableInput ,cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      
      cb(result);
    });
  },
  //Adds an item to the table:  INTO (??) = table name, SET (?) = an object that contains the details of the new item
  insertOne: function(tableName, object, cb) {
  	var queryString = "INSERT INTO ?? SET ?";
  	connection.query(queryString, [tableName, object], function(err, res){
  		if (err) throw err;
  		cb(res);
  	});
  },
  //Updates an item on the table: UPDATE (??) = table name, SET (?) = what you want to update, WHERE (?) = Where you want to update i.e. ID 
  updateOne: function(tableName, whatToUpdate, whereToUpdate, cb) {
  	var queryString = "UPDATE ?? SET ? WHERE ?";
  	connection.query(queryString, [tableName, whatToUpdate, whereToUpdate], function(err, res){
  		if (err) throw err;
  		cb(res);;
  	});
  }

};


//exporting to burger.js
module.exports = orm;