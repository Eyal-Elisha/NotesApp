import express from "express";
import Note from "../models/Note.js";


const notesRoutes = express.Router();


notesRoutes.post('/notes', async(req, res) => {

    const {content} = req.body;

    try{
        const newNote = new Note({
            content
        });

        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch(error){
        res.status(400).json({message: "Error creating a note", error});
    }

});

notesRoutes.get('/notes', async(req, res) => {
    try{
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch(error){
        res.status(500).json({message: "error fetching notes", error});
    }
});

notesRoutes.get('/notes/:id', async (req, res) => {
    try {
      const note = await Note.findById(req.params.id);
      if (!note) {
        return res.status(404).json({ message: 'Note not found' });
      }
      res.status(200).json(note);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching note', error });
    }
});

notesRoutes.put('/notes/:id', async (req, res) => {
    const { title, content } = req.body;
    
    try {
      const updatedNote = await Note.findByIdAndUpdate(
        req.params.id,
        { content },
        { new: true }
      );
      if (!updatedNote) {
        return res.status(404).json({ message: 'Note not found' });
      }
      res.status(200).json(updatedNote);
    } catch (error) {
      res.status(400).json({ message: 'Error updating note', error });
    }
});

notesRoutes.delete('/notes/:id', async (req, res) => {
    try {
      const deletedNote = await Note.findByIdAndDelete(req.params.id);
      if (!deletedNote) {
        return res.status(404).json({ message: 'Note not found' });
      }
      res.status(200).json({ message: 'Note deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting note', error });
    }
});

export default notesRoutes;