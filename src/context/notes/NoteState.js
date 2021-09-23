import NoteContext from './noteContext';
import { useState } from 'react';

const NoteState = (props)=>{
  const host = "http://localhost:5000";
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

// Get all Notes
const getNotes = async () => {
  // API Call 
  const response = await fetch(`${host}/api/notes/fetchallnotes`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0MDcxMWQxNDUwMDBhZjA5MzYxZjQ0In0sImlhdCI6MTYzMTY5OTU4OX0.0S63kSbL669FlkxEyOiNdGl_hW33LWcWLUwdvp7AyUk"
    }
  });
  const json = await response.json();
  console.log(json)
  setNotes(json)
}

  // Add a Note
  const addNote = async (title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0MDcxMWQxNDUwMDBhZjA5MzYxZjQ0In0sImlhdCI6MTYzMTY5OTU4OX0.0S63kSbL669FlkxEyOiNdGl_hW33LWcWLUwdvp7AyUk" 
      },
      body: JSON.stringify({title, description, tag})
    });
    
    const note = {
      "_id": "61447cdcd6e6e7a447456ff5",
      "user": "6140711d145000af09361f44",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2021-09-17T11:32:44.395Z",
      "__v": 0
    };
    setNotes(notes.concat(note))
  }

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0MDcxMWQxNDUwMDBhZjA5MzYxZjQ0In0sImlhdCI6MTYzMTY5OTU4OX0.0S63kSbL669FlkxEyOiNdGl_hW33LWcWLUwdvp7AyUk"
      },
      
    });
    const json = response.json(); 
    console.log(json)

    console.log("Deleting the note with id: " + id);
    const newNotes = notes.filter((note) => {return note._id !== id})
    setNotes(newNotes)
  }

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0MDcxMWQxNDUwMDBhZjA5MzYxZjQ0In0sImlhdCI6MTYzMTY5OTU4OX0.0S63kSbL669FlkxEyOiNdGl_hW33LWcWLUwdvp7AyUk"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = response.json(); 
  
  // Logic to edit in client side
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if(element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  }
    
    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
    }


export default NoteState;