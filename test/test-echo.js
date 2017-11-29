var daburuJsNpm = require("../dist/index.js");
var expect = require("chai").expect;

describe("Test the echo() function.", function(){
    describe("Call echo() with no parameters. Get an empty string.", function(){
        it("returns an empty string", function(){
            var response = daburuJsNpm.echo();
            expect(response).to.equal('');
        });
    });
    describe("Call echo() without the 'loud' parameter. Get the original string.", function(){
        it("returns the original string", function(){
            var response = daburuJsNpm.echo('testing');
            expect(response).to.equal('testing');
        });
    });
    describe("Call echo() with the 'loud' parameter true.  Get the loud string.", function(){
        it("returns the original string, but louder", function(){
            var response = daburuJsNpm.echo('testing', true);
            expect(response).to.equal('TESTING');
        });
    });
});