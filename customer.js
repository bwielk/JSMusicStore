var Record = require('./record');

var Customer = function(){
  this.funds = 0;
  this.boughtItems = [];
};

Customer.prototype = {
 setFunds: function(value_of_funds){
  this.funds = value_of_funds;
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
    var itemToBuy = new Record(product.artist, product.title, product.price, 1, product.id);
    this.boughtItems.push(itemToBuy);
    this.funds -= itemToBuy.price;
  }else{
    return "You cannot afford to buy this item";
  }
},

sell: function(product){
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