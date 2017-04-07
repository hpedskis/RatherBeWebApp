The content below is an example project proposal / requirements document. Replace the text below the lines marked "__TODO__" with details specific to your project. Remove the "TODO" lines.

# I'd Rather Be...

## Overview

A place to keep track of all the things you'd rather be doing, eating, or seeing than whatever you're currently doing!
'I'd Rather Be' is a convenient place to view all the things that you once dreamed of. You can also categorize them,
explain why you're not fulfilling the dream, and plan a way to make that dream a reality.

## Data Model

The application will store Users and Rathers that the User has created

* 'rathers' can be created
* 'users' have a list of 'rathers'

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

An Example User Item:

```javascript
{
  username: dreamer_hannah_05
  password: idratherbe
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

Home page -----------> Login
           or----------->  Register
Login/Register --------> new Rather form
            hyperlink to --------> page of their previously made rathers

new Rather form ---------> specified new Rather page, depending on category --------> page of all rathers

page of all rathers ---------> new Rather form


## User Stories or Use Cases

1. as someone entering the website, I can login or register to create an account
2. as a user, I can follow the form to create a rather, selecting different categories
3. as a user, I can create a plan to fulfil my rather
4. as a user, I can easily navigate to see all previously created rathers
5. as a user, I can click to create a rather from the page viewing all rathers



## Research Topics

* (5 points) User authentication
    * will have login and registration
    * passwords will be salted and hashed 
    * rathers will only be able to be seen after login

* (3 points) Unit Testing with JS
    * will use Mocha to create unit tests

8 points total out of 8 required points


## [Link to Initial Main Project File](app.js) 

## Annotations / References Used

