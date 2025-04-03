import React from "react";
import Note from "./Note";

const NoteList = ({ notes }) => {
  return (
    <div>
      {notes.map((note, index) => (
        <Note key={index} text={note} />
      ))}
    </div>
  );
};

export default NoteList;
