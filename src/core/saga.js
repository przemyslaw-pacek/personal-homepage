import { all } from "redux-saga/effects";
import { projectsSaga } from "../features/Projects/projectsSaga";
import { themeSaga } from "../features/Toggle/themeSaga";

export default function* saga() {
    yield all([
        projectsSaga(),
        themeSaga(),
    ]);
}