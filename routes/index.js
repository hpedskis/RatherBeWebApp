const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Rather = mongoose.model('Rather');
const User = mongoose.model('User');

const pics = ['/images/food_1.gif', '/images/food_2.gif', '/images/rando_1.gif', '/images/visit_1.gif', '/images/watch_1.gif',
    '/images/watch_2.gif', '/images/random2.gif', '/images/random3.gif', '/images/random4.gif'];


/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.user){
        console.log('session username is ' + req.user.username);
        res.render('homepage', {user: req.user});
    }else{
        res.render('homepage');
    }

});

router.get('/register', function(req, res, next) {
    res.render('register');
});


router.post('/register', function(req, res) {
    console.log(req.body.username);
    User.register(new User({username:req.body.username}),
        req.body.password, function(err, user){
            if (err) {
                // NOTE: error? send message back to registration...
                console.log(err);
                res.render('register',{message:'Your registration information is not valid'});
            } else {
                // NOTE: once you've registered, you should be logged in automatically
                // ...so call authenticate if there's no error
                passport.authenticate('local')(req, res, function() {
                    res.render('index', {user: user});
                });
            }
        });
});


//login to account
router.get('/login', function(req, res, next) {
    res.render('login');
});

router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err,user) {
        if(user) {
            // NOTE: using this version of authenticate requires us to
            // call login manually
            req.logIn(user, function(err) {
                res.redirect('/new/rather/general');
            });
        } else {
            res.render('login', {message:'Your login or password is incorrect.'});
        }
    })(req, res, next);

});

//new eat, new visit, new watch, new random etc
router.post('/new/rather/general', function(req, res, next){
    console.log("inside POST new/rather/general");
    console.log(req.user);
        if(req.user) {
            // NOTE: using this version of authenticate requires us to
            // call login manually
            console.log("yes inside ");
                if (req.body.type === 'food') {
                    res.redirect('/new/food');
                } else if (req.body.type === 'visit') {
                    res.redirect('/new/visit');

                } else if (req.body.type === 'watch') {
                    res.redirect('/new/watch');

                } else if (req.body.type === 'random') {
                    res.redirect('/new/random');

                }

        } else {
            res.redirect('/login', {message:'to make a new rather, you must have an account'});
        }



});

router.get('/new/rather/general', function(req, res, next){
    console.log('inside GET new/rather/general');
        if(req.user) {
            console.log(req.user);
            res.render('index', {user: req.user});

        } else {
            console.log('error');
            res.render('login', {message:'to make a new rather, you must have an account'});
        }

});


router.get('/new/food', function(req, res, next) {
    if(req.user){
        res.render('food');

    } else {
        res.render('error', {message: 'UH-OH... to make a new rather, you must have an account'});
    }

});

router.post('/new/food', function(req, res, next) {
    console.log('inside POST /new/food boutta POST IT');
        console.log(req.user);
        console.log('**name of food is: ' + req.body.what);
        User.findOne({username: req.user.username}, function (err, user) {
            new Rather({
                type: "food",
                what: req.body.what,
                reason: req.body.reason,
                plan: req.body.plan

            }).save(function (err, rather) {
                console.log('just saved and session username is  ' + user.username);
                if (err) {
                    console.log(err);
                }
                user.rathers.push(rather);
                user.save((err, user) => {
                    console.log("just saved");
                    res.redirect("/rathers");

                });
            });

        });

});

router.get('/new/visit', function(req, res, next) {
    if(req.user){
        res.render('visit');

    } else {
        res.render('error', {message: 'UH-OH... to make a new rather, you must have an account'});
    }
});

router.post('/new/visit', function(req, res, next) {
    console.log('inside POST /new/visit boutta POST IT');
    console.log(req.user);
    console.log('**name of place is: ' + req.body.what);
    User.findOne({username: req.user.username}, function(err, user){
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
    if(req.user){
        res.render('watch');

    } else {
        res.render('error', {message: 'UH-OH... to make a new rather, you must have an account'});
    }
});

router.post('/new/watch', function(req, res, next) {
    console.log('inside POST /new/watch boutta POST IT');
    console.log(req.user);
    console.log('**name of thing to watch is: ' + req.body.what);
    User.findOne({username: req.user.username}, function(err, user){
        new Rather({
            type: "watch",
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

router.get('/new/random', function(req, res, next) {
    if(req.user){
        User.findOne({username: req.user.username}, function(err, user) {
            let picNum = Math.floor((Math.random() * 8));
            new Rather({
                type: "random",
                what: pics[picNum],
                reason: "gotta escape life",
                plan: "Don't need one"

            }).save(function (err, rather) {
                user.rathers.push(rather);
                user.save((err, user) => {
                    console.log("just saved");
                    res.redirect("/rathers");

                });
            });
        });
    }else{
        res.render('error', {message: 'you must login!'});
    }

});




router.get('/rathers',function(req, res, next) {
    if(req.user) {
        console.log(req.user);
        User.findOne({username: req.user.username}, function (err, user) {
            console.log("inside user trying to find rathers");
            //create an array for each type of rather to organize based on that?
            let food = [];
            let visit = [];
            let watch = [];
            let random = [];
            food = user.rathers.filter((ele)=>{
                if(ele.type === 'food'){
                    return ele;
                }
            });
            visit = user.rathers.filter((ele)=>{
                if(ele.type === 'visit'){
                    return ele;
                }
            });
            watch = user.rathers.filter((ele)=>{
                if(ele.type === 'watch'){
                    return ele;
                }
            });
            random = user.rathers.filter((ele)=>{
                if(ele.type === 'random'){
                    return ele;
                }
            });
            /*/
            user.rathers.forEach((ele)=>{
                if(ele.type === 'food'){
                    food.push(ele);
                } else if(ele.type === 'visit'){
                    visit.push(ele);
                } else if(ele.type === 'watch'){
                    watch.push(ele);
                }else{
                    random.push(ele);
                }
            });
            /*/
            res.render('rathers', {foodRather: food, visitRather: visit, watchRather: watch, randomRather: random});
        });
    }else{
        res.render('error', {message: 'looks live you\'ve been logged out!'});
    }
});

module.exports = router;
