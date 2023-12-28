import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';

import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './App';
import store from './redux/store';
import client from './client/client';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </Provider>
    </React.StrictMode>
  );

  // Use reportWebVitals directly
  reportWebVitals();
} else {
  console.error('Root element not found');
}
