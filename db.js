const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const URLSlugs = require('mongoose-url-slugs');

// my schema goes here!


const Rather = new Schema({
    type: String,
    what: String,
    date: Date,
    reason: String,
    plans: String

});

const User = new Schema({
    username: {type: String, unique: true},
    password: String,
    rathers: [Rather]
});



mongoose.model('Rather', Rather);
mongoose.model('User', User);

// is the environment variable, NODE_ENV, set to PRODUCTION?
if (process.env.NODE_ENV == 'PRODUCTION') {
    // if we're in PRODUCTION mode, then read the configration from a file
    // use blocking file io to do this...
    var fs = require('fs');
    var path = require('path');
    var fn = path.join(__dirname, 'config.json');
    var data = fs.readFileSync(fn);

    // our configuration file will be in json, so parse it and set the
    // conenction string appropriately!
    var conf = JSON.parse(data);
    var dbconf = conf.dbconf;
} else {
    // if we're not in PRODUCTION mode, then use
    dbconf = 'mongodb://localhost/hw05';
}


mongoose.connect(dbconf);