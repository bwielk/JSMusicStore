var is = require('assert');
var Record = require('../record');

describe('RecordTest', function(){
  var cd1;
  beforeEach("Setup", function(){
    cd1 = new Record("Eva Cassidy", "Songbird", 10);
  }),
  it("should have artist", function(){
    is.equal("Eva Cassidy", cd1.artist);
  }),
  it("should have title", function(){
    is.equal("Songbird", cd1.title);
  }),
  it("should have price", function(){
    is.equal(10, cd1.price);
  });
});