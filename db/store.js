//require fs node module to allow interaction with file system
const fs = require("fs");

//require util module 
const util = require("util")

//require uuid module to create unique ID's
const uuid = require('../helpers/uuid');

//promisify fs.readFile and fs.writeFile using Node util module
const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile);

//Create Store Class (with read, write, getNotes, addNote, removeNote methods)
class Store {
    read() {
        //read read from db.json file
        return readFileAsync("db/db.json", "utf-8")

    }
        //write to db.json file
    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note));
    }
       //read and return notes.  If error return empty array or existing notes.
    getNotes() {
        return this.read().then((notes) => {
            let parsedNotes
             try {
                parsedNotes = [].concat(JSON.parse(notes))
             }
             catch(err) {
                parsedNotes = []
             }
             return parsedNotes
        })
    }
    //add notes
    addNote(note) {
        const {title, text} = note

        if( !title || !text) {
            throw new Error("Error Need Text")
        }
        const newNote = {title, text, id: uuid()}

        return this.getNotes()
        .then(notes => [...notes, newNote])
        .then(allNotes =>{
            this.write(allNotes)
            return allNotes
        })
       
        

    }

    //remove notes
    removeNote(id) {
        return this.getNotes()
            .then(notes => notes.filter(note => note.id !== id))
            .then(remainingNotes => this.write(remainingNotes))
    }


    
} 

//export store class
module.exports = new Store()

