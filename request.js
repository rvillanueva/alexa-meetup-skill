"use strict";

exports.get = function(options, res) {

  var https = require('https');
  var qs = require('querystring');
  var url = options.url + '?' + qs.stringify(options.qs);
  console.log(url)
  https.get(url, function(response) {
    var str = '';
    response.on('data', function(chunk) {
      str += chunk;
    });

    response.on('end', function() {
      var json = JSON.parse(str);
      console.log('Response: ' + response.statusCode)
      if (json.results) {
        console.log('Results: ' + json.results.length)
      }
      res(null, json);
    });
    response.on('error', function(e) {
      console.log("Error: " + e.message);
      console.log(e.stack);
      res(e, null)
    });
  })
  
}
