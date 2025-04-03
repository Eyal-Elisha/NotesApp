import React, { useState } from "react";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (text) => {
    setNotes([...notes, text]);
  };

  return (
    <div>
      <h1>My Notes App</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
