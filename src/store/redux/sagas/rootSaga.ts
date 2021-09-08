import {
  takeLatest
} from 'redux-saga/effects';
import { handleGetProducts } from './handlers/products';
import { GET_PRODUCTS } from '../reducers/products';

export default function* rootSaga() {
  yield takeLatest(GET_PRODUCTS, handleGetProducts);
}