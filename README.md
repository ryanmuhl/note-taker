# Note Taker
Challenge 11 Bootcamp

## Purpose
Create an app that is able to write and save notes so that a user can organize thougts and keep track of tasks.

## Website Functionality/Class Criteria Met

* When Note Taker is open,  the user is presented with a landing page with a link to the notes page
* The user is presented with a page with existing notes listed in the left-hand column, plus emty fields to enter a new note title and the note's text in the right-hand column
* When the user enters a new note title and note text, the user can click on the save icon.
* The new note saved by the user will appear in the left-hand colum with existing notes. (Displayed by Title)
* When a note in the left hand list is selected,  that note title and text will re populte in the right hand column.  Accomplished by creating and assigning a unique id to each note.  Done by exporting a function that generates a string of random numbers and letters located in the helpers folder.
* When the write icon is then selected at the top of the page,  the note field will clear and allow the user to type in notes in the right column.
*  !!!Bonus!!!!  When the delete icon is selected next to a note,  that note is then removed from the right hand column as well as removed from the db.json file.  Accomplished by exporting a function that generates a string of random numbers and letters located in the helpers folder.  Assigning each note a unique id.  The notes then can be deleted by targeting unique id.


## Challenges
* Main challenge for this assignment was organizing the folders.  Integrating all the files and their functions proved to be a difficult task.

## Built With
* Node.JS
* Express.JS package
* JavaScript
* HTML
* CSS
* Bootstrap
* Font Awesome

## Installation/Run instructions
* npm init (Terminal)
* npm install (Terminal)
* npm install express (Terminal)

* to run server type node server.js in terminal
* type http://localhost:3001 into browser to start at index page.  Select link to go to notes page.

## Repository
https://github.com/ryanmuhl/note-taker

## Heroku 
https://rocky-inlet-13595.herokuapp.com/

## Contribution
Created/Designed by Ryan M. Uhl
Assistance: Daniel Ringenbach (Tutor)

Email: ryanmuhl@hotmail.com