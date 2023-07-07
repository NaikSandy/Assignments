import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addNote, deleteNote, NoteAction } from './actions';
import './styles.css';

let i = 0;

interface NoteProps {
  notes: { id: string; data: string }[];
  addNote: (note: { id: string; data: string }) => void;
  deleteNote: (id: string) => void;
}

const Note: React.FC<NoteProps> = (props) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newNote = {
      id: `${++i}`,
      data: inputValue
    };
    props.addNote(newNote);
  };

  const handleDelete = (id: string) => {
    props.deleteNote(id);
  };

  return (
    <div>
      <h2>Notes</h2>

      <input type="text" className="input" onChange={(e) => setInputValue(e.target.value)} placeholder="Type..." />

      <button onClick={handleAdd}>Add</button>

      <div className="flex-div">
        {props.notes.map((item) => (
          <div className="data-div">
            <ul>
              <li key={item.id}>
                {item.data}
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: { notes: { id: string; data: string }[] }) => {
  return {
    notes: state.notes
  };
};

const mapDispatchToProps = (dispatch: Dispatch<NoteAction>) => {
  return {
    addNote: (note: { id: string; data: string }) => dispatch(addNote(note)),
    deleteNote: (id: string) => dispatch(deleteNote(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
