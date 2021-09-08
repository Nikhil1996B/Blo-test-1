import { Reducer, Store } from "redux";
import { RootState } from "./RootState";
import { RouterState } from "connected-react-router";

export interface InjectedStore extends Store {
  injectedReducers: any;
  injectedSagas: any;
  runSaga(
    saga: (() => IterableIterator<any>) | undefined,
    args: any | undefined
  ): any;
}

// Your root reducer type, which is your redux state types also
export interface ApplicationRootState {
  readonly router: RouterState;
}

export type { RootState };
