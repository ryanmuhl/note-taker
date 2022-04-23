const router = require('express').Router();

const store = require("../db/store");

//within the /notes endpoint, call get notes.  If err dsiplay 500 error status
router.get("/notes", (req, res) => {
    store 
    .getNotes()
    .then((notes) => {
        return res.json(notes)
        
    }).catch((err) => res.status(500).json(err))
})

router.post("/notes",(req,res) => {
    store
        .addNote(req.body)
        .then(note => {
            res.json(note)
        }).catch(err => {
            res.status(500).json(err)
        })

})




module.exports = router;