import React,{useState} from 'react';
import { connect } from 'react-redux';
import {addNote,deleteNote} from "./actions"
import "./styles.css";
let i=0;
function Note(props) {
const[inputValue,setInputValue]=useState("");
  
 
  const handleAdd = (e) => {

    const newNote = {

    
       id:`${++i}`,
      data:inputValue
    };
    props.addNote(newNote);


    
  };

  const handleDelete = (id) => {
    props.deleteNote(id);
  };

  return (
    <div>
      <h2>Notes</h2>
      
  <input type="text" className='input' onChange={(e)=>setInputValue(e.target.value)} placeholder='Type...'/>
  {console.log(inputValue,"input")}
      <button onClick={handleAdd}>Add</button>
      <div class="flex-div">

        {props.notes.map(item => (
          <div className='data-div'>
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
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  };
};

 export default connect(mapStateToProps, { addNote, deleteNote })(Note);

