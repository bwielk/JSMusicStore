var is = require('assert');
var RecordStore = require('../record_store');
var Record = require('../record');

describe("RecordStoreTest", function(){
  var store1;
  beforeEach("Setup", function(){
      store1 = new RecordStore("XXX", "Los Angeles");
      record1 = new Record("Madonna", "Like A Prayer", 20);
      record2 = new Record("Nirvana", "In Utero", 25);

    }),
  it("should have name", function(){
    is.equal("XXX", store1.name);
  }),
  it("should have city", function(){
    is.equal("Los Angeles", store1.city);
  }),
  it("should have empty inventory", function(){
    is.equal(0, store1.inventory.length);
  }),
  it("should have balance 0", function(){
    is.equal(0, store1.balance);
  }),
  it("should be able to add records to the inventory", function(){
    store1.add(record1);
    store1.add(record2);
    is.equal(2, store1.inventory.length);
  }),
  xit("should list the inventory", function(){
    is.equal("artist: Madonna, title: Like A Prayer, price: 20\nartist: Nirvana, title: In Utero, price: 25\n",store1.showInventory());
    console.log(store1.showInventory())
  })
});