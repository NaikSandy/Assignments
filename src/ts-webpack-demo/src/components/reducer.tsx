interface Note {
    id: string;
    data: string;
  }
  
  interface RootState {
    notes: Note[];
  }
  
  const initialState: RootState = {
    notes: []
  };
  
  const rootReducer = (state: RootState = initialState, action: NoteAction): RootState => {
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
  
  export type NoteAction = { type: 'ADDNOTE'; payload: Note } | { type: 'DELETENOTE'; payload: string };
  