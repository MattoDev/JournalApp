import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

// La nomencaltura start me quiere decir cuando inicia el proceso
export const startNewNote = () => {
  //get state es el segundo argumento dentro del thunk el cual es una funcion
  return async (dispatch, getState) => {
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

    const setDocResp = await setDoc(newDoc, newNote);
    console.log({ newDoc, setDoc });

    //dispatch
    //dispatch(newNote)
    //dispatch(activateNote)
  };
};
