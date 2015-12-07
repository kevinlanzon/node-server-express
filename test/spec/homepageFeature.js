var chai = require('chai');
var expect = chai.expect;

describe('homepage', function() {

  it('hello worlds', function(done) {
    browser
      .url('http://localhost:3000')
      .getText('body', function(err, text) {
        expect(text).to.equal('"Hello world"');
      })
      .call(done);
  });
});

describe('page 1', function(){

  it('has content page 1', function(done){
    browser
    .url('http://localhost:3000/page1')
    .getText('body', function(err, text) {
      expect(text).to.equal('page 1');
    })
    .call(done);
  });

 it('has a page title', function(done){
    browser
    .url('http://localhost:3000/page1')
    .title(function(err, response) {
      expect(response.value).to.equal('title');
    })
    .call(done);
  });
});