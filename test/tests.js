const app = require("../app.js");
const mongoose = require("mongoose");
//mongoose.connect('mongodb://localhost/hw05');
const Rather = mongoose.model('Rather');
const User = mongoose.model('User');

const request = require("request"),
    assert = require('assert'),
    base_url = "http://localhost:3000/";

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);


describe("Get Homepages Test", function(){
    describe("GET /", function() {

        it("returns status code 200", function() {
            request.get(base_url, function(error, response, body) {
                console.log('inside test 1', response.statusCode);
                assert.equal(200, response.statusCode);
                done();

            });

        });

    });

    describe("GET /login", function(){

        it("returns status code 200", function(){
            request.get("http://localhost:3000/login", function(error, response, body){
                //console.log(error);
                assert.equal(200, response.statusCode);
                done();
            });
        });
    });

    describe("GET /register", function(){

        it("returns status code 200", function(){
            request.get("http://localhost:3000/register", function(error, response, body){
                //console.log(error);
                assert.equal(200, response.statusCode);
                done();
            });
        });
    });

});

describe("Require Login For Rather Creation", function(){
    describe("GET /new/rather/general", function() {

        it("re-routes to login page", function() {
            request.get("http://localhost:3000/new/rather/general", function(error, response, body) {
                console.log('inside test 2', response.message);
                assert.equal('to make a new rather, you must have an account', response.message);
                done();

            });

        });

    });

});

describe("Rathers should be correctly saved", function(){

    it('should be able to find the rather in the database', function(done){
        let rather = new Rather({

            type: "food",
            what: "tacos",
            reason: "no  money",
            plan: "not eat tacos"

        }).save(function(err, rather){
            console.log('making new rather');

            if(!err){
                done();
            }else{
                console.log(err);
            }

        });
        Rather.findOne({plan: 'not eat tacos'}, function(err, rather){
            assert.equal('tacos', rather.what);
        });
    });
});

/*/

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
    /*/