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

};

module.exports = StoreManager;