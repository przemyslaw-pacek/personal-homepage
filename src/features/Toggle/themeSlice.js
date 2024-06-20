import { createSlice } from '@reduxjs/toolkit';
import { getThemeFromLocalStorage } from './themeLocalStorage';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        darkMode: getThemeFromLocalStorage(),
    },
    reducers: {
        toggleTheme: state => {
            state.darkMode = !state.darkMode;
        },
    },
});

export const {
    toggleTheme,
} = themeSlice.actions;

export const selectTheme = state => state.theme.darkMode;

export default themeSlice.reducer;