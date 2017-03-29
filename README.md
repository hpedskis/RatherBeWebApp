The content below is an example project proposal / requirements document. Replace the text below the lines marked "__TODO__" with details specific to your project. Remove the "TODO" lines.

(_your project name_)

# I'd Rather Be...

## Overview

(_a brief one or two paragraph, high-level description of your project_)
A place to keep track of all the things you'd rather be doing, eating, or seeing than whatever you're currently doing!
'I'd Rather Be' is a convenient place to view all the things that you once dreamed of. You can also categorize them,
explain why you're not fulfilling the dream, and scheme a way to make that dream a reality.

## Data Model

(_a description of your application's data and their relationships to each other_)

The application will store Users, Lists and Items

* 'rathers' can be created
* 'rathers' can have a scheme/plan (by embedding)

(_sample documents_)

An Example 'Rather':

```javascript
{
  type: "be eating", //this is an object
  thing: "steak",
  date:  3/29/17 //day that they created the rather
  reason: "no money" //this is another object

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

(_above is a link to the first draft of my Schemas in db.js_)

## Wireframes
Home Page of "I'd Rather Be..."
![Alt text](/documentation/Home_page.jpg?raw=true "Home page")
Creating a new Rather...
![Alt text](/documentation/New_Rather.jpg?raw=true "Creating a new Rather")
Page to display all Rathers...
![Alt text](/documentation/Rather_Page.jpg?raw=true "Page to display all Rathers")


## Site map

(_draw out a site map that shows how pages are related to each other_)

Here's a [complex example from wikipedia](https://upload.wikimedia.org/wikipedia/commons/2/20/Sitemap_google.jpg), but you can create one without the screenshots, drop shadows, etc. ... just names of pages and where they flow to.

## User Stories or Use Cases

(___TODO__: write out how your application will be used through [user stories](http://en.wikipedia.org/wiki/User_story#Format) and / or [use cases](https://www.mongodb.com/download-center?jmp=docs&_ga=1.47552679.1838903181.1489282706#previous)_)

1. as someone entering the website, I can see the homepage, a form to create a rather
2. as someone entering the website, I can click a link to instead see all previously created rathers
3. as someone entering the website, I can follow the form to create a rather, selecting different categories
4. as someone entering the website, I can create a plan to fulfil my rather
5. as someone entering the website, I can click on one rather to see it in detail

## Research Topics

(___TODO__: the research topics that you're planning on working on along with their point values... and the total points of research topics listed_)

* (6 points) Use AngularJS
    * I'm going to follow some tutorials and learn Angular 2 and integrate it
    *I'm not sure exactly where I'll use it yet, but I need to learn Angular for my summer internship
        so I will for sure do this!
* (3 points) Unit Testing with JS
    * will use Mocha to create unit tests

9 points total out of 8 required points


## [Link to Initial Main Project File](app.js) 

(___TODO__: create a skeleton Express application with a package.json, app.js, views folder, etc. ... and link to your initial app.js_)

## Annotations / References Used

(_list any tutorials/references/etc. that you've based your code off of_)
1. for Learning Angular 2: http://campus.codeschool.com/courses/accelerating-through-angular/level/1/section/1/first-component
