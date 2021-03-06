var is = require('assert');
var Record = require('../record');
var RecordStore = require('../record_store');
var StoreManager = require('../store_manager');

describe("StoreManagerTest", function(){
  var store1;
  var record1;
  var record2;
  var record3;
  var manager;

  beforeEach("Setup", function(){
      manager = new StoreManager();
      store1 = new RecordStore("XXX", "Los Angeles");
      record1 = new Record("Madonna", "Like A Prayer", 20, 11, "cvb123");
      record2 = new Record("Nirvana", "In Utero", 25, 11, "asd345");
      record3 = new Record("David Bowie", "Aladin Sane", 30, 2, "qwe123");
      store1.add(record1);
      store1.add(record2);
      store1.add(record3);
      store1.sell(record1);
      store1.sell(record2);
    }),

  it("should list the inventory", function(){
    is.equal("artist: Madonna, title: Like A Prayer, price: 20, stock: 10\nartist: Nirvana, title: In Utero, price: 25, stock: 10\nartist: David Bowie, title: Aladin Sane, price: 30, stock: 2", manager.showInventory(store1));
  }),

  it("should calculate the inventory value", function(){
    is.equal(510, manager.inventoryValue(store1));
  }),

  it("should report on the financial situation of the store", function(){
    is.equal("XXX store: REPORT\nBalance: £45\nInventory Value: £510", manager.report(store1));
  })
});


