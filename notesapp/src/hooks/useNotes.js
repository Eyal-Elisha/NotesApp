import { useState } from "react";

const useNotes = () => {

    const [notes, setNotes] = useState([])

    const addNote = (text) => {
        setNotes((prevNotes) => [...prevNotes, { id: Date.now(), text }]);
        //setNotes([...notes], {id: Date.now(), text})
    };
    
    const deleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id))
    };

    const updateNote = (id, newText) => {
        setNotes(notes.map((note) => (note.id === id ? {...note, text: newText} : note)));
    }

    return {notes, addNote, deleteNote, updateNote};

};
export default useNotes;