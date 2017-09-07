/* Fill out these functions using Mongoose queries*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database */

/* Connect to your database */
//mongoose.Promise = global.Promise;
mongoose.connect('mongodb://iceman:jz960612@ds127564.mlab.com:27564/jeffland'); // connecting to DB via uri 
var service=mongoose.connection;

service.on('service', function(){



})


var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   Listing.find({ name: 'Library West' }, function(err, Listing) {
  if (err) throw err;

  // object of the user
  console.log(Listing);
});


};
var removeCable = function() {

Listing.find({ code: 'CABL' }, function(err, Listing) {
  if (err) throw err;

  // delete him
  Listing.remove(function(err) {
    if (err) throw err;

    console.log('Listing successfully deleted!');
  });
});

};
var updatePhelpsLab = function() {

Listing.findOneAndUpdate({ name: 'Phelps Laboratory' }, { address: '102 Phelps Lab, Gainesville, FL 32611' }, function(err, Listing) {
  if (err) throw err;

  // we have the updated user returned to us
  console.log(Listing);
});


};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
   Listing.find({}, function(err, Listing) {
  if (err) throw err;

  // object of all the users
  console.log(Listing);
});


};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
