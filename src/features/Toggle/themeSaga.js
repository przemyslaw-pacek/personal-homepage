import { call, takeEvery, select } from "redux-saga/effects";
import { selectDarkMode } from "./themeSlice";
import { saveThemeInLocalStorage } from "./themeLocalStorage";

function* saveThemeInLocalStorageHandler() {
    const darkMode = yield select(selectDarkMode);
    yield call(saveThemeInLocalStorage, darkMode);
}

export function* themeSaga() {
    yield takeEvery("*", saveThemeInLocalStorageHandler);
}