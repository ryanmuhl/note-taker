const { randomUUID } = require("crypto");
const fs = require("fs");
const util = require("util")

//promisify f.sreadFile and fs.writeFile using Node util method
const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile);

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
        const newNote = {title, text}

        return this.getNotes()
        .then(notes => [...notes, newNote])
        .then(updatedNotes =>{
            this.write(updatedNotes)
            return updatedNotes
        })
       
        

    }

    
    removeNote() {


    }


    
} 

module.exports = new Store()

