import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote } from "./";

// La nomencaltura start me quiere decir cuando inicia el proceso
export const startNewNote = () => {
  //get state es el segundo argumento dentro del thunk el cual es una funcion
  return async (dispatch, getState) => {
    //Todo: tarea dispatch
    dispatch(savingNewNote());

    const { uid } = getState().auth;
    console.log("startNewNote");
    //uid

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    //Crear la referencia del documento donde voy a insertar
    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));

    await setDoc(newDoc, newNote);

    // Esto creando la propiedad id a esa nota
    newNote.id = newDoc.id;

    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));

    //dispatch
    //dispatch(newNote)
    //dispatch(activateNote)
  };
};
