export const addNote = (note: { id: string; data: string }) => {
    return {
      type: 'ADDNOTE' as const,
      payload: note
    };
  };
  
  export const deleteNote = (id: string) => {
    return {
      type: 'DELETENOTE' as const,
      payload: id
    };
  };
  
  export type NoteAction = ReturnType<typeof addNote> | ReturnType<typeof deleteNote>;
  