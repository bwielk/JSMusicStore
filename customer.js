var store = require('./record_store');
var product = require('./record');

var Customer = function(){
  boughtItems = [];
};

Customer.prototype = {
 buy: function(product, store){

 }
};

module.exports = Customer;