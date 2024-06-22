const localStorageKey = "darkMode";

export const saveThemeInLocalStorage = darkMode =>
    localStorage.setItem(localStorageKey, JSON.stringify(darkMode));

export const getThemeFromLocalStorage = () => {
    const storedTheme = localStorage.getItem(localStorageKey);
    return storedTheme ? JSON.parse(storedTheme) : true;
};