import useNotes from "../hooks/useNotes";
import NoteList from "../components/NoteList";
import NoteForm from "../components/NoteForm";
import "../styles/NotesPage.css";

function NotesPage() {
  const { notes, addNote, deleteNote, updateNote } = useNotes();

  return (
    <div className="notes-page">
      <div className="notes-container">
        <header className="notes-header">
          <h1 className="notes-title">Notes</h1>
          <NoteForm addNote={addNote} />
        </header>
        <main className="notes-content">
          <NoteList notes={notes} deleteNote={deleteNote} updateNote={updateNote} />
        </main>
      </div>
    </div>
  );
}

export default NotesPage;
