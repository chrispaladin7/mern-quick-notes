import { useState } from 'react';

export default function NewNote({ addNote }) {
    const [note, setNote] = useState('');

    function handleAddNote() {
        addNote(note);
        setNote('');
    }

    return (
        <>
            <h2>NewNote</h2>
            <input value={note} onChange={(evt) => setNote(evt.target.value)} rows="4" cols="50" />
            <button onClick={handleAddNote}>Add Note</button>
        </>
    );
}