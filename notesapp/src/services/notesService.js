import axios from "axios";

// const PORT = process.env.SERVER_PORT

const API_URL = `http://localhost:5000/notes`;

export const getNotes = () => axios.get(API_URL);

export const createNote = (note) => axios.post(API_URL, note);

export const deleteNote = (id) => axios.delete(`${API_URL}/${id}`);

export const updateNote = (id, updatedNote) =>
  axios.put(`${API_URL}/${id}`, updatedNote);
