import React from "react";
import ReactMarkdown from "react-markdown";

function Note({ currNote, updateNote }) {
  const onEditField = (key, value) => {
    updateNote({
      ...currNote, // everything else stay as is, only modify below
      [key]: value, // title or body
      lastModified: Date.now(),
    });
  };

  // no note selected case
  if (!currNote) {
    return <div className="no-current-note">No Note Selected</div>;
  }

  return (
    <div className="note-main">
      <div className="note-edit">
        <input
          type="text"
          id="title"
          value={currNote.title}
          onChange={(event) => onEditField("title", event.target.value)}
          autoFocus
        />
        <textarea
          id="body"
          value={currNote.body}
          placeholder="Write your notes here..."
          onChange={(event) => onEditField("body", event.target.value)}
        />
      </div>
      <div className="note-preview">
        <h1 className="preview-title">{currNote.title}</h1>
        <ReactMarkdown className="markdown-preview">
          {currNote.body}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default Note;
