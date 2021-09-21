import NoteContext from './noteContext';
import { useState } from 'react';

const NoteState = (props)=>{
   const notesInitial = [
    {
      "_id": "614479b5319777a0d94a0663",
      "user": "6140711d145000af09361f44",
      "title": "First Title",
      "description": "Content - Get healthy, get bold in life.",
      "tag": "Personal",
      "date": "2021-09-17T11:19:17.862Z",
      "__v": 0
    },
    {
      "_id": "61447cdcd6e6e7a447471ee3",
      "user": "6140711d145000af09361f44",
      "title": "Second Title",
      "description": "Get healthy, get bold in life.",
      "tag": "Personal",
      "date": "2021-09-17T11:32:44.395Z",
      "__v": 0
    },
    {
        "_id": "61447cdcd6e6e7a447471ee3",
        "user": "6140711d145000af09361f44",
        "title": "Third Title",
        "description": "Get healthy, get bold in life.",
        "tag": "Personal",
        "date": "2021-09-17T11:32:44.395Z",
        "__v": 0
      },
      {
        "_id": "61447cdcd6e6e7a447471ee3",
        "user": "6140711d145000af09361f44",
        "title": "Fourth Title",
        "description": "Get healthy, get bold in life.",
        "tag": "Personal",
        "date": "2021-09-17T11:32:44.395Z",
        "__v": 0
      },
      {
        "_id": "61447cdcd6e6e7a447471ee3",
        "user": "6140711d145000af09361f44",
        "title": "Fifth Title",
        "description": "Get healthy, get bold in life.",
        "tag": "Personal",
        "date": "2021-09-17T11:32:44.395Z",
        "__v": 0
      },
      {
        "_id": "61447cdcd6e6e7a447471ee3",
        "user": "6140711d145000af09361f44",
        "title": "Sixth Title",
        "description": "Get healthy, get bold in life.",
        "tag": "Personal",
        "date": "2021-09-17T11:32:44.395Z",
        "__v": 0
      }
  ]
  const [notes, setNotes] = useState(notesInitial)
    
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
};


export default NoteState;