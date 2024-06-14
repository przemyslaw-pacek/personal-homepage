import { put, delay, call, takeLatest, takeEvery, select } from "redux-saga/effects";
import { fetchProjects, fetchProjectsSuccess, fetchProjectsError, selectDarkMode } from "./projectsSlice";
import { getProjects } from "./projectsAPI";
import { saveThemeInLocalStorage } from "./themeLocalStorage";

function* fetchProjectsHandler() {
    try {
        yield delay(2000);
        const projects = yield call(getProjects);
        yield put(fetchProjectsSuccess(projects));
    } catch (error) {
        yield put(fetchProjectsError());
    }
}

function* saveThemeInLocalStorageHandler() {
    const darkMode = yield select(selectDarkMode);
    yield call(saveThemeInLocalStorage, darkMode);
}

export function* projectsSaga() {
    yield takeLatest(fetchProjects.type, fetchProjectsHandler);
    yield takeEvery("*", saveThemeInLocalStorageHandler);
}