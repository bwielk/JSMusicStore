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
  for(var item of this.boughtItems){
    if(item.id === id){
      return item;
    }else{
      return "The item doesn't exist. Buy it first";
    }
  }
},

buy: function(product, store){
  if(this.funds >= product.price){
    store.sell(product);
    var itemToBuy = new Record(product.artist, product.title, product.price, 1);
    this.boughtItems.push(itemToBuy);
    this.funds -= itemToBuy.price;
  }else{
    return "You cannot afford to buy this item";
  }
}

};

module.exports = Customer;