const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, '../db/db.json');

function createNewNote(body, noteTakerArray) {
    const note = body;
    noteTakerArray.push(note);
    writeToDb(noteTakerArray);
    return note;
}

function deleteNote(noteTakerArray, id) {
    let deleteID = parseInt(id);
    noteTakerArray.splice(deleteID, 1);

    for (let i = deleteID; i < noteTakerArray.length; i++) {
        noteTakerArray[i].id = i.toString();
    }

    writeToDb(noteTakerArray);
}

function writeToDb(noteTakerArray) {
    fs.writeFileSync(
        dbPath,
        JSON.stringify({ notes: noteTakerArray }, null, 2)
    );
}

module.exports = {
    createNewNote,
    deleteNote
};
