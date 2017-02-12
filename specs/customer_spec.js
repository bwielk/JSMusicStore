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
      var item = customer1.getRecord('xyz123');
      is.equal(1, item.stock);
    }),

    it("should be able to update price of bought item", function(){
      customer1.setFunds(100)
      customer1.buy(record2, store1);
      customer1.setPrice('xyz123', 10);
      var item = customer1.getRecord('xyz123');
      is.equal(10, item.price);
    }),

    it("should be able to sell items and update funds", function(){
      customer1.setFunds(80);
      customer1.sell(record1);
      is.equal(100, customer1.funds);
    }),

    it("shoulnd't be able to buy a record if he cannot afford it", function(){
      customer1.setFunds(10);
      is.equal("You cannot afford to buy this item", customer1.buy(record2, store1));
    })
});
