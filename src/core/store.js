import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import projectsReducer from '../features/Projects/projectsSlice';
import themeReducer from '../features/Toggle/themeSlice';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        projects: projectsReducer,
        theme: themeReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(saga);

export default store;