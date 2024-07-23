import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from 'redux-persist';
import { store } from './components/app/store';

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>
  </BrowserRouter>
  // <React.StrictMode>
  // </React.StrictMode>
);