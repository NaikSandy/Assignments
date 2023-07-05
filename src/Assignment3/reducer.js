// reducers.js
const initialState = {
  notes: []//Notes
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADDNOTE':
        return {
          ...state,
          notes: [...state.notes, action.payload]
        };
      case 'DELETENOTE':
        return {
          ...state,
          notes: state.notes.filter(item => item.id !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  