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
      console.log(customer1);
      is.equal("Nirvana", customer1.getRecord("xyz123").artist);
    }),

    it("should update the stock of a record after customer's purchase of the record", function() {
      customer1.boughtItems = [];
      customer1.buy(record2, store1);
      var item = customer1.boughtItems[0];
      is.equal(1, item.stock);
    }),

    xit("should be able to update price of bought item", function(){
      customer1.setPrice(item, 10);
      var item = customer1.getProduct(item);
      is.equal(10, item.price);
    }),

    xit("should be able to sell items and update funds", function(){
      customer1.sell(record1);
      is.equal(90, customer1.funds);
    }),

    it("shoulnd't be able to buy a record if he cannot afford it", function(){
      customer1.setFunds(10);
      is.equal("You cannot afford to buy this item", customer1.buy(record2, store1));
    })
});
