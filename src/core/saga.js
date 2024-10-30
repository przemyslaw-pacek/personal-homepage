import { all } from "redux-saga/effects";
import { themeSaga } from "../features/Homepage/Toggle/themeSaga";

export default function* saga() {
  yield all([themeSaga()]);
}
