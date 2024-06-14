import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/core/App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/core/theme';
import { GlobalStyle } from '../src/core/GlobalStyle';
import { Provider, useSelector } from 'react-redux';
import store from './core/store';
import { selectDarkMode } from './features/Projects/projectsSlice';

const RootComponent = () => {
  const darkMode = useSelector(selectDarkMode);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle $dark={darkMode} />
      <App />
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RootComponent />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
