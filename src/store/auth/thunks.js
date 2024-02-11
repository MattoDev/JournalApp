// Recordar que los Thunks son acciones que yo puedo hacer dispatch o que yo puedo despachar, pero esas acciones
//internamente tienen un tarea asincrona, si se necesita que sean sincronas pueden hacerlo directamente en los reducers

import { checkingCredentials } from "./authSlice";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

//Usualmente se le pone el nombre de start para indiciar que este es el inicio de una tarea asincrona
export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};
