var is = require('assert');
var Record = require('../record');
var RecordStore = require('../record_store');
var StoreManager = require('../store_manager');

describe("StoreManagerTest", function(){
  var store1;
  var record1;
  var record2;
<<<<<<< HEAD
  var record3;
  var manager;
  beforeEach("Setup", function(){
      manager = new StoreManager();
      store1 = new RecordStore("XXX", "Los Angeles");
      record1 = new Record("Madonna", "Like A Prayer", 20, 11);
      record2 = new Record("Nirvana", "In Utero", 25, 11);
      record3 = new Record("David Bowie", "Aladin Sane", 30, 2);
      store1.add(record1);
      store1.add(record2);
      store1.add(record3);
      store1.sell(record1);
      store1.sell(record2);
    }),

  xit("should list the inventory", function(){
    is.equal("artist: Madonna, title: Like A Prayer, price: 20\nartist: Nirvana, title: In Utero, price: 25\n",manager.showInventory(store1));
    console.log(store1.showInventory());
  }),

  it("should calculate the inventory value", function(){
    is.equal(510, manager.inventoryValue(store1));
  }),

  it("should report on the financial situation of the store", function(){
    is.equal("XXX store: REPORT\nBalance: £45\nInventory Value: £510", manager.report(store1));
    console.log(manager.report(store1));
=======
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
>>>>>>> a67685fc77aee2ff14ec2831ef45466189f9d398
  })
});


