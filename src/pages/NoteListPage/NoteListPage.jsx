import { useState } from "react";
import NewNote from "../../components/NewNote/NewNote";
import * as notesAPI from "../../utilities/notes-api";

export default function NoteListPage() {
    const [notes, setNotes] = useState([]);

    async function addNote(note) {
        const notes = await notesAPI.addNote(note);
        setNotes(notes);
    }

    return (
        <div>
            <h1>Notes</h1>
            {!notes.length && <p>No Notes Yet!</p>}
            <NewNote addNote={addNote} />
            <ul>
                {notes.map((note,idx)=> <li>
                    {note.text}
                </li>)}
            </ul>
        </div>
    );
}