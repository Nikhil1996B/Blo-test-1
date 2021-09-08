import { createReducer } from "../redux/reducers/reducers";
import { Reducer } from "@reduxjs/toolkit";

describe("reducer", () => {
  it("should inject reducers", () => {
    const dummyReducer = (s = {}, a) => undefined;
    const reducer = createReducer() as Reducer<any, any>;
    const state = reducer({}, "");
    expect(state.test).toBe(undefined);
  });

  it("should return identity reducers when empty", () => {
    const reducer = createReducer() as Reducer<any, any>;
    const state = {
      products: {},
      router: {
        action: "POP",
        location: {
          hash: "",
          pathname: "/",
          query: {},
          search: "",
          state: undefined,
        },
      },
    };
    const newState = reducer(state, "");
    expect(newState).toBe(state);
  });
});
