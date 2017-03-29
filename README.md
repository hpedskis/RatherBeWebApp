The content below is an example project proposal / requirements document. Replace the text below the lines marked "__TODO__" with details specific to your project. Remove the "TODO" lines.

# I'd Rather Be...

## Overview

A place to keep track of all the things you'd rather be doing, eating, or seeing than whatever you're currently doing!
'I'd Rather Be' is a convenient place to view all the things that you once dreamed of. You can also categorize them,
explain why you're not fulfilling the dream, and plan a way to make that dream a reality.

## Data Model

The application will store Users, Lists and Items

* 'rathers' can be created
* 'rathers' can have a plan

(_sample documents_)

An Example 'Rather':

```javascript
{
  type: "be eating", //this is an object
  thing: "steak",
  date:  3/29/17 //day that they created the rather
  reason: "no money" //this is another object
  plan: Plan

}
```

An Example Plan Item:

```javascript
{
  plan: "I'm going to go get a job and make the money so I can afford that steak"
  goalDate: day when they hope to have the plan completed
}
```


## [Link to Commented First Draft Schema](db.js)


## Wireframes
Home Page of "I'd Rather Be..."
![Alt text](/documentation/Home_page.jpg?raw=true "Home page")
Creating a new Rather...
![Alt text](/documentation/New_Rather.jpg?raw=true "Creating a new Rather")
Page to display all Rathers...
![Alt text](/documentation/Rather_Page.jpg?raw=true "Page to display all Rathers")


## Site map

Home page -----------> new Rather form
           or----------->  page of all Rathers

new Rather form ---------> specified new Rather page, depending on category --------> page of all rathers

page of all rathers ---------> new Rather form


## User Stories or Use Cases

1. as someone entering the website, I can see the homepage, a form to create a rather
2. as someone entering the website, I can follow the form to create a rather, selecting different categories
3. as someone entering the website, I can create a plan to fulfil my rather
4. as someone entering the website, I can easily navigate to see all previously created rathers
5. as someone entering the website, I can click to create a rather from the page viewing all rathers



## Research Topics

* (6 points) Use AngularJS
    * I'm going to follow some tutorials and learn Angular 2 and integrate it
    *I'm not sure exactly where I'll use it yet, but I need to learn Angular for my summer internship
      so I will for sure do this!

* (3 points) Unit Testing with JS
    * will use Mocha to create unit tests

9 points total out of 8 required points


## [Link to Initial Main Project File](app.js) 

## Annotations / References Used

(_list any tutorials/references/etc. that you've based your code off of_)
1. for Learning Angular 2: http://campus.codeschool.com/courses/accelerating-through-angular/level/1/section/1/first-component
