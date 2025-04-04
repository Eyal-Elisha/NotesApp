import React from "react";
import Note from "./Note";

const NoteList = ({ notes, deleteNote, updateNote }) => {
  
  return (
    <div>
      {notes.map((note) => (
        <Note key={note.id} note={note} deleteNote={deleteNote} updateNote={updateNote} />
      ))}
    </div>
  );
};

export default NoteList;
