import { call, put } from "redux-saga/effects";
import { requestGetUser } from "../requests/products";
import { setProduct } from "../../reducers/products";

export function* handleGetProducts(action) {
  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    console.log(data)
    yield put(setProduct(data));
  } catch (error) {
    console.log(error);
  }
}
