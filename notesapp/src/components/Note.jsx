import React, { useState } from "react";
import "../styles/Note.css";

const Note = ({note, deleteNote, updateNote}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(note.text);

    const handleUpdate = () => {
      updateNote(note.id, newText)
      setIsEditing(false);  
    };
    return(
        <div className="note">
            {isEditing ? (
                <div>
                    <input value={newText} onChange={(e) => setNewText(e.target.value)}/>
                    <button onClick={handleUpdate}>Save</button>
                </div>
            ) : (
                <div>
                    <p className="note-text">{note.text}</p>
                    <div className="buttons">
                        <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
                        <button className="delete-btn" onClick={() => deleteNote(note.id)}>Delete</button>
                    </div>
                </div>
            )}

        </div>
    );
};
export default Note;