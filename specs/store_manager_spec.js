var is = require('assert');
var Record = require('../record');
var RecordStore = require('../record_store');
var StoreManager = require('../store_manager');

describe("StoreManagerTest", function(){
  var store1;
  var record1;
  var record2;
  beforeEach("Setup", function(){
      store1 = new RecordStore("XXX", "Los Angeles");
      record1 = new Record("Madonna", "Like A Prayer", 20, 10);
      record2 = new Record("Nirvana", "In Utero", 25, 10);
      store1.add(record1);
      store1.add(record2);
      store1.sell(record1);
      store1.sell(record2);
    }),
  xit("should list the inventory", function(){
    is.equal("artist: Madonna, title: Like A Prayer, price: 20\nartist: Nirvana, title: In Utero, price: 25\n",store1.showInventory());
    console.log(store1.showInventory())
  })

  xit("should report on balance and inventory value", function(){
    is.equal("")
  })
});


