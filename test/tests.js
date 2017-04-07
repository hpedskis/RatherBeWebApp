const app = require("../app.js");
const mongoose = require("mongoose");
const request = require("request"),
    assert = require('assert'),
    base_url = "http://localhost:3000/";

describe("Get Homepage Test", function(){
    describe("GET /", function() {

        it("returns status code 200", function() {
            request.get(base_url, function(error, response, body) {
                assert.equal(200, response.statusCode);
                done();

            });

        });

    });

});
