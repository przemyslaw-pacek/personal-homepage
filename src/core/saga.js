import { all } from "redux-saga/effects";
import { projectsSaga } from "../features/Homepage/Projects/projectsSaga";
import { themeSaga } from "../features/Homepage/Toggle/themeSaga";

export default function* saga() {
    yield all([
        projectsSaga(),
        themeSaga(),
    ]);
}