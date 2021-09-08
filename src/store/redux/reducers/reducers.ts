/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import productsReducer from "./products";
import history from "../../../utils/history";

export function createReducer() {
  return combineReducers({
    router: connectRouter(history),
    products: productsReducer,
  });
}
