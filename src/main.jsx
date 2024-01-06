import React from 'react';
import { ThemeProvider } from 'styled-components';

import App from './App';
import './index.css';
import theme from './theme';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
);
