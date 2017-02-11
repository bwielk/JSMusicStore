var is = require('assert');
var RecordStore = require('../record_store');
var Record = require('../record');

describe("RecordStoreTest", function(){
  var store1;
  var record1;
  var record2;
  beforeEach("Setup", function(){
      store1 = new RecordStore("XXX", "Los Angeles");
      record1 = new Record("Madonna", "Like A Prayer", 20, 11, "gbh456");
      record2 = new Record("Nirvana", "In Utero", 25, 12, "mnb098");
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
  it("should sell records and update balance", function(){
    store1.sell(record1);
    store1.sell(record2);
    store1.sell(record2);
    is.equal(70, store1.balance);
  }),
  it("should decrease stock after sales", function(){
    store1.sell(record1);
    store1.sell(record2);
    store1.sell(record2);
    is.equal(record1.stock, 10);
    is.equal(record2.stock, 10);
  }),

  it("should inform that the record is out of stock", function(){
    var record3 = new Record("David Bowie", "Aladin Sane", 30, 2);
    store1.sell(record3);
    store1.sell(record3);
    is.equal("Out of stock!", store1.sell(record3));
  })
});