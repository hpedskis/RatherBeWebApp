const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const URLSlugs = require('mongoose-url-slugs');

// my schema goes here!

const Plan = new Schema({
    plan: String,
    goalDate: Date
});

const Rather = new Schema({
    type: String,
    what: String,
    date: Date,
    reason: String,
    plans: [Plan]

});


mongoose.model('Rather', Rather);
mongoose.model('Plan', Plan);

mongoose.connect('mongodb://localhost/hw05');