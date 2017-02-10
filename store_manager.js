var RecordStore = require('./record_store');

var StoreManager = function(){
};

StoreManager.prototype = {

  showInventory: function(store){
    var content = [];
    for(var item of store.inventory){
      content.push("artist: " + item.artist + ", title: " + item.title + ", price: " + item.price);
    }
    return content.join('\n');
  },

<<<<<<< HEAD
  inventoryValue: function(store){
    var total = 0;
    for(var item of store.inventory){
      total += item.stock*item.price;
    }
    return total;
  },

  report: function(store){
    return "" + store.name + " store: REPORT\nBalance: £" + store.balance + "\nInventory Value: £" + this.inventoryValue(store);
  }

=======
>>>>>>> a67685fc77aee2ff14ec2831ef45466189f9d398
};

module.exports = StoreManager;