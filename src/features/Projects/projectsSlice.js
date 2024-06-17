import { createSlice } from '@reduxjs/toolkit';

const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: [],
    },
    reducers: {
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
    fetchProjects,
    fetchProjectsSuccess,
    fetchProjectsError
} = projectsSlice.actions;

export default projectsSlice.reducer;