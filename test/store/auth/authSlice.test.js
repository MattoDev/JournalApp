import {
  authSlice,
  checkingCredentials,
  login,
  logout,
} from "../../../src/store/auth/authSlice";
import {
  authenticatedState,
  demoUser,
  initialState,
  notAuthenticatedState,
} from "../../fixtures/authFixtures";

describe("Pruebas en el authslice", () => {
  test("debe de regrsar el estado inicial y llamarse auth", () => {
    expect(authSlice.name).toBe("auth");

    const state = authSlice.reducer(initialState, {});

    expect(state).toEqual(initialState);
  });

  test("debe de realizar la autenticacion", () => {
    // console.log(login(demoUser));
    const state = authSlice.reducer(initialState, login(demoUser));
    expect(state).toEqual({
      status: "authenticated", // 'checking','not-authenticated', 'authenticated'
      uid: demoUser.uid,
      email: demoUser.email,
      displayName: demoUser.displayName,
      photoURL: demoUser.photoURL,
      errorMessage: null,
    });
  });

  test("debe realizar el logout sin argumentos", () => {
    //authenticated // logout sin argumentos
    const state = authSlice.reducer(authenticatedState, logout({}));

    expect(state).toEqual(notAuthenticatedState);
  });
  test("debe realizar el logout y mostrar un mensaje de error", () => {
    //authenticated // logout sin argumentos
    const errorMessage = "Error de autenticacion";
    const state = authSlice.reducer(authenticatedState, logout(errorMessage));

    expect(state).toEqual({
      errorMessage,
      ...notAuthenticatedState,
    });
  });

  test("Debe de cambiar el estado a checking", () => {
    const state = authSlice.reducer(authenticatedState, checkingCredentials());
    expect(state.status).toBe("checking");
  });
});
