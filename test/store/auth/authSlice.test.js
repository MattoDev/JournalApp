import { authSlice } from "../../../src/store/auth/authSlice";
import { initialState } from "../../fixtures/authFixtures";

describe("Pruebas en el authslice", () => {
  test("debe de regrsar el estado inicial y llamarse auth", () => {
    expect(authSlice.name).toBe("auth");

    const state = authSlice.reducer(initialState, {});

    expect(state).toEqual(initialState);
  });
});
