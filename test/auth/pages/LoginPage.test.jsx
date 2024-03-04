const { MemoryRouter } = require("react-router-dom");
const { render, screen, fireEvent } = require("@testing-library/react");
const { Provider } = require("react-redux");
const { configureStore } = require("@reduxjs/toolkit");
const { LoginPage } = require("../../../src/auth/pages/LoginPage");
const { authSlice } = require("../../../src/store/auth");
const { startGoogleSignIn } = require("../../../src/store/auth/thunks");
const { notAuthenticatedState } = require("../../fixtures/authFixtures");

const mockStartGoogleSignIn = jest.fn();
const mockStartLoginwithEmailPassword = jest.fn();

jest.mock("../../../src/store/auth/thunks", () => ({
  startGoogleSignIn: () => mockStartGoogleSignIn,
  startLoginWithEmailPasword: ({ email, password }) => {
    return () => mockStartLoginwithEmailPassword({ email, password });
  },
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => (fn) => fn(),
}));

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  preloadedState: {
    auth: notAuthenticatedState,
  },
});

describe("Pruebas en el <LoginPage/>", () => {
  beforeEach(() => jest.clearAllMocks());
  test("Debe mostrar el componente correctamente", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    // screen.debug();

    expect(screen.getAllByText("Login").length).toBeGreaterThanOrEqual(1);
  });

  test("Boton de google que debe llamar el startGoogleSDignIn", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const googleBtn = screen.getByLabelText("google-btn");
    fireEvent.click(googleBtn);
    expect(mockStartGoogleSignIn).toHaveBeenCalled();
  });

  test("submit debe de llamar startLoginWithEmailPassword", () => {
    const email = "juanito@google.com";
    const password = "123456";

    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const emailField = screen.getByRole("textbox", { name: "Correo" });
    fireEvent.change(emailField, { target: { name: "email", value: email } });

    const passwordField = screen.getByTestId("password");
    fireEvent.change(passwordField, {
      target: { name: "password", value: password },
    });

    const loginForm = screen.getByLabelText("submit-form");
    fireEvent.submit(loginForm);

    expect(mockStartLoginwithEmailPassword).toHaveBeenCalledWith({
      email,
      password,
    });
  });
});
