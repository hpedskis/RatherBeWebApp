const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const URLSlugs = require('mongoose-url-slugs');

// my schema goes here!
const Type ={
    'food' : { name: "be eating", image: '/public/images/food_1.gif'},
    'visit': {name: "be visiting", image: '/public/images/visit_1.gif'},
    'watch' : {name: "be watching", image: '/public/images/watch_1.gif'},
    'random': {name: "be entertained?",  image: '/public/images/rando_1.gif'}
};

const Reason = {
    'money' : {name: "I don't have the money", display: "short on cash"},
    'health': {name: "I'm working on my bod' ", display: "workin' on that bod"},
    'transportation': {name: "No transportation", display: "travel is hard"},
    'obligations' : {name: "I have real things to do", display: 'other things need my time'}
};

const Rather = new Schema({
    type: Type,
    what: String,
    date: Date,
    reason: String,
    plan: Plan

});

const Plan = new Schema({
    plan: String,
    goalDate: Date
});


Link.plugin(URLSlugs('title'));

mongoose.model('Rather', Rather);
mongoose.model('Plan', Plan);

mongoose.connect('mongodb://localhost/hw05');