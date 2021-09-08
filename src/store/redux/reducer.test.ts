import { createReducer } from './reducers/reducers';
import { Reducer } from '@reduxjs/toolkit';

describe('reducer', () => {
  it('should return identity reducers when empty', () => {
    const reducer = createReducer() as Reducer<any, any>;
    const state = {
      "router": {
        "action": "POP",
        "location": {
          "hash": "",
          "pathname": "/",
          "query": {},
          "search": "",
          "state": undefined,
        },
      },
      "products": {},
    };
    const newState = reducer(state, '');
    expect(newState).toBe(state);
  });
});
