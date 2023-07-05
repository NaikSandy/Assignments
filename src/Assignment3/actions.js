// actions.js
export const addNote= (note) => {
    return {
      type: 'ADDNOTE',
      payload: note
    };
  };
  
  export const deleteNote = (id) => {
    return {
      type: 'DELETENOTE',
      payload: id
    };
  };
  