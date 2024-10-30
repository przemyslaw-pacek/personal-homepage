import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import themeReducer from "../features/Homepage/Toggle/themeSlice";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(saga);

export default store;
