"use strict";

var request = require('./request');
var apiKey = '';

exports.zipcode = function(query, res) {

  var options = {
    url: 'https://api.meetup.com/2/cities',
    qs: query
  }

  options.qs.key = apiKey;
  options.qs.page = 3;

  request.get(options, function(err, zipcodes) {
    var returned;
    if (zipcodes.results) {
      console.log(zipcodes.results[0].zip)
      returned = zipcodes.results[0].zip;
    }
    res(err, returned);
  });
}

exports.events = function(query, res) {

  var options = {
    url: 'https://api.meetup.com/2/open_events',
    qs: query
  }

  options.qs.key = apiKey;
  options.qs.page = 5;

  request.get(options, function(err, events) {
    console.log('err: ')
    console.log(err)
    console.log('events: ')
    console.log(events);
    res(err, events);
  });
}
