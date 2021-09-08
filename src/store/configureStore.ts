import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import { History } from "history";
import { createReducer } from "./redux/reducers/reducers";
import rootSaga from "./redux/sagas/rootSaga";

export function configureAppStore(initialState: {} = {}, history: History) {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  // ======================================================
  // Middleware Configuration
  // ======================================================
  // Create the store with saga middleware
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  // ======================================================
  // Store Enhancers
  // ======================================================
  let enhancer = applyMiddleware(...middlewares);

  // If Redux Dev Tools and Saga Dev Tools Extensions are installed, enable them
  /* istanbul ignore next */
  if (process.env.NODE_ENV !== "production" && typeof window === "object") {
    enhancer = composeWithDevTools(enhancer);
  }

  // ======================================================
  // Store Instantiation
  // ======================================================
  const store = createStore(createReducer(), initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
}
