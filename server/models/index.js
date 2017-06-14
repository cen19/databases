var db = require('../db');
var url = require('url');

// refactor similar code blocks
module.exports = {
  messages: {
    get: function (callback) { // a function which 
      console.log("get from model");
      //produces all the messages
      // fetch all msgs
      // looks at our db
      // queries it
      // returns results to client
      // we want to get from msg: id, text, roomname, username
      // get username with join
        // join with loose selection criteria bc implementing db intn from scratch, no code enforcing selection criteria
      // var queryStr = 'select messages.id, messasges.text, messages.roomname from messages LEFT OUTER JOIN users (messages.userid = users.id) ORDER BY messages.id desc'; 
      // db.query(queryStr, function(err, results) {
      //   callback(results);
      // });
    },

    post: function (params, callback) {
      // create msg
      // a function which can be used to insert a message into the database
      // createsubquery to get userid where username = thing we provide input for
      var queryStr = 'insert into messages(text, userid, roomname) \ values (?, (select id from users where username = ? limit 1), ?)';
      db.query(queryStr, params, function(err, results) {
        callback(results);
      }); 
    } 
  },

  users: {
    // Ditto as above.
    get: function (callback) {
    // fetch all users
    // interact with db query provider, pass query string to query function, which takes a cb(err, results = object)
      var queryStr = 'select * from users';
      db.query(queryStr, function(err, results) {
        // what do we do with query?
        // cb to communicate results in async func
        callback(results);
      });
    },
    post: function (params, callback) {
      var queryStr = 'insert into users(username) values (?)'; // (?) allows you to provide inputs to query string
            // will get this from params
          //data that we want to insert = username
          // users - table to insert to
    
      db.query(queryStr, params, function(err, results) {
        // what do we do with query?
        // cb to communicate results in async func
        callback(results);
      });
    }
  }
};

