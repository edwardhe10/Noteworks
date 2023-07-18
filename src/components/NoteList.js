import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { PiNotePencil } from "react-icons/pi";

function NoteList({ notes, addNote, deleteNote, currNote, setCurrNote }) {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  return (
    <div className="note-list">
      <div className="note-list-header">
        <h1>Noteworks</h1>
        <div className="add-button">
          <PiNotePencil onClick={addNote} />
        </div>
      </div>
      <div className="notes">
        {sortedNotes.map((note) => (
          <div
            className={`note ${note.id === currNote && "current"}`}
            onClick={() => setCurrNote(note.id)}
          >
            <div className="note-title">
              <strong>{note.title}</strong>
              <RiDeleteBinLine onClick={() => deleteNote(note.id)} />
            </div>
            <p>{note.body && note.body.substr(0, 100) + "..."}</p>
            <small className="last-modified">
              Last Modified:{" "}
              {new Date(note.lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NoteList;
