const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Rather = mongoose.model('Rather');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');


const Type ={
    'food' : {name: "be eating", image: '/public/images/food_1.gif'},
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


/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.session.user){
        console.log('session username is ' + req.session.username);
        res.render('homepage', {user: req.session.user});
    }else{
        res.render('homepage');
    }

});

router.get('/register', function(req, res, next) {
    res.render('register');
});

router.post('/register', function(req, res, next) {
    if(req.body.password.length < 8){
        console.log("password less thant 8 characters");
        res.render('register', {message: "your password needs to be longer than 8 characters!"});
    }
    User.findOne({username: req.body.username}, function(err, user){
        if(user){
            res.render('error', {message: "you're already registered!"});
        }
    });
    //at this point, we know the password is correct and the user is not registered.
    const saltRounds = 10;
    const myPlaintextPassword = req.body.password;
    bcrypt.genSalt(saltRounds, function(err, salt) {
        if(err){
            console.log("erros making salt");
        }
        bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
            if(err){
                console.log("errors making hash");
            }
            // Store hash in your password DB.
            new User({
                username: req.body.username,
                password: hash
            }).save(function(err, user){
                if(err){
                    res.render('error', {message: "something went wrong with registration"});
                }else {
                    req.session.regenerate((err) => {
                        if (!err) {
                            req.session.user = user;
                            console.log('user is now ' + user);
                            req.session.username = user.username;
                        } else {
                            console.log('error');
                            res.send('an error occurred, please see the server logs for more information');
                        }
                        res.render('index', {user: user});
                    });
                }

            })
        });
    });

});

//login to account
router.get('/login', function(req, res, next) {
    res.render('login');
});

router.post('/login', function(req, res, next) {
    User.findOne({username: req.body.username}, function(err, user){
        if(!err && user){
            bcrypt.compare(req.body.password, user.password, function(err, passwordMatch) {
                // passwordMatch will be true if it was a correct login, false if otherwise
                if(passwordMatch === true){
                    req.session.regenerate((err) => {
                        if (!err) {
                            req.session.user = user;
                            console.log('user is now ' + user);
                            req.session.username = user.username;
                            console.log('setting session user name to ' + user.username);
                            res.render('index', {user: user});
                        } else {
                            console.log('error');
                            res.render('an error occurred, please see the server logs for more information');
                        }
                    });
                }else{
                    res.render('error', {message: "password was not correct"});
                }
            });
        } else{
            res.render('error', {message: "something went wrong with the login!"});
        }
    });
});



//new eat, new visit, new watch, new random etc
router.post('/new/rather/general', function(req, res, next){
    if(req.session.user) {
        if (req.body.type === 'food') {
            res.redirect('/new/food');
        } else if (req.body.type === 'visit') {
            res.redirect('/new/visit');

        } else if (req.body.type === 'watch') {
            res.redirect('/new/watch');

        } else if (req.body.type === 'random') {
            res.redirect('/new/random');

        }
    }else{
        res.render('error', {message: "to make a new rather, you must have an account"});
    }

});

router.get('/new/rather/general', function(req, res, next){
    if(req.session.user){
        res.render('index', {user: req.session.user});
    }else{
        res.render('error', {message: "to make a new rather, you must have an account"});
    }
});


router.get('/new/food', function(req, res, next) {
    if(req.session.user){
        res.render('food', {user: req.session.user});
    }else{
        res.render('error', {message: "UH-OH... to make a new rather, you must have an account"});
    }

});

router.post('/new/food', function(req, res, next) {
    console.log('inside POST /new/food boutta POST IT');
    console.log(req.session.user);
    console.log('**name of food is: ' + req.body.what);
    User.findOne({username: req.session.username}, function(err, user){
        new Rather({
            type: "food",
            what: req.body.what,
            reason: req.body.reason,
            plan: req.body.plan

        }).save(function(err, rather){
            console.log('just saved and session username is  ' + user.username);
            if(err){
                console.log(err);
            }
            user.rathers.push(rather);
            user.save((err, user) =>{
                console.log("just saved");
                res.redirect("/rathers");

            });
        });

    });

});

router.get('/new/visit', function(req, res, next) {
    if(req.session.user){
        res.render('visit', {user: req.session.user});
    }else{
        res.render('error', {message: "UH-OH... to make a new rather, you must have an account"});
    }
});

router.post('/new/visit', function(req, res, next) {
    console.log('inside POST /new/food boutta POST IT');
    console.log(req.session.user);
    console.log('**name of place is: ' + req.body.what);
    User.findOne({username: req.session.username}, function(err, user){
        new Rather({
            type: "visit",
            what: req.body.what,
            reason: req.body.reason,
            plan: req.body.plan

        }).save(function(err, rather){
            console.log('just saved and session username is  ' + user.username);
            if(err){
                console.log(err);
            }
            user.rathers.push(rather);
            user.save((err, user) =>{
                console.log("just saved");
                res.redirect("/rathers");

            });
        });

    });

});

router.get('/new/watch', function(req, res, next) {
    if(req.session.user){
        res.render('watch', {user: req.session.user});
    }else{
        res.render('error', {message: "UH-OH... to make a new rather, you must have an account"});
    }
});

router.get('/new/random', function(req, res, next) {
    res.render('index', { title: 'I\'d Rather Be... '});
});

router.get('/rathers',function(req, res, next) {
    console.log(req.session.user);
    console.log(req.session.username);
    User.findOne({username: req.session.username}, function (err, user) {
        console.log("inside user trying to find rathers");
        res.render('rathers', {user: user});
    });
});
module.exports = router;
