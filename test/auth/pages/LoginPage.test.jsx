const { MemoryRouter } = require("react-router-dom");
const { render, screen, fireEvent } = require("@testing-library/react");
const { Provider } = require("react-redux");
const { configureStore } = require("@reduxjs/toolkit");
const { LoginPage } = require("../../../src/auth/pages/LoginPage");
const { authSlice } = require("../../../src/store/auth");
const { startGoogleSignIn } = require("../../../src/store/auth/thunks");
const { notAuthenticatedState } = require("../../fixtures/authFixtures");

const mockStartGoogleSignIn = jest.fn();

jest.mock("../../../src/store/auth/thunks", () => ({
  startGoogleSignIn: () => mockStartGoogleSignIn,
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
});
