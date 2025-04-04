import useNotes from "./hooks/useNotes";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";

function App() {

  const { notes, addNote, deleteNote, updateNote } = useNotes();

  return (
    <div>
      <h1>My Notes App</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} updateNote={updateNote} />
    </div>
  );
}

export default App;
