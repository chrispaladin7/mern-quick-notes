const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/notes'

// POST /api/notes (create a note)
router.post('/', ensureLoggedIn, notesCtrl.create);



module.exports = router;