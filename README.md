# Note Taker
Challenge 11 Bootcamp

## Purpose
Create an app that is able to write and save notes so that a user can organize thougts and keep track of tasks.

## Website Functionality/Class Criteria Met

WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column


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

## Repository
https://github.com/ryanmuhl/note-taker

## Heroku 
https://rocky-inlet-13595.herokuapp.com/

## Contribution
Created/Designed by Ryan M. Uhl
Assistance: Daniel Ringenbach (Tutor)

Email: ryanmuhl@hotmail.com