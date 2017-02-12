var Record = require('./record');

var Customer = function(){
  this.funds = 0;
  this.boughtItems = [];
};

Customer.prototype = {
 setFunds: function(value_of_funds){
  this.funds = value_of_funds;
},

hasRecord: function(product){
  var lookupId = product.id;
  var item = this.getRecord(lookupId);
  if(lookupId === item.id){
    return true;
  }
  return false;
},

getRecord: function(id){
//   for(var i = 0; i<this.boughtItems.length; i+=1){
//     if(this.boughtItems[i].id === id){
//       return this.boughtItems[i];
//     }
//   }
//   return "The item doesn't exist";
// },
  for(var item of this.boughtItems){
    if(item.id === id){
      return item;
    }
  }
  return "The item doesn't exist";
},

buy: function(product, store){
  if(this.funds >= product.price){
    store.sell(product);
    if(this.hasRecord(product)){
      var record = this.getRecord(product.id);
      record.stock += 1;
    }else{
      var itemToBuy = new Record(product.artist, product.title, product.price, 1, product.id);
      this.boughtItems.push(itemToBuy);
    }
    this.funds -= product.price;
  }else{
    return "You cannot afford to buy this item";
  }
},

sell: function(id){
  var product = this.getRecord(id);
  if(product.stock == 0){
    return "You have sold out this record!";
  }else{
    product.stock -= 1;
    this.funds += product.price;
  }
},

setPrice: function(id, newPrice){
  var item = this.getRecord(id);
  item.price = newPrice;
}

};

module.exports = Customer;