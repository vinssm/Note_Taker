const router = require('express').Router();
const { notes } = require('../../db/db.json')
const { createNote, deleteNote} = require('../../lib/notes');



router.get('/notes', (req, res) => {
     console.log(notes)
     if (notes) {
         res.send(notes);
     } else {
        res.json(notes);
     }

});

// router.get('/notes', (req, res) => {
//     console.log(notes)
//     res.json(notes);

// });

router.get('/notes/:id', (req, res) => {
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.post('/notes', (req, res) => {

  if (!req.body.id) {
        createNote(req.body, notes);
  } else {
    editNote(req.body, notes);
  }
  res.json(notes);
  
});


module.exports = router;
