import { call, takeEvery, select } from "redux-saga/effects";
import { selectTheme } from "./themeSlice";
import { saveThemeInLocalStorage } from "./themeLocalStorage";

function* saveThemeInLocalStorageHandler() {
    const darkMode = yield select(selectTheme);
    yield call(saveThemeInLocalStorage, darkMode);
}

export function* themeSaga() {
    yield takeEvery("*", saveThemeInLocalStorageHandler);
}