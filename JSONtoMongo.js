'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database */

/* Connect to your database */
//mongoose.Promise = global.Promise;
var connect = mongoose.connect('mongodb://iceman:jz960612@ds127564.mlab.com:27564/jeffland'); // connecting to DB via uri 
var connection=mongoose.connection;

var listingData;
fs.readFile('listings.json', 'utf8', function(err, data) {
  if (err) throw err;

  listingData=JSON.parse(data);
console.log(listingData);
  for(var i=0; i<listingData.entries.length; i++){

    var entry = new Listing({

    name : listingData.entries[i].name,
     code : listingData.entries[i].code,
     coordinates : listingData.entries[i].coordinates,
    
    address : listingData.entries[i].address
  });

    entry.save(function(err){

      if(err) throw err;

    });

  
}

});


/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */

 //var parsedJSON = JSON.parse('listings.json');

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */