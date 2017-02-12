var is = require('assert');
var Record = require('../record');
var Customer = require('../customer');
var RecordStore = require('../record_store');

describe("CustomerTest", function(){

  var customer1;
  var store1;
  var record1;
  var record2;
  var record3;

  beforeEach("Setup", function(){
    customer1 = new Customer();
    store1 = new RecordStore("XXX", "Los Angeles");
    record1 = new Record("Madonna", "Like A Prayer", 20, 11, "abc321");
    record2 = new Record("Nirvana", "In Utero", 25, 11, "xyz123");
    record3 = new Record("David Bowie", "Aladin Sane", 30, 2, "zxc098");
    store1.add(record1);
    store1.add(record2);
    store1.add(record3);
  }),

  it("should be able to buy items and store them", function(){
    customer1.setFunds(100);
    customer1.buy(record1, store1);
    customer1.buy(record2, store1);
    is.equal(2, customer1.boughtItems.length);
  }),

  it("should be able to set cash", function(){
    customer1.setFunds(100);
    is.equal(100, customer1.funds);
  }),

  it("should update the stock of an item if the item has already been bought", function(){
    customer1.setFunds(100);
    customer1.buy(record1, store1);
    customer1.buy(record1, store1);
    customer1.buy(record1, store1);
    var item = customer1.getRecord("abc321");
    console.log(customer1);
    is.equal(3, item.stock);
    is.equal(1, customer1.boughtItems.length);
  }),

  it("should be able to check if item exists", function(){
    customer1.setFunds(60);
    customer1.buy(record1, store1);
    customer1.buy(record3, store1);
    is.equal(false, customer1.hasRecord(record2));
    is.equal(true, customer1.hasRecord(record1));
  })

  it("should be able to pay for items and update funds", function(){
    customer1.setFunds(100);
    customer1.buy(record1, store1);
    is.equal(80, customer1.funds);
  }),

  it("should get record by its id", function(){
    customer1.setFunds(100);
    customer1.buy(record1, store1);
    customer1.buy(record2, store1);
    var item = customer1.getRecord("xyz123");
    is.equal("Nirvana", item.artist);
  }),


  it("should pop out a communicate if there is no such item", function(){
    customer1.setFunds(100);
    customer1.buy(record1, store1);
    customer1.buy(record2, store1);
    is.equal("The item doesn't exist", customer1.getRecord("aaaa"));
  })

  it("should update the stock of a record after customer's purchase of the record", function() {
    customer1.setFunds(100);
    customer1.buy(record2, store1);
    var item = customer1.getRecord("xyz123");
    is.equal(1, item.stock);
  }),

  it("should be able to update price of bought item", function(){
    customer1.setFunds(100)
    customer1.buy(record2, store1);
    customer1.setPrice('xyz123', 10);
    var item = customer1.getRecord("xyz123");
    is.equal(10, item.price);
  }),

  it("shoulnd't be able to buy a record if he cannot afford it", function(){
    customer1.setFunds(10);
    is.equal("You cannot afford to buy this item", customer1.buy(record2, store1));
  }),

  it("should be able to sell items and update funds", function(){
    customer1.setFunds(100);
    customer1.buy(record1, store1);
    customer1.buy(record2, store1);
    customer1.setPrice("abc321", 10);
    customer1.sell("abc321");
    is.equal(65, customer1.funds);
  }),

  it("should be able to sell therefore the stock decreases", function(){
    customer1.setFunds(20);
    customer1.buy(record1, store1);
    customer1.sell("abc321");
    var item = customer1.getRecord("abc321");
    is.equal(0, item.stock);
  }),

  it("shouldn't be able to sell if it the item stock equals 0", function(){
    customer1.setFunds(30);
    customer1.buy(record3, store1);
    customer1.sell("zxc098");
    is.equal("You have sold out this record!", customer1.sell("zxc098"));
  })
});
