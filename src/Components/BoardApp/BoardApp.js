import React, { useState, useRef, useEffect } from 'react';
import { doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore';
import { firestore } from '../../assets/firebase/firebase';
import Draggable from 'react-draggable';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css';

const addMessage = async (note) => {
  try {
    const docRef = doc(firestore, 'InnakWebSitemessage', 'notes');
    const docSnap = await getDoc(docRef);
    const newData = { note: note.note, id: note.id };
    if (docSnap.exists()) {
      const existingData = docSnap.data().data;
      const updatedData = Array.isArray(existingData) ? [...existingData, newData] : [newData];
      await setDoc(docRef, { data: updatedData });
    } else {
      // If the document does not exist, create a new one with the current message
      await setDoc(docRef, { data: [newData] });
    }
    console.log('Message saved successfully!');
  } catch (error) {
    console.error('Error appending message data: ', error);
  }
};

const deleteMessage = async (id) => {
  try {
    const docRef = doc(firestore, 'InnakWebSitemessage', 'notes');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const existingData = docSnap.data().data;
      const updatedData = existingData.filter((note) => note.id !== id);
      await setDoc(docRef, { data: updatedData });
      console.log('Message deleted successfully!');
    }
  } catch (error) {
    console.error('Error deleting message data: ', error);
  }
};



const fetchToGetMessageNote = async () => {
  try {
    const docRef = doc(firestore, 'InnakWebSitemessage', 'notes');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data().data;
    } else {
      console.log('Document does not exist!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching Message note data: ', error);
    return null;
  }
};


// Define the Note component using functional components and hooks
const Note = ({ id, index, onChange, onRemove, children }) => {
    const [editing, setEditing] = useState(false);
    const [newText, setNewText] = useState(children);
  
    useEffect(() => {
      const randomBetween = (min, max) => min + Math.ceil(Math.random() * max);

      const style = {
        right: `${randomBetween(0, window.innerWidth - 150)}px`,
        top: `${randomBetween(0, window.innerHeight - 150)}px`,
        transform: `rotate(${randomBetween(-15, 15)}deg)`,
      };
  
      // Apply the styles to the note
      const noteElement = document.getElementById(`note-${id}`);
      noteElement.style.right = style.right;
      noteElement.style.top = style.top;
      noteElement.style.transform = style.transform;
  
    
    }, [id]);
  
    const handleEdit = () => {
      setEditing(true);
    };
  
    const handleSave = () => {
      onChange(newText, index);
      setEditing(false);
    };
  
    const handleRemove = () => {
      onRemove(index);
    };
  
    return (
        <Draggable>
      <div id={`note-${id}`} className="note">
        {editing ? (
          <div>
            <textarea
              value={newText}
              onChange={e => setNewText(e.target.value)}
              className="textarea-form-control"
            />
            <button onClick={handleSave} className="custom-btn-save btn-save" >
            Save
            </button>
          </div>
        ) : (
          <div>
            <p>{children}</p>
            <span className='edit' style={{button:"5px"}}>
            <button onClick={handleEdit} className="custom-btn-edit btn-edit">
  Edit
</button>


            </span>
          </div>
        )}
      </div>
      </Draggable>
    );
  };
  
  // Define the Board component using functional components and hooks
  const Board = () => {
    const [notes, setNotes] = useState([]);
  
    const addNote = text => {
      setNotes([...notes, { id: Date.now(), text }]);
    };
  
    const updateNote = (newText, index) => {
      const updatedNotes = [...notes];
      updatedNotes[index].text = newText;
      setNotes(updatedNotes);
    };
  
    const removeNote = index => {
      const updatedNotes = [...notes];
      updatedNotes.splice(index, 1);
      setNotes(updatedNotes);
    };
  
    return (
      <div className="board">
        <h2 className="board-title strong mt-5">Opinions & Testimonials</h2>
        {notes.map((note, index) => (
          <Note key={note.id} id={note.id} index={index} onChange={updateNote} onRemove={removeNote}>
            {note.text}
          </Note>
        ))}
        <button className="custom-btn btn-2" onClick={() => addNote("New Note")} >Add your Notes</button>
      </div>
    );
  };
  
  export default Board;