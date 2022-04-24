//require express module
const router = require('express').Router();

//require db/store directory
const store = require("../db/store");

//get requests for notes.  If err display 500 error status
router.get("/notes", (req, res) => {
    store 
    .getNotes()
    .then((notes) => {
        return res.json(notes)
        
    }).catch((err) => res.status(500).json(err))
})

//post request for notes
router.post("/notes",(req,res) => {
    store
        .addNote(req.body)

        .then((data) => {
            
            res.json(data)
            
        }).catch((err) => res.status(500).json(err))
       

})

//delete request, delete notes by unique id
router.delete('/notes/:id', (req, res) => {
    store
        .removeNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err))
})


module.exports = router;