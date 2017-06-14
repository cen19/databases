var models = require('../models');
// var fs = require('fs');
var url = require('url');

// 
// request({
    //   method: 'POST',
    //   uri: 'http://127.0.0.1:3000/classes/users',
    //   json: { username: 'Valjean' }
    // }, function () {
    //   // Post a message to the node chat server:
    //   request({
    //     method: 'POST',
    //     uri: 'http://127.0.0.1:3000/classes/messages',
    //     json: {
    //       username: 'Valjean',
    //       message: 'In mercy\'s name, three days is all I need.',
    //       roomname: 'Hello'
//         }


module.exports = {
  messages: {
    get: function (req, res) {
      console.log('testing get..........');
      // console.log('REQ :', req);
      models.messages.get();  

      // fetch all msg
    // a function which handles a get request for all messages
    // var endpoint = req.uri.pathname;
    //   // var statuscode = 200;
    //   models.messsages.get(req, res);
      
    },

    post: function (req, res) { 
      console.log('testing post..........');
      console.log('REQ :', req);
      // models.messages.post();  
    // create msg
    // a function which handles posting a message to the database
    // var endpoint = req.uri.pathname;
    //   models.messsages.post(req, res);
    // // req = (req.message, req.username, req.roomname)
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  
  }
};

