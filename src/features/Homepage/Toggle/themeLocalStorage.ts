import { DarkMode } from "../../../core/types";

const localStorageKey = "darkMode";

export const saveThemeInLocalStorage = (darkMode: DarkMode): void =>
  localStorage.setItem(localStorageKey, JSON.stringify(darkMode));

export const getThemeFromLocalStorage = (): DarkMode => {
  const storedTheme = localStorage.getItem(localStorageKey);
  return storedTheme ? JSON.parse(storedTheme) : true;
};
