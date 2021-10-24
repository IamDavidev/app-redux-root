export const NoteRedux = (state, action) => {
  const $type = action.type;
  // add note
  if ($type === '@note/add') {
    return [...state, action.payload];
  }
  //delete note
  if ($type === '@note/delelte') {
    const { id } = action.payload
    console.log(id);
  }

};


