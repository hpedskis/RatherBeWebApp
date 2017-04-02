const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Rather = mongoose.model('Rather');
const Plan = mongoose.model('Plan');



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
  res.render('index');
});

//new eat, new visit, new watch, new random etc
router.post('/new/rather/general', function(req, res, next){
  if(req.body.type === 'food'){
      res.redirect('/new/food');
  }else if (req.body.type === 'visit'){
      res.redirect('/new/visit');

  }else if (req.body.type === 'watch'){
      res.redirect('/new/watch');

  }else if (req.body.type === 'random'){
      res.redirect('/new/random');

  }
});

router.get('/new/food', function(req, res, next) {
  console.log('inside get /new/food boutta DISPLAY IT');
    res.render('food');
});

router.get('/new/visit', function(req, res, next) {
    res.render('visit');
});

router.get('/new/watch', function(req, res, next) {
    res.render('watch');
});

router.get('/new/random', function(req, res, next) {
    res.render('index', { title: 'I\'d Rather Be... '});
});

module.exports = router;
