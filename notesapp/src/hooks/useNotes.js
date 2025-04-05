import { useState, useMemo, useEffect } from "react";
import { getNotes, createNote, deleteNote, updateNote } from "../services/notesService.js";

const useNotes = () => {

    const [notes, setNotes] = useState([])

    useEffect(() =>{
        getNotes()
        .then((response) => setNotes(response.data))
        .catch((error) => console.log("Error fetching notes:", error));
    },[]);

    const addNote = (text) => {
        const newNote = {
            content: `${text}`,      // Pass the content as text
            date: new Date().toISOString(), // Pass the current date in ISO format
        }
        createNote(newNote)
            .then((response) => {
                setNotes((prevNotes) => [...prevNotes, response.data]);
            })
            .catch((error) => console.log("Error adding note:", error));
        console.log("Added note with content:", text);
    };
    
    
    const deleteNoteById = (id) => {
        deleteNote(id)
        .then(() => {
            setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
        })
        .catch((error) => console.error("Error deleting note:", error));
    };

    const updateNoteById = (id, updatedText) => {
        updateNote(id, { content: updatedText })
          .then((response) => {
            setNotes((prevNotes) =>
              prevNotes.map((note) =>
                note._id === id ? { ...note, content: response.data.content } : note
              )
            );
          })
          .catch((error) => console.error("Error updating note:", error));
      };
    const noteCounter = useMemo(() => {
        return notes.length;
      }, [notes]);

    return {notes, addNote, deleteNote: deleteNoteById, updateNote: updateNoteById, noteCounter};

};
export default useNotes;