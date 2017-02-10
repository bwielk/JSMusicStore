var Record = require('./record')

var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
};

RecordStore.prototype = {
  add: function(product){
    this.inventory.push(product)
  },

  sell: function(product){
    if(product.stock == 0){
      return "Out of stock!"
    }else{
      this.balance += product.price;
      product.stock -=1;
    }
  }
};

module.exports = RecordStore;

// store1 = new RecordStore("XXX", "Los Angeles");
// record1 = new Record("Madonna", "Like A Prayer", 20);
// record2 = new Record("Nirvana", "In Utero", 25);
// store1.add(record1);
// store1.add(record2);
// console.log(store1.showInventory());