import { all } from "redux-saga/effects";
import { projectsSaga } from "../features/Projects/projectsSaga";

export default function* saga() {
    yield all([
        projectsSaga(),
    ]);
}