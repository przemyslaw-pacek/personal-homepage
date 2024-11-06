import { createSlice } from "@reduxjs/toolkit";
import { getThemeFromLocalStorage } from "./themeLocalStorage";
import { RootState } from "../../../core/store";
import { DarkMode } from "../../../core/types";

interface ThemeState {
  darkMode: DarkMode;
}

const initialState: ThemeState = {
  darkMode: getThemeFromLocalStorage(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = (state: RootState): DarkMode => state.theme.darkMode;

export default themeSlice.reducer;
