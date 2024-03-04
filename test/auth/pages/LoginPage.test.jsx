const { MemoryRouter } = require("react-router-dom");
const { render, screen } = require("@testing-library/react");
const { Provider } = require("react-redux");
const { configureStore } = require("@reduxjs/toolkit");
const { LoginPage } = require("../../../src/auth/pages/LoginPage");
const { authSlice } = require("../../../src/store/auth");

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
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
});
