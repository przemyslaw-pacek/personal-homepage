import { createSlice } from '@reduxjs/toolkit';
import { getThemeFromLocalStorage } from './themeLocalStorage';

const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: [],
        darkMode: getThemeFromLocalStorage(),
    },
    reducers: {
        toggleTheme: state => {
            state.darkMode = !state.darkMode;
        },
        fetchProjects: (state) => {
            state.loading = true;
        },
        fetchProjectsSuccess: (state, { payload: projects }) => {
            state.loading = false;
            state.projects = projects;
        },
        fetchProjectsError: (state) => {
            state.loading = false;
            state.error = true;
        },
    },
});

export const {
    toggleTheme,
    fetchProjects,
    fetchProjectsSuccess,
    fetchProjectsError
} = projectsSlice.actions;

export const selectDarkMode = state => state.projects.darkMode;

export default projectsSlice.reducer;