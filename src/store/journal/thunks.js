// La nomencaltura start me quiere decir cuando inicia el proceso
export const startNewNote = async () => {
  return async (dispatch) => {
    //uid

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    //dispatch
    //dispatch(newNote)
    //dispatch(activateNote)
  };
};
