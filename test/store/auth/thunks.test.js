import {
  loginWithEmailPassword,
  logoutFirebase,
  registerUserWithEmailPassword,
  singInWithGoogle,
} from "../../../src/firebase/providers";
import { checkingCredentials, login, logout } from "../../../src/store/auth";
import {
  checkingAuthentication,
  startCreatingUserWithEmailPassword,
  startGoogleSignIn,
  startLoginWithEmailPasword,
  startLogout,
} from "../../../src/store/auth/thunks";
import { clearNotesLogout } from "../../../src/store/journal/journalSlice";
import { demoUser, demoUser2 } from "../../fixtures/authFixtures";

jest.mock("../../../src/firebase/providers");

describe("Pruebas de AuthThunks", () => {
  const dispatch = jest.fn();
  beforeEach(() => jest.clearAllMocks());
  test("Debe de invocar el checkingCredentials", async () => {
    await checkingAuthentication()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });

  test("Pruebas startGoogleSignIn debe de llamar checkingCredentials y login - Exito", async () => {
    const loginData = { ok: true, ...demoUser };

    await singInWithGoogle.mockResolvedValue(loginData);
    //thunk
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });
  test("Pruebas startGoogleSignIn debe de llamar checkingCredentials y logout como mensaje de error - Fallido", async () => {
    const loginData = { ok: false, errorMessage: "Error en google" };

    await singInWithGoogle.mockResolvedValue(loginData);
    //thunk
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
  });

  test("startCreatingUserWithEmailPassword debe llamar checkingCredentials y registerUserWithEmailPassword - Exitoso", async () => {
    // Ajusta este objeto para que coincida con el payload esperado exactamente, incluyendo `ok: true`.
    const loginData = { ok: true, ...demoUser };

    // Configura el mock para devolver los datos esperados por el login
    await registerUserWithEmailPassword.mockResolvedValue(loginData);

    // Ejecuta el thunk
    await startCreatingUserWithEmailPassword({
      email: loginData.email,
      password: "123456",
      displayName: loginData.displayName,
    })(dispatch);

    // Verifica que las acciones esperadas fueron despachadas con los datos correctos
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(
      login({
        uid: loginData.uid,
        email: loginData.email,
        displayName: loginData.displayName,
        photoURL: loginData.photoURL,
        // No necesitas incluir 'ok' aquí a menos que tu acción de 'login' explícitamente lo requiera.
      })
    );
  });

  test("startLoginWithEmailPasword debe llamar checkingCredentials y login - Exito", async () => {
    const loginData = { ok: true, ...demoUser };
    const formData = { email: demoUser.email, password: "123456" };

    await loginWithEmailPassword.mockResolvedValue(loginData);

    await startLoginWithEmailPasword(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test("startLoginWithEmailPasword debe llamar checkingCredentials y login - Fallido", async () => {
    const loginData = {
      ok: false,
      errorMessage: "Error en la validacion de la cuenta",
    };
    const formData = { email: demoUser.email, password: "123456" };

    await loginWithEmailPassword.mockResolvedValue(loginData);

    await startLoginWithEmailPasword(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(loginData));
  });

  test("startLogout debe de llamar logoutFirebase, clearNotes y logout", async () => {
    await startLogout()(dispatch);

    expect(logoutFirebase).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
    expect(dispatch).toHaveBeenCalledWith(logout());
  });
});
