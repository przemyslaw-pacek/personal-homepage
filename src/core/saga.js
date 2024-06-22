import { all } from "redux-saga/effects";
import { projectsSaga } from "../homepage/Projects/projectsSaga";
import { themeSaga } from "../homepage/Toggle/themeSaga";

export default function* saga() {
    yield all([
        projectsSaga(),
        themeSaga(),
    ]);
}