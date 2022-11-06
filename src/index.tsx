import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContextProvider } from 'contexts';
import { ErrorBoundary } from 'components';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <ContextProvider>
                <App />
            </ContextProvider>
        </ErrorBoundary>
    </React.StrictMode>
);

reportWebVitals();
