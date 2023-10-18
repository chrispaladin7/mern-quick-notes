
const Note = require('../../models/note');

module.exports = {
  create,
};


async function create(req, res) {

  try {
    req.body.user = req.user._id
    await Note.create(req.body);
    const notes = await Note.find({user: req.user._id});
    res.json(notes);
  } catch (err) {
    res.status(400).json(err);
  }
}
