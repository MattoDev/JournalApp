import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import {
  addNewEmptyNote,
  deleteNoteById,
  noteUpdated,
  savingNewNote,
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
} from "./";
import { fileUpload, loadNotes } from "../../helpers";

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

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error("El UID del usuario no existe");

    const getNotes = await loadNotes(uid);

    dispatch(setNotes(getNotes));
  };
};

export const startSaveNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());

    const { uid } = getState().auth;
    const { active: note } = getState().journal;

    const noteToFireStore = { ...note };
    delete noteToFireStore.id;

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);

    await setDoc(docRef, noteToFireStore, { merge: true });
    dispatch(noteUpdated(note));
  };
};

export const startUploadingFiles = (files = []) => {
  return async (dispatch) => {
    dispatch(setSaving());

    // await fileUpload(files[0]);

    const fileUploadPromises = [];

    for (const file of files) {
      fileUploadPromises.push(fileUpload(file));
    }

    const photosUrls = await Promise.all(fileUploadPromises);

    dispatch(setPhotosToActiveNote(photosUrls));
  };
};

export const startDeletingNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { active: note } = getState().journal;

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
    await deleteDoc(docRef);

    dispatch(deleteNoteById(note.id));
  };
};
