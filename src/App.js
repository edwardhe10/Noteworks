import { useState } from "react";
import "./App.css";
import Note from "./components/Note.js";
import NoteList from "./components/NoteList.js";
import uuid from "react-uuid";

function App() {
  const [notes, setNotes] = useState([]);
  const [currNote, setCurrNote] = useState(false);

  const addNote = () => {
    const newNote = {
      id: uuid(),
      title: "New Note",
      body: "",
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id) => {
    const deleteArr = [...notes].filter((note) => note.id !== id);
    setNotes(deleteArr);
  };

  const getCurrNote = () => {
    // find and return entire object
    return notes.find((note) => note.id === currNote);
  };

  const updateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === currNote) {
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotesArr);
  };

  return (
    <div className="Noteworks">
      <NoteList
        notes={notes}
        addNote={addNote}
        deleteNote={deleteNote}
        currNote={currNote}
        setCurrNote={setCurrNote}
      />
      <Note currNote={getCurrNote()} updateNote={updateNote} />
    </div>
  );
}

export default App;
