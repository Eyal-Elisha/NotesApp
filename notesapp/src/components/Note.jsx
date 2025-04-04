import React, { useState } from "react";
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
                    <p>{note.text}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => deleteNote(note.id)}>Delete</button>
                </div>
            )}

        </div>
    );
};
export default Note;