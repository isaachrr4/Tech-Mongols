const { Note} = require('../models');

const notedata = [
    {
        note_text: 'Amazing Blog!',
        user_id: 10
    },
    {
        note_text: 'This is a very interesting read will be reading again!',
        user_id: 9
    },
    {
        note_text: 'Very informative!',
        user_id:8
    }

]

const seedNotes = () => Note.bulkCreate(notedata);
module.exports = seedNotes;