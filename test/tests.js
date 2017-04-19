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

describe("Require Login For Rather Creation", function(){
    describe("GET /new/rather/general", function() {

        it("re-routes to login page", function() {
            request.get(base_url + 'new/rather/general', function(error, response, body) {
                assert.equal('to make a new rather, you must have an account', response.message);
                done();

            });

        });

    });

});

describe("selecting different types of rathers should lead to different re-routes", function(){
    describe("GET /new/rather/general", function() {

        it("re-routes to new/food if food is selected", function() {
            request.get(base_url + 'new/rather/general', function(error, response, body) {
                if(body.type === 'food'){
                    assert.equal('to make a new rather, you must have an account', response.url);
                }
                assert.equal('to make a new rather, you must have an account', response.message);
                done();

            });

        });

    });

});