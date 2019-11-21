import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import { createPromise } from 'redux-promise-middleware'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const promise = createPromise({ types: { fulfilled: 'success' } });

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(promise, thunk, logger)
    )
)
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));

